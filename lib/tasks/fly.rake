# below added at suggestion of Fly Forum 

require 'rack'
require 'rack/handler/puma'

namespace :mock do
  desc 'Mock server - useful for debugging startup issues'
  task :server do
    handler = Rack::Handler::Puma

    class RackApp
      def call(env)
        [200, {"Content-Type" => "text/plain"}, ["Hello from Fly.io"]]
      end
    end

    handler.run RackApp.new, Port: ENV['PORT'] || 8080
  end
end
# ^^ above added at suggestion of Fly Forum ^^

# commands used to deploy a Rails application
namespace :fly do
  # BUILD step:
  #  - changes to the filesystem made here DO get deployed
  #  - NO access to secrets, volumes, databases
  #  - Failures here prevent deployment
  task :build # => 'assets:precompile' # -----------------------------changed

  # RELEASE step:
  #  - changes to the filesystem made here are DISCARDED
  #  - full access to secrets, databases
  #  - failures here prevent deployment
  task :release => 'db:migrate'

  # SERVER step:
  #  - changes to the filesystem made here are deployed
  #  - full access to secrets, databases
  #  - failures here result in VM being stated, shutdown, and rolled back
  #    to last successful deploy (if any).
  task :server # => 'assets:precompile' # ----------------------------changed
  task :server => :swapfile do
    sh 'bin/rails server'
  end

  # optional SWAPFILE task:
  #  - adjust fallocate size as needed
  #  - performance critical applications should scale memory to the
  #    point where swap is rarely used.  'fly scale help' for details.
  #  - disable by removing dependency on the :server task, thus:
  #        task :server do
  task :swapfile do
    sh 'fallocate -l 512M /swapfile'
    sh 'chmod 0600 /swapfile'
    sh 'mkswap /swapfile'
    sh 'echo 10 > /proc/sys/vm/swappiness'
    sh 'swapon /swapfile'
  end
end

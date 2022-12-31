desc 'Install Rails and React dependencies'
task install: :environment do
  exec 'bundle install'
  # exec 'npm instll --prefix client'
  exec 'npm install --prefix client'
end

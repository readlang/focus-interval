# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

# The below has been uncommented:

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'focus-interval.vercel.app/', 'https://focus-interval.vercel.app'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true
  end

end

# added below:
Rails.application.config.hosts << ".focus-interval.vercel.app/"
Rails.application.config.hosts << "focus-interval.fly.dev"
Rails.application.config.hosts << "localhost"
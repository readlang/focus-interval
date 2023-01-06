class SessionsController < ApplicationController
    skip_before_action :authorize #, only: [:create]

    # post "/login", to: "sessions#create" # explicit login and create session cookie
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            # session[:user_id] = user.id    <----------- changed to cookies
            cookies.encrypted[:user_id] = {
                value: user.id,
                same_site: :none,
                secure: true
                # this is new:
                # domain: ['localhost:4000', 'focus-interval.vercel.app', 'focus-interval.fly.dev']
            }
            render json: user, status: :created
        else
            render json: {errors: ["Invalid username or password"]}, status: :unauthorized
        end
    end

    # delete "/logout", to: "sessions#destroy" # log out and delete session cookie
    def destroy
        # session.delete :user_id   <----------- changed to cookies
        cookies.delete :user_id
        # cookies.delete(:user_id, domain: ['localhost:4000', 'focus-interval.vercel.app', 'focus-interval.fly.dev'] )
        head :no_content
    end
end

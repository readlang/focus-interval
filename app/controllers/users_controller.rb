class UsersController < ApplicationController
    skip_before_action :authorize # modify before deploying

    # post "/signup"
    def create
        new_user = User.create!(user_params)
        #session[:user_id] = new_user.id   <----------- changed to cookies
        cookies.encrypted[:user_id] = {
            value: new_user.id,
            same_site: :none,
            secure: true
        }
        render json: new_user, status: :created
    end

    # get "/me" - login using previously saved session cookie
    def show_me
        if current_user   # current_user found in application_controller helper method
            render json: current_user, status: :ok
        else
            render json: {errors: ["Not logged in"]}, status: :unauthorized
        end
    end

    # other users actions
    # get "/users"
    def index
        render json: User.all, status: :ok
    end

    # put "/users/current"
    def update
        user = current_user
        user.update!(edit_params)
        render json: user, status: :ok
    end

    # maybe this shouldn't be allowed...
    # delete "/users/:id"
    # def destroy
    #     user = current_user
    #     user.destroy
    #     render json: {deleted: user}, status: :ok
    # end

    # get "/users/current/loadall"
    def loadall
        render json: current_user, serializer: UserallSerializer, status: :ok
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :email, :interval, :preferences )
    end

    def edit_params
        params.permit(:password, :password_confirmation, :email, :interval, :preferences )
    end
end

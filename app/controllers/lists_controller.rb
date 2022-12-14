class ListsController < ApplicationController
    skip_before_action :authorize # delete before deploying

    # get /lists
    def index
        render json: List.all, status: :ok
    end

    # post /lists
    def create
        render json: List.create!(create_params), status: :created
    end

    # get /lists/:id
    def show
        render json: List.find_by!(id: params[:id]), status: :ok
    end

    # patch or put /lists/:id
    def update
        list = List.find_by!(id: params[:id])
        list.update!(edit_params)
        render json: list, status: :ok
    end

    # delete /lists/:id
    def destroy
        list = List.find_by!(id: params[:id])
        list.destroy
        render json: {deleted: list}, status: :ok
    end

    # get /users/current/lists
    def show_for_user
        render json: current_user.lists, status: :ok
    end

    # get /users/current/listsandtasks
    def show_for_user_with_tasks
        render json: current_user.lists, each_serializer: ListtaskSerializer, status: :ok
    end

    private

    def create_params
        params.permit(:user_id, :name, :details, :order )
    end

    def edit_params
        params.permit( :name, :details, :order )
    end

end

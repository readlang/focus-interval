class TasksController < ApplicationController
    skip_before_action :authorize # delete before deploying

    # get /tasks
    def index
        render json: Task.all, status: :ok
    end

    # post /tasks
    def create
        render json: Task.create!(create_params), status: :created
    end

    # get /tasks/:id
    def show
        render json: Task.find_by!(id: params[:id]), status: :ok
    end

    # patch or put /tasks/:id
    def update
        task = Task.find_by!(id: params[:id])
        task.update!(edit_params)
        render json: task, status: :ok
    end

    # delete /tasks/:id
    def destroy
        task = Task.find_by!(id: params[:id])
        task.destroy
        render json: {deleted: task}, status: :ok
    end

    # get /users/current/tasks
    def show_for_user
        render json: current_user.tasks, status: :ok
    end

    private

    def create_params
        params.permit(:list_id, :name, :length, :status )
    end

    def edit_params
        params.permit(:list_id, :name, :length, :status )
    end

end

Rails.application.routes.draw do

  resources :tasks
  resources :lists

  # custom routes
  get "/users/current/lists", to: "lists#show_for_user" # show the lists for the current user
  get "/users/current/listsandtasks", to: "lists#show_for_user_with_tasks" # show the lists/tasks for the current user
  get "/users/current/tasks", to: "tasks#show_for_user" # show the tasks for the current user
  get "/users/current/loadall", to: "users#loadall" # show the current user info with all lists + tasks

  # log in / log out actions
  post "/signup", to: "users#create" # new signup
  get "/me", to: "users#show_me" # return visit check session cookie
  post "/login", to: "sessions#create" # explicit login
  delete "/logout", to: "sessions#destroy" # log out

  # other users actions
  get "/users", to: "users#index"   # DELETE this later?? - why show all users to anyone?
  put "/users/current", to: "users#update"

  # delete "/users/:id", to: "users#destroy"  -  maybe we don't want to delete users

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

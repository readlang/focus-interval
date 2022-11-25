class UserallSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :interval, :preferences, :lists, :tasks #, :lists_with_tasks

  # def lists_with_tasks
  #   object.lists.each 
  #     object
  # end
  
end

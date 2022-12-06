class ListtaskSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :details, :order, :tasks
end

class ListtaskSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :list_name, :order, :tasks
end

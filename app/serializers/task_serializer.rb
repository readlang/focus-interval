class TaskSerializer < ActiveModel::Serializer
  attributes :id, :list_id, :name, :length, :status
end

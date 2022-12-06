class TaskSerializer < ActiveModel::Serializer
  attributes :id, :list_id, :name, :details, :length, :status
end

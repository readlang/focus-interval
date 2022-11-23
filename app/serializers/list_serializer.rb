class ListSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :list_name, :order
end

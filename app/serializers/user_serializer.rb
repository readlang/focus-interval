class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :interval, :preferences
  # removed :password_digest 
end

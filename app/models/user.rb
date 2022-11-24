class User < ApplicationRecord
    has_secure_password

    has_many :lists
    has_many :tasks, through: :lists

    validates :username, presence: true, uniqueness: true, length: { in: 4..12 }
end

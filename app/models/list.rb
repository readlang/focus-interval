class List < ApplicationRecord

    belongs_to :user
    has_many :tasks

    validates :list_name, presence: true, length: { in: 1..20 }
end

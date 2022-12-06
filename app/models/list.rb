class List < ApplicationRecord

    belongs_to :user
    has_many :tasks

    validates :name, presence: true, length: { in: 1..40 }
end

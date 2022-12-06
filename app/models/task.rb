class Task < ApplicationRecord

    belongs_to :list

    validates :name, presence: true, length: { in: 1..41 }
end

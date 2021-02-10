class Block < ApplicationRecord
  has_many :flashcards
  validates :title, presence: true
end

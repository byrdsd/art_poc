class Flashcard < ApplicationRecord
  belongs_to :block, foreign_key: 'block_id', class_name: 'Block'
  validates :front, presence: true
  validates :back, presence: true
end

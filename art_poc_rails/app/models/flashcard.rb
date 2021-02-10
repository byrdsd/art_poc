class Flashcard < ApplicationRecord
  validates :front, presence: true
  validates :back, presence: true
  attr_accessor :front, :back
end

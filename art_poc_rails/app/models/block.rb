class Block < ApplicationRecord
  validates :title, presence: true
  attr_accessor :title
end

require 'rails_helper'

RSpec.describe Flashcard, type: :model do
  describe 'has a front and a back' do
    it 'validates front and back fields' do
      flashcard = Flashcard.new
      flashcard.validate
      expect(flashcard.errors[:front]).to include("can't be blank")
      expect(flashcard.errors[:back]).to include("can't be blank")
    end
  end
end

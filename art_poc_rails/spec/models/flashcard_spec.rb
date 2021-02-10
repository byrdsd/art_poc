require 'rails_helper'

RSpec.describe Flashcard, type: :model do
  describe 'has a front and a back' do
    it 'raises an error' do
      expect { Flashcard.new }.to raise_error(Flashcard::MissingFieldError)
      expect { Flashcard.new(front: 'This is the front') }.to raise_error(Flashcard::MissingFieldError)
      expect { Flashcard.new(back: 'This is the back') }.to raise_error(Flashcard::MissingFieldError)
    end
  end
end

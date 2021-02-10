require 'rails_helper'

RSpec.describe Block, type: :model do
  describe 'has a title' do
    it 'validates title' do
      block = Block.new
      block.validate
      expect(block.errors[:title]).to include("can't be blank")
    end
  end
end

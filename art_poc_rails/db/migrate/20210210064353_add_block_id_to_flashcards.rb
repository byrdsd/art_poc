class AddBlockIdToFlashcards < ActiveRecord::Migration[6.1]
  def change
    add_column :flashcards, :block_id, :integer
  end
end

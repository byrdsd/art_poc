class CreateFlashcards < ActiveRecord::Migration[6.1]
  def change
    create_table :flashcards do |t|
      t.string :front, null: false
      t.boolean :front_image
      t.string :back, null: false
      t.boolean :back_image
      t.integer :block_id

      t.timestamps
    end
  end
end

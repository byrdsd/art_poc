class CreateFlashcards < ActiveRecord::Migration[6.1]
  def change
    create_table :flashcards do |t|
      t.string :front, null: false
      t.string :back, null: false

      t.timestamps
    end
  end
end

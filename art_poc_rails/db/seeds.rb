# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do |i|
  block = Block.create({title: "This is block #{i}"})
  Flashcard.create(front: "This is the first front", back: "This is the back", block: block)
  Flashcard.create(front: "This is the second front", back: "This is the back", block: block)
  Flashcard.create(front: "This is the third front", back: "This is the back", block: block)
end
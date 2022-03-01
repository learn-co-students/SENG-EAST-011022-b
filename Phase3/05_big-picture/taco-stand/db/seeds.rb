# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
UserTaco.destroy_all
User.destroy_all
Taco.destroy_all

User.create(name: "Wade", email: "w@w.com")
User.create(name: "Turner", email: "t@t.com")
User.create(name: "Violet", email: "v@v.com")

sizes = ["small", "medium", "large"]

Taco.create(name: "Steak", size: sizes.sample, price: rand(3..30))
Taco.create(name: "Chicken", size: sizes.sample, price: rand(3..30))
Taco.create(name: "Fish", size: sizes.sample, price: rand(3..30))
Taco.create(name: "Beef", size: sizes.sample, price: rand(3..30))

30.times do 
  UserTaco.create(user: User.all.sample, taco: Taco.all.sample, rating: rand(1..10))
end 



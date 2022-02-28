Order.destroy_all
Taco.destroy_all
User.destroy_all

Taco.create(name: "Beef", protein: "Chicken", price: 11)
Taco.create(name: "Chicken", protein: "Beef", price: 12)
Taco.create(name: "Veg", protein: "No Chicken", price: 22)

User.create(name: "Violet")
User.create(name: "Wade")
User.create(name: "Turner")

25.times do 
  Order.create(user_id: User.all.sample.id, taco_id: Taco.all.sample.id, rating: rand(0..10))
end 

# User.take


puts "created!!!"
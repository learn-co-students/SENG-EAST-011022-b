class User < ActiveRecord::Base
  has_many :orders
  has_many :tacos, through: :orders


  # def orders 
  #   Order.where(user_id: self.id)
  # end 

  # def tacos 
  #   self.orders.map {|order| Taco.find(order.taco_id)}
  # end 
end





# u = User.first

# u.tacos
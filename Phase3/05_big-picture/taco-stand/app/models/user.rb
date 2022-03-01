class User < ApplicationRecord
  has_many :user_tacos
  has_many :tacos, through: :user_tacos


  def taco_names
    self.tacos.map {|taco| taco.name}
    # self.tacos.pluck(:name)
  end 

  def average_taco_rating
    binding.break 
    num_array = self.user_tacos.map {|user_taco| user_taco.rating }
    num_array.sum / num_array.length
  end 


  def more_info 
    {
     id: self.id,
     name: self.name,
     email: self.email,
     tacos: self.taco_names,
     average_rating: self.average_taco_rating
    }
  end 
end

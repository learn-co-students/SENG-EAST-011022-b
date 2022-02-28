class Taco < ActiveRecord::Base

  def self.average_taco_cost
    self.all.sum {|taco| taco.price} / self.all.length
  end 

  def self.long_names
    name_array = self.pluck(:name)
    name_array.select {|name| name.length > 4}
  end 
  
end
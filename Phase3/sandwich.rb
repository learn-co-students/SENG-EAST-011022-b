require 'pry'

class Sandwich

  # attr_accessor :name, :size, :bread

  @@all = []

  def initialize(name, size, bread)
    @name = name
    @size = size
    @bread = bread

    @@all << self
  end

  def name 
    @name
  end 

  def name=(newName) 
    @name = newName
  end 

  def add_excitement_to_name 
    self.name= self.name + "!!!"

    # @name = @name + '!!!'
  end 

  def self.all
    @@all
  end 
 
  def self.get_all_on_roll
    self.all.select {|sandy| sandy.bread === "roll"}
  end

  def self.chage_all_names
    self.all.each {|sandy| sandy.add_excitement_to_name }
  end

end


class Array
  def super_sweet
    'this array is the best in the game'
  end 
end 




tbc = Sandwich.new("TBC", '6 inch', 'roll')
moodwich = Sandwich.new("Moonwich", '12 inch', 'sub')
italian = Sandwich.new("Italian", '12 inch', 'white')



binding.pry
puts 'hi'
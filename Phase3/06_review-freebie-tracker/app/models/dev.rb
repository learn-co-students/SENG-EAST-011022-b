class Dev < ActiveRecord::Base
  has_many :freebies
  has_many :companies, through: :freebies


  def received_one?(item_name)
    # array_of_names = self.freebies.map {|freebie|  freebie.item_name}
    array_of_names = self.freebies.pluck(:item_name)
    array_of_names.include?(item_name)
  end   

  def give_away(dev, freebie)
    if freebie.dev == self 
     freebie.update(dev_id: dev.id)
    end 

    # freebie.dev_id = dev.id
    # freebie.save
  end 
end

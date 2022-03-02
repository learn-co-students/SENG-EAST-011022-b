class Company < ActiveRecord::Base
  has_many :freebies
  has_many :devs, through: :freebies


  def give_freebie(dev_instance, item_name, value)
    Freebie.create(company_id: self.id, dev_id: dev_instance.id, item_name: item_name, value: value)
  end 

  def self.oldest_company
    self.order(:founding_year).last
    # Company.order(:founding_year)
  end 
end

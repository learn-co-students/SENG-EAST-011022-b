class Instructor < ApplicationRecord
  has_many :students

  validates :name, presence: true
  # validate :my_custom_validator


  # def my_custom_validator
  # end 

end

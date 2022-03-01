class Taco < ApplicationRecord
  has_many :user_tacos
  has_many :user, through: :user_tacos
end

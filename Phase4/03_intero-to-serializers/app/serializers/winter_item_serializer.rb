class WinterItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price

  has_many :reviews
end

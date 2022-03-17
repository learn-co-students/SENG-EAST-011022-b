class UserItemsSerializer < ActiveModel::Serializer
  attributes :id, :name, :city

  has_many :winter_items
end

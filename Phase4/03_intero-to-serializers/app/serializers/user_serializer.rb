class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :return_my_name

  # has_many :winter_items



  def return_my_name
    self.object.name + "!!!!!"
  end 
end

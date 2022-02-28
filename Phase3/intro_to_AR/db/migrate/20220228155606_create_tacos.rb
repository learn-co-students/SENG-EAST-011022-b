class CreateTacos < ActiveRecord::Migration[6.1]
  def change
    create_table :tacos do |t|
      t.string :name
      t.string :protein
      t.integer :price
    end 
  end
end

class CreateUserTacos < ActiveRecord::Migration[7.0]
  def change
    create_table :user_tacos do |t|
      t.integer :user_id
      t.integer :taco_id
      t.integer :rating

      t.timestamps
    end
  end
end

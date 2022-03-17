class CreateWinterItems < ActiveRecord::Migration[7.0]
  def change
    create_table :winter_items do |t|
      t.string :name
      t.integer :price
      t.string :img_url

      t.timestamps
    end
  end
end

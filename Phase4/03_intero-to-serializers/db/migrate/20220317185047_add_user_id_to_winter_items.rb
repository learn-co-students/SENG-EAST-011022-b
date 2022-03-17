class AddUserIdToWinterItems < ActiveRecord::Migration[7.0]
  def change
    add_column :winter_items, :user_id, :integer
  end
end

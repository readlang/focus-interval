class CreateLists < ActiveRecord::Migration[6.1]
  def change
    create_table :lists do |t|
      t.integer :user_id
      t.string :list_name
      t.string :order

      t.timestamps
    end
  end
end

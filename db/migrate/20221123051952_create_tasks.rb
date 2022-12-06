class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.integer :list_id
      t.string :name
      t.string :details
      t.integer :length
      t.string :status

      t.timestamps
    end
  end
end

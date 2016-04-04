class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false
      t.integer :track_id, null: false

      t.timestamps null: false
    end
    add_index :favorites, [:user_id, :track_id], unique: true
    add_index :favorites, :track_id
  end
end

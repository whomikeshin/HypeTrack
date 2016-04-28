class CreateFollows < ActiveRecord::Migration
  def change
    create_table :follows do |t|
      t.integer :user_id, null: false
      t.integer :blog_id
      t.integer :artist_id

      t.timestamps null: false
    end
    add_index :follows, [:user_id, :blog_id], unique: true
    add_index :follows, :blog_id
    add_index :follows, [:user_id, :artist_id], unique: true
    add_index :follows, :artist_id
  end
end

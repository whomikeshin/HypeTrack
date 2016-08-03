class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.integer :track_id
      t.integer :genre_id
      
      t.timestamps null: false
    end
  end
end

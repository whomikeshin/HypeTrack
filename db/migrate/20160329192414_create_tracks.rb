class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :artist_id, null: false

      t.timestamps null: false
    end
    add_index :tracks, [:title, :artist_id], unique: true
  end
end

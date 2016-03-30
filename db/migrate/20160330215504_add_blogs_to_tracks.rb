class AddBlogsToTracks < ActiveRecord::Migration
  def change
    add_column :tracks, :blog_id, :integer, null: false
  end
end

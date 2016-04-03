class AddColumnToPostsAndRemoveFromTracks < ActiveRecord::Migration
  def change
    add_column :posts, :track_info, :text
    remove_column :tracks, :description
  end
end

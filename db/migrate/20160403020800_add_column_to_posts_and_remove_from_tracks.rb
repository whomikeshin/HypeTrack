class AddColumnToPostsAndRemoveFromTracks < ActiveRecord::Migration
  def change
    add_column :posts, :track_info, :string
    remove_column :tracks, :description
  end
end

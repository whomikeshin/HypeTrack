class RenameTracksBlogsToPosts < ActiveRecord::Migration
  def change
    rename_table :tracks_blogs, :posts
  end
end

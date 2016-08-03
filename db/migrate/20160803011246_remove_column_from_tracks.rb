class RemoveColumnFromTracks < ActiveRecord::Migration
  def change
    remove_column :tracks, :genre, :datetime
  end
end

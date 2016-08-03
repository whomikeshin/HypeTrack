class AddColumnToTracks < ActiveRecord::Migration
  def change
    add_column :tracks, :genre, :datetime
  end
end

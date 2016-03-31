class CreateJoinTableTracksPlaylist < ActiveRecord::Migration
  def change
    create_table :tracks_playlists do |t|
      t.belongs_to :track, index: true
      t.belongs_to :playlist, index: true
      t.datetime :add_date
    end
  end
end

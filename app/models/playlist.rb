class Playlist < ActiveRecord::Base
  has_many :tracks_playlists
  has_many :tracks, through: :tracks_playlists

  validates :name, presence: true
end

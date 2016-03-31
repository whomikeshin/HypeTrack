class Track < ActiveRecord::Base
  belongs_to :artist
  has_many :tracks_blogs
  has_many :blogs, through: :tracks_blogs
  has_many :tracks_playlists
  has_many :playlists, through: :tracks_playlists

  validates :title, :description, presence: true
end

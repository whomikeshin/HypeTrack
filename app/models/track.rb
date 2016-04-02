class Track < ActiveRecord::Base
  has_attached_file :image, default_url: "test.jpg"
  validates_attachment_content_type :track_art, content_type: /\Aimage\/.*\Z/

  has_attached_file :audio
  validates_attachment_content_type :audio, content_type: /\Aaudio\/.*\Z/

  belongs_to :artist
  has_many :tracks_blogs
  has_many :blogs, through: :tracks_blogs
  has_many :tracks_playlists
  has_many :playlists, through: :tracks_playlists

  validates :title, :description, presence: true
end

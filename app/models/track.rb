class Track < ActiveRecord::Base
  # has_attached_file :track_image, default_url: "hypem.jpg"
  # validates_attachment_content_type :track_image, content_type: /\Aimage\/.*\Z/

  # has_attached_file :audio
  # validates_attachment_content_type :audio, content_type: /\Aaudio\/.*\Z/

  belongs_to :artist

  has_many :posts
  has_many :blogs, through: :posts

  has_many :tracks_playlists
  has_many :playlists, through: :tracks_playlists

  validates :title, presence: true
end

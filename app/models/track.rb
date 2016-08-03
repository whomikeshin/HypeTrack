class Track < ActiveRecord::Base
  # has_attached_file :track_image, default_url: "hypem.jpg"
  # validates_attachment_content_type :track_image, content_type: /\Aimage\/.*\Z/
  #
  # has_attached_file :audio
  # validates_attachment_content_type :audio, content_type: /\Aaudio\/.*\Z/

  belongs_to :artist

  has_many :posts
  has_many :blogs, through: :posts, source: :blog

  has_many :tracks_playlists
  has_many :playlists, through: :tracks_playlists

  has_many :favorites, dependent: :destroy
  has_many :lovers, through: :favorites, source: :user

  has_many :tags
  has_many :genres, through: :tags

  validates :title, presence: true

end

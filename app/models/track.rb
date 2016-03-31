class Track < ActiveRecord::Base
  belongs_to :artist
  has_many :tracks_blogs
  has_many :blogs, through: :tracks_blogs

  validates :title, :description, presence: true
end

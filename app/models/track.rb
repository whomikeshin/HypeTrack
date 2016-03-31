class Track < ActiveRecord::Base
  belongs_to :artist
  has_many :blogs, through: :track_sources

  validates :title, :description, presence: true
end

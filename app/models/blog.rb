class Blog < ActiveRecord::Base
  has_many :tracks, through: :track_sources

  validates :name, :url, presence: true
end

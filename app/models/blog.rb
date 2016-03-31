class Blog < ActiveRecord::Base
  has_many :tracks_blogs
  has_many :tracks, through: :tracks_blogs

  validates :name, :url, presence: true
end

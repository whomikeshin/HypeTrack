class Blog < ActiveRecord::Base
  has_many :posts
  has_many :tracks, through: :posts

  validates :name, :url, presence: true
end

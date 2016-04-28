class Blog < ActiveRecord::Base
  has_many :posts
  has_many :tracks, through: :posts

  has_many :follows, dependent: :destroy
  has_many :followers, through: :follows, source: :user

  validates :name, :url, presence: true
end

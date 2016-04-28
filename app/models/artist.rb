class Artist < ActiveRecord::Base
  has_many :tracks
  has_many :follows

  validates :name, presence: true
end

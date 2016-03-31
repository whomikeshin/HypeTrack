class Track < ActiveRecord::Base
  belongs_to :artist
  has_and_belongs_to_many :blogs

  validates :title, :description, presence: true
end

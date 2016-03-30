class Track < ActiveRecord::Base
  belongs_to :artist
  belongs_to :blog

  validates :title, :description, presence: true
end

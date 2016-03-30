class Track < ActiveRecord::Base
  belongs_to :artist

  validates :title, :description, presence: true 
end

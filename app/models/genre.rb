class Genre < ActiveRecord::Base
  has_many :tags
  has_many :tracks, through: :tags, source: :track
end

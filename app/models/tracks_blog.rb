class TracksBlog < ActiveRecord::Base
  belongs_to :track
  belongs_to :blog
end

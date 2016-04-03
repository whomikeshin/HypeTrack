class Post < ActiveRecord::Base
  belongs_to :track
  belongs_to :blog
end

class Follow < ActiveRecord::Base
  validates :user, presence: true
  validates :user, uniqueness: { scope: :blog }
  # validates :user, uniqueness: { scope: :artist }

  belongs_to :user
  belongs_to :blog
  # belongs_to :artist
end

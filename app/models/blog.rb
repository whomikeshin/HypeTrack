class Blog < ActiveRecord::Base
  has_many :tracks

  validates :name, :url, presence: true
end

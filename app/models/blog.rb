class Blog < ActiveRecord::Base
  has_and_belongs_to_many :tracks

  validates :name, :url, presence: true
end

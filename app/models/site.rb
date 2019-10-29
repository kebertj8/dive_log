class Site < ApplicationRecord
  validates :name, presence: true
  validates :address, presence: true
  validates :region, presence: true
  validates :longitude, presence: true
  validates :latitude, presence: true

  has_many :dives
end

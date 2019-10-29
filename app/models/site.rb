class Site < ApplicationRecord
  validates :name, presence: true
  validates :address, presence: true
  validates :region, presence: true
  validates :longitude, presence: true
  validates :latitude, presence: true

  belongs_to :diver
  belongs_to :dive 
end
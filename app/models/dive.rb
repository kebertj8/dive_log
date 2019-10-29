class Dive < ApplicationRecord
  validates :style, presence: true, length: { minimum: 3 }
  validates :number, presence: true
  validates :depth, presence: true
  validates :visibility, presence: true
  validates :tempurature, presence: true
  validates :longitude, presence: true
  validates :latitude, presence: true
  validates :dive_buddy, presence: true

  belongs_to :site
  has_many :divers, through: :excurion
end

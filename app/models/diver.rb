class Diver < ApplicationRecord
  validates :name, presence: true
  validates :address, presence: true
  validates :gender, presence: true
  validates :diving_since, presence: true
  
  has_many :sites
  has_many :dives, through: :sites
end

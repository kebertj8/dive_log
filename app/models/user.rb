class User < ApplicationRecord
  validates :name, presence: true
  validates :address, presence: true
  validates :gender, presence: true
  validates :diving_since, presence: true

  has_many :excursions
  has_many :dives, through: :excurions
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end

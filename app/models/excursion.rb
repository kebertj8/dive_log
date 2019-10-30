class Excursion < ApplicationRecord
  belongs_to :users
  belongs_to :dive
end

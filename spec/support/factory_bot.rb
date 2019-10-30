require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
    name { 'john' }
    gender { 'male' }
    address { 'somerville' }
    diving_since { '2015' }
  end

end

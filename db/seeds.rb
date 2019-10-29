# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Dive.create(style: "scuba", number: "3", depth: "10M", visibility: "12ft", tempurature: "25C", longitude: "1239484", latitude: "23143431", dive_buddy: "matt")
User.create(name: "Kebert", address: "Somerville", gender: "male", diving_since: "2015")
Site.create(name: "Lanes Cove", address: "Cape Ann", region: "Gloucester", longitude: "000345", latitude: "874329")
# Excursion.create(user_id: "", dive_id: "")

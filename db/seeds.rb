# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Dive.create(style: "scuba", number: "3", depth: "10M", visibility: "12ft", tempurature: "25C", longitude: "1239484", latitude: "23143431", dive_buddy: "matt")
# User.create(name: "Kebert", address: "Somerville", gender: "male", diving_since: "2015")
Site.create(name: "Lanes Cove", address: "Cape Ann", region: "Gloucester", longitude: "000345", latitude: "874329", description: "Lanes Cove is truly unique, located in the village of Lanesville in Gloucester Massachusetts. Lanesville rose to prominence in the 1800's for fishing (one could row out into Ipswich Bay and bring back a boatload of cod) and later granite quarrying. Except for lobstering, no one fishes out of Lanes Cove today, and all that is left of the granite industry are water-filled quarries and a cove with massive breakwaters designed specifically for loading granite onto sloops. Because the granite industry died in the 1930's, Lanesville has remained largely untouched. Much of the land the quarries are situated on is owned by the City of Gloucester, or private citizens who hold together these large plots of land.", image: "https://paddleboston.com/app/uploads/Lanes-cove-1.jpeg")
# Excursion.create(user_id: "", dive_id: "")

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_29_200219) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "divers", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "gender", null: false
    t.string "diving_since", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "dives", force: :cascade do |t|
    t.string "style", null: false
    t.string "number", null: false
    t.string "depth", null: false
    t.string "visibility", null: false
    t.string "tempurature", null: false
    t.string "longitude", null: false
    t.string "latitude", null: false
    t.string "dive_buddy", null: false
    t.bigint "site_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["site_id"], name: "index_dives_on_site_id"
  end

  create_table "excurions", force: :cascade do |t|
    t.bigint "diver_id", null: false
    t.bigint "dive_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dive_id"], name: "index_excurions_on_dive_id"
    t.index ["diver_id"], name: "index_excurions_on_diver_id"
  end

  create_table "sites", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "region", null: false
    t.string "longitude", null: false
    t.string "latitude", null: false
    t.string "description", null: false
    t.string "image"
    t.bigint "diver_id", null: false
    t.bigint "dive_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dive_id"], name: "index_sites_on_dive_id"
    t.index ["diver_id"], name: "index_sites_on_diver_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "gender", null: false
    t.string "diving_since", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end

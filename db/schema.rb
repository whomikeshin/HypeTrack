# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20160331132524) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "artists", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "artists", ["name"], name: "index_artists_on_name", unique: true, using: :btree

  create_table "blogs", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "url",        null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "blogs", ["name"], name: "index_blogs_on_name", unique: true, using: :btree

  create_table "track_sources", force: :cascade do |t|
    t.integer  "track_id"
    t.integer  "blog_id"
    t.datetime "post_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "track_sources", ["blog_id"], name: "index_track_sources_on_blog_id", using: :btree
  add_index "track_sources", ["track_id"], name: "index_track_sources_on_track_id", using: :btree

  create_table "tracks", force: :cascade do |t|
    t.string   "title",       null: false
    t.text     "description", null: false
    t.integer  "artist_id",   null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "tracks", ["title", "artist_id"], name: "index_tracks_on_title_and_artist_id", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                            null: false
    t.string   "username",                         null: false
    t.string   "password_digest",                  null: false
    t.string   "session_token",                    null: false
    t.boolean  "activated",        default: false
    t.string   "activation_token",                 null: false
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end

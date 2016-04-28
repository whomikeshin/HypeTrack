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

ActiveRecord::Schema.define(version: 20160428130207) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "artists", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "artists", ["name"], name: "index_artists_on_name", unique: true, using: :btree

  create_table "blogs", force: :cascade do |t|
    t.string   "name",        null: false
    t.string   "url",         null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "thumb_url"
    t.string   "twitter_url"
  end

  add_index "blogs", ["name"], name: "index_blogs_on_name", unique: true, using: :btree

  create_table "favorites", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "track_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "favorites", ["track_id"], name: "index_favorites_on_track_id", using: :btree
  add_index "favorites", ["user_id", "track_id"], name: "index_favorites_on_user_id_and_track_id", unique: true, using: :btree

  create_table "follows", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "blog_id"
    t.integer  "artist_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "follows", ["artist_id"], name: "index_follows_on_artist_id", using: :btree
  add_index "follows", ["blog_id"], name: "index_follows_on_blog_id", using: :btree
  add_index "follows", ["user_id", "artist_id"], name: "index_follows_on_user_id_and_artist_id", unique: true, using: :btree
  add_index "follows", ["user_id", "blog_id"], name: "index_follows_on_user_id_and_blog_id", unique: true, using: :btree

  create_table "playlists", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "playlists", ["name"], name: "index_playlists_on_name", unique: true, using: :btree

  create_table "posts", force: :cascade do |t|
    t.integer  "track_id"
    t.integer  "blog_id"
    t.datetime "post_date"
    t.string   "track_title"
    t.string   "artist_name"
    t.text     "track_info"
    t.string   "post_url"
    t.string   "thumb_url"
  end

  add_index "posts", ["blog_id"], name: "index_posts_on_blog_id", using: :btree
  add_index "posts", ["track_id"], name: "index_posts_on_track_id", using: :btree

  create_table "tracks", force: :cascade do |t|
    t.string   "title",                    null: false
    t.integer  "artist_id",                null: false
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
    t.string   "track_image_file_name"
    t.string   "track_image_content_type"
    t.integer  "track_image_file_size"
    t.datetime "track_image_updated_at"
    t.string   "audio_file_name"
    t.string   "audio_content_type"
    t.integer  "audio_file_size"
    t.datetime "audio_updated_at"
  end

  add_index "tracks", ["title", "artist_id"], name: "index_tracks_on_title_and_artist_id", unique: true, using: :btree

  create_table "tracks_blogs", force: :cascade do |t|
    t.integer  "track_id"
    t.integer  "blog_id"
    t.datetime "post_date"
  end

  add_index "tracks_blogs", ["blog_id"], name: "index_tracks_blogs_on_blog_id", using: :btree
  add_index "tracks_blogs", ["track_id"], name: "index_tracks_blogs_on_track_id", using: :btree

  create_table "tracks_playlists", force: :cascade do |t|
    t.integer  "track_id"
    t.integer  "playlist_id"
    t.datetime "add_date"
  end

  add_index "tracks_playlists", ["playlist_id"], name: "index_tracks_playlists_on_playlist_id", using: :btree
  add_index "tracks_playlists", ["track_id"], name: "index_tracks_playlists_on_track_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                            null: false
    t.string   "username",                         null: false
    t.string   "password_digest",                  null: false
    t.string   "session_token",                    null: false
    t.boolean  "activated",        default: false
    t.string   "activation_token",                 null: false
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.string   "thumb_url"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end

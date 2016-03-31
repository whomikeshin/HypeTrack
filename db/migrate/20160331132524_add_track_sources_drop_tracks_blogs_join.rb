class AddTrackSourcesDropTracksBlogsJoin < ActiveRecord::Migration
  def change
    create_table :track_sources do |t|
      t.belongs_to :track, index: true
      t.belongs_to :blog, index: true
      t.datetime :post_date
      t.timestamps null: false
    end
  end
end

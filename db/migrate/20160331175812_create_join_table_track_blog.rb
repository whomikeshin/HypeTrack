class CreateJoinTableTrackBlog < ActiveRecord::Migration
  def change
    create_table :tracks_blogs do |t|
      t.belongs_to :track, index: true
      t.belongs_to :blog, index: true
      t.datetime :post_date
    end
  end
end

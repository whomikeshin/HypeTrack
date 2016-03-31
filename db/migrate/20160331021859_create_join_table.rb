class CreateJoinTable < ActiveRecord::Migration
  def change
    create_join_table :tracks, :blogs do |t|
      t.index [:track_id, :blog_id]
      t.index [:blog_id, :track_id]
    end
  end
end

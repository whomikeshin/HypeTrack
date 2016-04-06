class Add < ActiveRecord::Migration
  def change
    add_column :posts, :thumb_url, :string
  end
end

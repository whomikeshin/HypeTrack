class AddColumnToBlogs < ActiveRecord::Migration
  def change
    add_column :blogs, :thumb_url, :string
    add_column :blogs, :twitter_url, :string
  end
end

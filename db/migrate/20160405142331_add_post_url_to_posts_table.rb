class AddPostUrlToPostsTable < ActiveRecord::Migration
  def change
    add_column :posts, :post_url, :string
  end
end

class AddColumnsToPostsTable < ActiveRecord::Migration
  def change
    add_column :posts, :track_title, :string
    add_column :posts, :artist_name, :string
    add_column :posts, :track_image_content_type, :string
    add_column :posts, :track_image_file_size, :integer
    add_column :posts, :track_image_updated_at, :datetime
    add_column :posts, :audio_file_name, :string
    add_column :posts, :audio_content_type, :string
    add_column :posts, :audio_file_size, :integer
    add_column :posts, :audio_updated_at, :datetime
  end
end

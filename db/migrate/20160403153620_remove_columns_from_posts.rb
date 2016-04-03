class RemoveColumnsFromPosts < ActiveRecord::Migration
  def change
    remove_column :posts, :track_image_content_type, :string
    remove_column :posts, :track_image_file_size, :integer
    remove_column :posts, :track_image_updated_at, :datetime
    remove_column :posts, :audio_file_name, :string
    remove_column :posts, :audio_content_type, :string
    remove_column :posts, :audio_file_size, :integer
    remove_column :posts, :audio_updated_at, :datetime
  end
end

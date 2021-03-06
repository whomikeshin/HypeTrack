class AddFileColumnsToTracks < ActiveRecord::Migration
  def change
    add_column :tracks, :track_image_content_type, :string
    add_column :tracks, :track_image_file_size, :integer
    add_column :tracks, :track_image_updated_at, :datetime
    add_column :tracks, :audio_file_name, :string
    add_column :tracks, :audio_content_type, :string
    add_column :tracks, :audio_file_size, :integer
    add_column :tracks, :audio_updated_at, :datetime
  end
end

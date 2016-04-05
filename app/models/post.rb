class Post < ActiveRecord::Base
  belongs_to :track
  belongs_to :blog

  # def self.find_or_create_by_attributes(artist_name, track_title)
  #   artist = Artist.find_or_create_by(name: artist_name)
  #
  #   artist_track = artist.tracks.find_by(title: track_title)
  #
  #   if artist_track
  #     return artist, artist_track
  #   else
  #     Track.new()
  # end
end

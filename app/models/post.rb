class Post < ActiveRecord::Base
  belongs_to :track
  belongs_to :blog

  # def self.find_or_create_by_attributes(artist_name, track_title)
  #   @artist = Artist.find_or_create_by(name: artist_name)
  #   if @artist.save
  #     render json: ["Artist was created"]
  #   else
  #     render json: @artist.errors.full_messages, status: status: 422
  #   end
  # #
  # #   @track = Track.find_or_create_by(title: track_title)
  #   if @track.save
  #     render json: ["Track was created"]
  #   else
  #     render json: @track.errors.full_messages, status: 422
  #   end
  # end
end

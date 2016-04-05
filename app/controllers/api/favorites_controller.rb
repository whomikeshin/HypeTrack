class Api::FavoritesController < ApplicationController
  before_action :require_signed_in!

  def create
    favorite = current_user.favorites.new(track_id: params[:track_id])

    if favorite.save
      @track = favorite.track
      render 'api/tracks/show'
    else
      render json: favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    favorite = current_user.favorites.find_by(track_id: params[:track_id])

    if favorite
      favorite.destroy
      @track = favorite.track
      render 'api/tracks/show'
    else
      render json: ["Favorite does not exist"], status: 422
    end
  end
end

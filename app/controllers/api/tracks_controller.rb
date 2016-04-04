class Api::TracksController < ApplicationController
  def index
    @tracks =
      Track.all
        .includes(:posts)
        .includes(:user_favorites)

    render :index
  end

  def show
    @track = Track.find(params[:id])
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      render json: ["Track was created"]
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
    @track = Track.find(params[:id])

    if @track
      @track.destroy
      render :show
    else
      render json: ["Track does not exist"], status: 422
    end
  end

  def update
    @track = Track.find(params[:id])
    if @track.update(track_params)
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  private
  def track_params
    params.require(:track).permit(:title, :artist)
  end
end

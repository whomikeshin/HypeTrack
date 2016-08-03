class Api::GenresController < ApplicationController
  def index
    @genres =
      Genre.all
        .includes(:tracks)

    render :index
  end

  def show
    @tag = Tag.find(params[:id])
  end
end

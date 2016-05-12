class Api::BlogsController < ApplicationController
  def index
    @blogs =
      Blog.all
        .includes(:followers)
        
    render :index
  end

  def create
    @blog = Blog.new(blog_params)
    if @blog.save
      render json: ["Blog was created"]
    else
      render json: @blog.errors.full_messages, status: 422
    end
  end

  def destroy
    @blog = Blog.find(params[:id])

    if @blog
      @blog.destroy
      render json: ["Arist was destroyed"]
    else
      render json: ["Blog does not exist"], status: 422
    end
  end

  def show
    @blog = Blog.find(params[:id])
  end

  private
  def blog_params
    params.require(:blog).permit(:name, :url, :thumb_url, :twitter_url)
  end
end

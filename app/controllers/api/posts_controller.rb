class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
    render :index
  end


  def create
    @post = Post.new(post_params)
    Post.find_or_create_by_attributes(@post[:artist_name], @post[:track_title])
    if @post.save
      render json["Post was created"]
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  private
  def post_params
    params.require(:post).permit(:track_title, :artist_name, :track_info)
  end
end

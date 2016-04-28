class Api::FollowsController < ApplicationController
  before_action :require_signed_in!

  def create
    follow = current_user.follows.new(blog_id: params[:blog_id])

    if follow.save
      @blog = follow.blog
      render 'api/blogs/show'
    else
      render json: follow.errors.full_messages, status: 422
    end
  end

  def destroy
    follow = current_user.follows.find_by(blog_id: params[:blog_id])

    if follow
      follow.destroy
      @blog = follow.blog
      render 'api/blogs/show'
    else
      render json: ["Not following blog"], status: 422
    end
  end
end

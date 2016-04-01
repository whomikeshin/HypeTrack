class Api::UsersController < ApplicationController
  before_action :require_signed_in!, only: [:update]

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render "api/tracks/index"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = current_user

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private
  def user_params
    params.require(:user).permit(:email, :username, :password, :activated, :activation_token)
  end
end

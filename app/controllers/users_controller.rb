class UsersController < ApplicationController
  def show
    render :show
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      redirect_to tracks_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def new
    @user = User.new
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end

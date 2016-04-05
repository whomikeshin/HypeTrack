class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:username],
      params[:password]
    )

    if @user
      sign_in(@user)
      render "api/users/show"
    else
      render json: ["Invalid username or password"], status: 401
    end
  end

  def show
    if current_user
      @user = current_user
      render "api/users/show"
    else
      render json: {}
    end
  end

  def destroy
    sign_out
    render json: {}
  end
end

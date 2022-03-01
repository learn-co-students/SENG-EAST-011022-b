class UsersController < ApplicationController
  # GET /users
  def index
    users = User.all

    render json: users
  end

  # GET /users/1
  def show
    user = User.find(params[:id])

    render json: user.more_info
  end

end

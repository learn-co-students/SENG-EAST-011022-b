class UserTacosController < ApplicationController
  before_action :set_user_taco, only: %i[ show update destroy ]

  # GET /user_tacos
  def index
    @user_tacos = UserTaco.all

    render json: @user_tacos
  end

  # GET /user_tacos/1
  def show
    render json: @user_taco
  end

  # POST /user_tacos
  def create
    @user_taco = UserTaco.new(user_taco_params)

    if @user_taco.save
      render json: @user_taco, status: :created, location: @user_taco
    else
      render json: @user_taco.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_tacos/1
  def update
    if @user_taco.update(user_taco_params)
      render json: @user_taco
    else
      render json: @user_taco.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_tacos/1
  def destroy
    @user_taco.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_taco
      @user_taco = UserTaco.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_taco_params
      params.require(:user_taco).permit(:user_id, :taco_id, :rating)
    end
end

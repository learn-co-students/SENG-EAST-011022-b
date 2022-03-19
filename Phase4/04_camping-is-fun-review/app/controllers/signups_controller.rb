class SignupsController < ApplicationController

  def create 
    signup = Signup.create(signup_params)

    if signup.valid? 
      render json: signup.activity, status: :ok
    else 
      render json: {errors: signup.errors.full_messages}, status: :uprocessable_entity
    end 
  end 
end

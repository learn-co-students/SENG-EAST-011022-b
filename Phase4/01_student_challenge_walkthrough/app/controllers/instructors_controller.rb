class InstructorsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid_record
  rescue_from ActiveRecord::RecordNotFound, with: :handle_not_found

  def index 
    instructors = Instructor.all

    render json: instructors, status: :ok
  end 

  def show 
    instructor = Instructor.find(params[:id])

    render json: instructor, status: :ok
  end 

  def create 
    instructor = Instructor.create!(instructor_params)
    render json: instructor, status: :created
    
    # if instructor.save
    #   render json: instructor, status: :ok 
    # else
    #   render json: {errors: instructor.errors.full_messages}, status: :unprocessable_entity
    # end 
    
  end 
  
  private
  
  def instructor_params
    byebug
    params.permit(:name)
  end 
  
  def handle_invalid_record(exception)
      render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
  end

  def handle_no_found(exception)
      render json: {errors: exception.record.errors.full_messages}, status: :not_found
  end 

end

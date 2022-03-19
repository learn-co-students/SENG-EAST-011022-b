class CampersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :handle_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid_record

  def index 
    campers = Camper.all

    render json: campers, status: :ok
  end 

  def show
    camper = Camper.find(params[:id])
    render json: camper, serializer: CamperActivitiesSerializer, status: :ok


    # camper = Camper.find_by(id: params[:id])

    # if camper  
    #   render json: camper, serializer: CamperActivitiesSerializer, status: :ok
    # else
    #   render json: {errors: "Camper not Found"}
    # end
  end 

  def create 
    camper = Camper.create!(camper_params)
    render json: camper, status: :ok

    # ------------------Conditional Errror Handling
    # camper = Camper.create(camper_params)

    # if camper.valid?
    #   render json: camper
    # else 
    #   # render json: {errors: "Camper did not create"} # this is ok
    #   render json: {errors: camper.errors.full_messages} # this is great
    # end 
  end 

  def destroy 
    camper = Camper.find(params[:id])
    
    camper.destroy
    head :no_content


    # ----------- Conditional handling
    # camper = Camper.find_by(id: params[:id])

    # if camper  
    #   camper.destroy
    #   head :no_content
    # else
    #   render json: {error: "Camper not Found"}
    # end
  end 

  private

  def camper_params
    params.permit(:name, :age)
    # {name: "Greg", age: 10 }
  end 

  def handle_not_found(exception)
    # render json: {errors: "Camper not Found"}
    render json: {errors: exception.message}, status: :not_found
  end 

  def handle_invalid_record(exception)
    render json: {errors: exception.message}, status: :uprocessable_entity
  end 

end

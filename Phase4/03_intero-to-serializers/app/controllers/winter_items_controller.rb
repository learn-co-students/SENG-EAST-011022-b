class WinterItemsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :handle_record_not_found
rescue_from ActiveRecord::RecordInvalid, with: :handle_record_invalid
# rescue_from ActiveRecord::ParamMissing, with: :handle_missing_param

  def index 
    items = WinterItem.all  

    render json: items
  end 

  def create
    item = WinterItem.create!(winter_item_params)

    render json: item, status: :created
  end 

  def destroy 
    item = WinterItem.find(params[:id])
    
    item.destroy
    head :no_content
    
    # item = WinterItem.find_id(id: params[:id])

    # if item 
    #   item.destroy
    #   head :no_content
    # else 
    #   render json: {errors: "not found"}, status: :unprocessable_entity
    # end 

  end 

  private 
  def winter_item_params
    params.permit(:name, :img_url, :price)
  end 

  def handle_record_not_found(exception)
    render json: {errors: exception.record.errors.full_messages}, status: :not_found
  end 

  def handle_record_invalid(exception)
    render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
  end 
end

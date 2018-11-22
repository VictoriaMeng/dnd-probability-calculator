class DamageCalculationsController < ApplicationController
  def index
    @damages = DamageCalculation.where("user_id=?", params[:user_id])
    render json: @damages
  end

  def create
    @damage = DamageCalculation.new(damage_params)
    if @damage.valid?
      @damage.fill
      @damage.save
      render json: @damage
    else 
      render json: @damage.errors, status: 400
    end
  end

  private 

  def damage_params
    params.require(:damage).permit(:die_value, :dice_count, :user_id)
  end

end

class DamageCalculationsController < ApplicationController
  def index
  end

  def create
    @damage = DamageCalculation.new(damage_params)
    @damage.fill
    if @damage.valid?
      @damage.save
      render json: @damage
    end
    binding.pry
  end

  private 

  def damage_params
    params.require(:damage).permit(:die_value, :dice_count, :user_id)
  end

end

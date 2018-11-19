
class ToHitChancesController < ApplicationController

  def index 
    binding.pry
  end

  def create 
    @hit_chance = ToHitChance.new(hit_chance_params)
    if @hit_chance.valid?
      @hit_chance.calculate_result
      @hit_chance.save
      render json: @hit_chance
    end
  end

  private 

  def hit_chance_params
    params.require(:hit_chance).permit(:stat, :modifier, :target, :user_id)
  end
end

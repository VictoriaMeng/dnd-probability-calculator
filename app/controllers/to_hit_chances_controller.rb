
class ToHitChancesController < ApplicationController

  def index 
    binding.pry
  end

  def create 
    @hit_chance = ToHitChance.new(hit_chance_params)
    binding.pry
  end

  private 

  def hit_chance_params
    params.require(:hit_chance).permit(:stat, :modifier, :target, :user_id)
  end
end

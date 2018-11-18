
class ToHitChancesController < ApplicationController

  def index 
    binding.pry
  end

  def create 
    binding.pry
  end

  private 

  def hit_chance_params
    params.require(:hit_chance).permit(:stat, :modifier, :target, :user_id)
  end
end

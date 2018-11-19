class DamageCalculationsController < ApplicationController
  def index
  end

  def create
    binding.pry
  end

  private 

  def damage_params
    params.require(:damage).permit(:die_value, :dice_count)
  end

end

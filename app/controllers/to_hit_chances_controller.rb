class ToHitChancesController < ApplicationController

  def index 
    @hit_chances = ToHitChance.where("user_id=?", params[:user_id])
    render json: @hit_chances
  end

  def create 
    @hit_chance = ToHitChance.new(hit_chance_params)
    if @hit_chance.valid?
      @hit_chance.calculate_result
      @hit_chance.save
      render json: @hit_chance
    else 
      render json: @hit_chance.errors, status: 400
    end
  end

  private 

  def hit_chance_params
    params.require(:hit_chance).permit(:stat, :modifier, :target, :user_id)
  end
end

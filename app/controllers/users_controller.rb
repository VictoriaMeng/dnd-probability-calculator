require 'pry'

class UsersController < ApplicationController

  def show
    binding.pry
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    binding.pry
  end

end

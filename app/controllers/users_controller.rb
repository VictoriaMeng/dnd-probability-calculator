class UsersController < ApplicationController

  def show 
    @user = User.find(id: params.id)
    binding.pry
    render json: @user
  end

  def create
  end

end

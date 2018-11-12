class UsersController < ApplicationController

  def index
    @users = User.all
    binding.pry
    render json: @users
  end

  def create

  end

end

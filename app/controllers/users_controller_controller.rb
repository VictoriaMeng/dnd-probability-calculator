class UsersController < ApplicationController

  def create
    @users = User.all 
    render json: @users
  end

end

require 'pry'

class UsersController < ApplicationController

  def show 
    @user = User.find(params[:id])
    render json: @user
  end

  def create
  end

end

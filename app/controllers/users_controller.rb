class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    @user = User.new(user_params)
    if @user.valid?
      @user.save
      render json: @user
    else
      render json: @user.errors, status: 400
    end
  end

  private 

  def user_params
    params.require(:user).permit(:email, :password)
  end

end

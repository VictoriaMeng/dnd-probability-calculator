class SessionsController < ApplicationController
  def create
    @user = User.find_by(email: params[:user][:email])
    if @user && @user.authenticate(params[:user][:password])
      render json: @user 
    end
  end
end

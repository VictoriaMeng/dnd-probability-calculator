class SessionsController < ApplicationController
  def create
    @user = User.find_by(email: params[:user][:email])
    if @user && @user.authenticate(params[:user][:password])
      render json: @user 
    else
      render json: {login: ['email/password combination invalid']}, status: 400
    end
  end
end

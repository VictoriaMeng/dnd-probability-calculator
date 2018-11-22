class SessionsController < ApplicationController
  def create
    @user = User.find_by(email: params[:user][:email])
    if @user.valid? && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      render json: @user 
    end
  end

  def destroy
    session.delete(:id)
  end

end

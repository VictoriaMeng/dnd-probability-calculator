class SessionsController < ApplicationController
  def create
    binding.pry
    @user = User.find_by(email: params[:user][:email])
    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      render json: @user 
    end
  end

  def destroy
    session.delete(:id)
  end

end

class SessionsController < ApplicationController
  def create
    session[:id] = params[:id]
    render json: User.find(session[:id])
  end

  def destroy
    session.delete(:id)
  end

end

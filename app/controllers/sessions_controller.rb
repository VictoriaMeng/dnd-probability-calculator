class SessionsController < ApplicationController
  def create
    session[:id] = params[:id]
    render json: User.find(session[:id])
  end

end

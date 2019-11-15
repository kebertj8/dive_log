class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!, except: [:show, :index]
  protect_from_forgery unless: -> { request.format.json? }
  
  def index
    render json: User.all
  end

  def show
    @user = User.where(user: current_user)
    render :show
  end

  def create
    new_log = Log.new(log_params)
    log = Log.find(params[:userId])
    new_log.user = user
    if new_log.save
      render json: User.where(user: current_user) && new_log
    else
      render json: new_log.errors
    end 
  end

  private 
  def log_params
    params.require(:log).permit(:style, :number, :depth, :visibility, :longitude, :latitude, :divebuddy, :site)
  end
end


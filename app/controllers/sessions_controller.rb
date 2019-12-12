class SessionsController < ApplicationController
  before_action :authenticate_user!, except: [:index]

  def index
    render :'/devise/sessions/new'
  end
  
  def new
    render :'/devise/sessions/new'
  end
end

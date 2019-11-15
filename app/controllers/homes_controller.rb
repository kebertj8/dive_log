class HomesController < ApplicationController
  before_action :authenticate_user!, except: [:index]

  def index
  end
  
  def new
    render :'/homes/index'
  end
end

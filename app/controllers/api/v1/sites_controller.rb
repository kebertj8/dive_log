class Api::V1::SitesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json }

  def index
    render json: Site.all
  end
end

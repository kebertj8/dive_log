class SitesController <ApplicationController
  def index
    @sites = Site.all
  end
  def show
    @sites = Site.all
  end
  def new
    @sites = Site.new
  end

  def create
    @site = Site.new(site_params)
  end
  
  def site_params
    params.require(:site).permit(:name, :address, :region, :longitude, :latitude, :description, :image)
  end
end

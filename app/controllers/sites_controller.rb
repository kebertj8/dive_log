class SitesController <ApplicationController
  def index
    @sites = Site.all
  end
  def show
    @sites = Site.all
  end
end

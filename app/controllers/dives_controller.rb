class DivesController <ApplicationController
  def index
    @dives = Dive.all
  end
end

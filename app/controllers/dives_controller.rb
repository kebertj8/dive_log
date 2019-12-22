class DivesController <ApplicationController
 
  def new_log
    created_log = Dive.new(current_user)
    created_log.generate_new_log
    redirect_to "/dives/#{created_log.dive.id}"
  end

  def show
  end

end

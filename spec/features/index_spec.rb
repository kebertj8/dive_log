require 'rails_helper'

feature "visitor sees Dives" do
  scenario "dive is on the page" do

    visit sites_path

    expect(page).to have_content("divelog")
  end
end

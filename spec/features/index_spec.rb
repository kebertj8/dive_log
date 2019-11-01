require 'rails_helper'

feature "visitor sees Dives" do
  scenario "dive is on the page" do

    visit "/sites"

    expect(page).to have_content("Dive")
  end
end

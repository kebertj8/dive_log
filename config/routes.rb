Rails.application.routes.draw do
  root 'homes#index'
  get '/sites', to:'sites#new'

  devise_for :users

  namespace :api do
    namespace :v1 do 
    resources :sites, only: [:index, :show, :create, :new]
  end 
end 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end


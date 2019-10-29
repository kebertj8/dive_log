Rails.application.routes.draw do
  root 'sites#index'
  get '/sites', to: 'homes#index'

  devise_for :users

  resources :sites, only: [:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

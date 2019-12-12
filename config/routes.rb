Rails.application.routes.draw do
  # root 'sessions#index'
  root 'homes#index'
    
  devise_for :users
  get '/sites', to:'homes#index'
  get '/users', to: 'homes#index'
  get '/users', to: 'homes#index'
  get '/users/:id', to: 'homes#index'
  get '/divers', to: 'homes#index'
  
  resources :sessions, only: [:new]

  namespace :api do
    namespace :v1 do 
      resources :sites, only: [:index, :show, :create, :new]
      resources :users, only: [:index, :show]
    end 
  end 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end


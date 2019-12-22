Rails.application.routes.draw do
  # root 'sessions#index'    
  devise_for :users
  root 'static_pages#index'

  get '/sites', to:'static_pages#index'
  get '/users', to: 'static_pages#index'
  get '/users', to: 'static_pages#index'
  get '/users/:id', to: 'static_pages#index'
  get '/new_log', to: 'dives#new_log'
  
  resources :sessions, only: [:new]
  
  namespace :api do
    namespace :v1 do 
      resources :sites, only: [:index, :show, :create, :new]
      resources :users, only: [:index, :show]
    end 
  end 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end


Rails.application.routes.draw do
  root 'homes#index'
    
  devise_for :users
  get '/sites', to:'homes#index'
  get 'users', to: 'homes#index'
  get '/users', to: 'homes#index'
  get '/users/:id', to: 'homes#index' 
  
  
  
  namespace :api do
    namespace :v1 do 
      resources :sites, only: [:index, :show, :create, :new]
      resources :users, only: [:index, :show]
    end 
  end 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end


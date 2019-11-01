get '/sites', to: 'homes#index'
  get '/dives', to: 'dives#index'
  get '/sites/:id', to: 'sites#show'
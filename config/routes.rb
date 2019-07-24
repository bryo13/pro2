Rails.application.routes.draw do

  default_url_options :host=> "localhost:3000"
  
  root to:"pages#index"

  get  '/login',   to:"sessions#new"
  post '/login',   to:"sessions#create"
  get  '/signup',  to:"users#new"
  delete '/logout',  to:"sessions#destroy"

  resources :account_activations,only:[:edit]
  resources :users
  resources :password_resets,only:[:edit,:update,:create,:new]
end

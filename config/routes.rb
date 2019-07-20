Rails.application.routes.draw do
  get 'users/new'
  root to:"pages#index"

  get '/signup', to:"users#new"
  resources :users
end

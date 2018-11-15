Rails.application.routes.draw do
  resources :users, only: [:show, :create]
  resources :to_hit_chances, only [:create]
  resources :damage_calculations
  post '/login', to: 'sessions#create'
end

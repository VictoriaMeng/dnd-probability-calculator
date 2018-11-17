Rails.application.routes.draw do
  resources :users, only: [:show, :create] do 
    resources :to_hit_chances, only: [:index, :create]
  end
  resources :damage_calculations
  post '/login', to: 'sessions#create'
end

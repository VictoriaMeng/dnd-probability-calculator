Rails.application.routes.draw do
  resources :users, only: [:show, :create] do 
    resources :to_hit_chances, only: [:index, :create]
    resources :damage_calculations, only: [:index, :create]
  end
  post '/login', to: 'sessions#create'
end

Rails.application.routes.draw do
<<<<<<< HEAD
  resources :users, only: [:index, :create]
=======
  resources :users, only: [:show, :create]
>>>>>>> fetch
  resources :to_hit_chances
  resources :damage_calculations
end

Rails.application.routes.draw do
  resources :users, only: [:show, :create]
  resources :to_hit_chances
  resources :damage_calculations
end

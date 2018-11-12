Rails.application.routes.draw do
  resources :users
  resources :to_hit_chances
  resources :damage_calculations
end

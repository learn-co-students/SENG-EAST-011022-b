Rails.application.routes.draw do
  resources :winter_items, only: [:index, :destroy, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

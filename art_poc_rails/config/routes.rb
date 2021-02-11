Rails.application.routes.draw do
  namespace :admin do
    root to: "blocks#index"

    resources :blocks
    resources :flashcards
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

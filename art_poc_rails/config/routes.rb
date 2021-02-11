Rails.application.routes.draw do
  namespace :admin do
    root to: "blocks#index"

    resources :blocks
    resources :flashcards
  end

  get "/blocks", to: "blocks#index"
end

Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :artists, only: [:create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do
      resources :tracks, only: [:index]
    end

    resource :session, only: [:create, :destroy, :show]

    resources :tracks, only: [:create, :destroy, :show, :update, :index] do
      resource :favorite, only: [:create, :destroy]
    end

    resources :posts, only: [:create, :destroy, :index]
  end
end

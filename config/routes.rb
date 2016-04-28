Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do
      resources :tracks, only: [:index]
    end

    resource :session, only: [:create, :destroy, :show]

    resources :tracks, only: [:create, :destroy, :show, :update, :index] do
      resource :favorite, only: [:create, :destroy]
    end

    resources :posts, only: [:create, :destroy, :index]

    resources :artists, only: [:create, :show, :destroy]

    resources :blogs, only: [:create, :show, :destroy] do
      resource :follow, only: [:create, :destroy]
    end
  end
end

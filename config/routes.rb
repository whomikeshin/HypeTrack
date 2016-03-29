Rails.application.routes.draw do
  root to: 'static_pages#root'
  resources :users, only: [:create, :new, :show]
  resource :session, only: [:create, :new, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :tracks, only: [:create, :destroy, :show, :update]
  end
end

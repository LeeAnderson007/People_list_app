Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "contacts#index"

  get "/contacts", to: "contacts#index"
  get "/contacts/new", to: "contacts#index"
  post "/contacts", to: "contacts#create"
  get "/contacts/:id", to: "contacts#show"
  get "/contacts/:id/edit", to: "contacts#edit"

  patch "/contacts/:id", to: "contacts#update"
  put "/contacts/:id", to: "contacts#update"

  delete "/contacts/:id", to: "contacts#destroy"
end

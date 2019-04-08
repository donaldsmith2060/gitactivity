Rails.application.routes.draw do
  get 'user/:id', to: 'activity#user' 
  get '/', to: 'activity#index'
end

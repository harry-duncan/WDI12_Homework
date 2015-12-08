Rails.application.routes.draw do
  get '/oceans' => 'oceans#index'
  get '/oceans/new' => 'oceans#new'
  get '/oceans/:id' => 'oceans#show'


end

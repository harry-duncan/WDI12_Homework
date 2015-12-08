Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/home' => 'pages#home'

  get '/magic' => 'magic#home'
  get '/magic/answer' => 'magic#answer'

  get '/secret' => 'secret#home'
  get '/secret/:answer' => 'secret#answer'

  get '/rps' => 'rps#home'
  get '/rps/:choice' => 'rps#choice'

  
end

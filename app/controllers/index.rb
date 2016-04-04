get '/' do
  if session[:username]
    redirect '/users/:id'
  else
    erb :index
  end
end

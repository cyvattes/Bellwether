get '/users/login' do
  if request.xhr?
    @user = User.where(username: params[:username]).first
    if @user.authenticate(params[:password])
      session[:username] = @user.username
      return @user.id.to_s
    else
      return false.to_json
    end
  end
end

post '/users/logout' do
  session.clear
  redirect '/'
end

get '/users/:id' do
  @user = User.find(params[:id])
  @stations = Station.all
  erb :'/users/index'
end

post 'users' do
  if request.xhr?
    @user = User.new(email: params[:email], username: params[:username], password: params[:password])
    if @user.save
      session[:username] = @user.username
      return @user.id.to_s
    else
      redirect '/'
    end
  end
end

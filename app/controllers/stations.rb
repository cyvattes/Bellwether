get '/stations' do
  if request.xhr?
    station = Station.where(name: params[:name]).first
    stationPos = {lat: station.latitude, lng: station.longitude}
    content_type :json
    return stationPos.to_json
  end
end

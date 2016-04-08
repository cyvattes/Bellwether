$(document).ready(function() {
  bindListeners();
});

function bindListeners(){
  formListener();
  loginListener();
  signupListener();
  alertListener();
}

function formListener(){
  $(".form").on("submit", function(event){
    event.preventDefault();
    var formToLoad = $(this).attr("id");
    $(".sign-in-form").hide();
    $("." + formToLoad).show();
  })
}

function loginListener(){
  $(".login form").on("submit", function(event){
    var loginData = $(this).serialize();
    var request = $.ajax({
      url: '/users/login',
      method: 'GET',
      data: loginData
    })
    request.done(function(data){
        window.location.href = "/users/" + data;
    })
    request.fail(function(){
      console.log("Oops! Something went wrong.");
      window.location.href = "/";
    })
  })
}

function signupListener(){
  $(".signup form").on("submit", function(event){
    var signupData = $(this).serialize();
    console.log(signupData);
    var request = $.ajax({
      url: '/users',
      method: 'POST',
      data: signupData
    })
    request.done(function(data){
      debugger;
      window.location.href = "/users/" + data;
    })
    request.fail(function(){
      console.log("Oops! Something went wrong.");
    })
  })
}

function alertListener(){
  $("#alert-button").on("click", function(){
    var stationSelection = {name: $("#station-selector option:selected").text()};
    $("#station-holder").hide();
    $("#map").show();
    //create map
    initMap();
    //get coordinates of selected station
    var request = $.ajax({
      url: "/stations",
      method: "GET",
      data: stationSelection
    })
    request.done(function(data){
      setMarkers(data);
    })
    request.fail(function(){
      console.log("Oops! Something went wrong.");
    })
    //update position of user marker
    //proximity detection inside
    updatePosition(30); //update interval in seconds //<---------!!!!!!!! For demo, change value to be 1
  })
}
 //Initialize Global Variables
var map;
var marker;
var destination;
var pos = navigator.geolocation.getCurrentPosition(function(position){
  pos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };
  return pos;
});

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: pos,
    zoom: 15
  });
}

function setMarkers(station){
  marker = new google.maps.Marker({
    position: pos,
    map: map
  });
  //pin location set to selected station
  destination = new google.maps.Marker({
    position: station,
    map: map
  });
}

function updatePosition(timer){
  navigator.geolocation.getCurrentPosition(function(position){
    var refreshID = setInterval(function(){
      map.setCenter(pos);
      marker.setPosition(pos);
      if (proximityFinder() < 0.5){ //distance in kilometers //<---------!!!!!!!! For demo, change value to be < 1
        clearInterval(refreshID);
        var ping = new Audio("/sounds/ping.mp3");
        ping.play();
        setTimeout(function(){
          alert("Your stop is coming up!");
        }, 500)
        location.reload(true);
      }
    },(timer*1000));
  });
}

function proximityFinder(){  var p1 = marker.position;
  var p1 = marker.position;
  var p2 = destination.position;
  return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
}

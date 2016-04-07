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
    var station = $("#station-selector option:selected").text();
    $("#station-holder").hide();
    $("#map").show();
    initMap();
  })
}

var map;
function initMap() {
  var pos = {lat: -34.397, lng: 150.644};
  map = new google.maps.Map(document.getElementById('map'), {
    center: pos,
    zoom: 15
  });
  navigator.geolocation.getCurrentPosition(function(position){
    pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    map.setCenter(pos);
    var marker = new google.maps.Marker({
      position: pos,
      map: map
    });
    for (var i=0; i<10;i+=0.1){
      setInterval(function(){
        pos = {
        lat: position.coords.latitude + i,
        lng: position.coords.longitude + i
        };
        map.setCenter(pos);
        marker.position = pos;
        console.log("lat: " + pos.lat + " | lng: " + pos.lng);
      },1000);
    }
  });
}

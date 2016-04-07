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
  })
}

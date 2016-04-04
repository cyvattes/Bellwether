$(document).ready(function() {
  bindListeners();
});

function bindListeners(){
  formListener();
}

function formListener(){
  $(".form").on("submit", function(event){
    event.preventDefault();
    var formToLoad = $(this).attr("id");
    $(".sign-in-form").hide();
    $("." + formToLoad).show();
  })
}

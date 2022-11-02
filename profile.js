$("document").ready(() =>{
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {

      $("#first").html(data.results[0].name.first);
     
  $("#firstname").html(data.results[0].name.first)
  $("#lastname").html(data.results[0].name.last)
  $("#gender").html(data.results[0].gender)
  $("#city").html(data.results[0].location.city)
  $("#email").html(data.results[0].email)

    }
  });
});

 
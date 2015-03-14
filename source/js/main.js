//= require vendor/jquery-1.8.0.min.js

$(function() {
  $("#rsvp-form").submit(function(e) {
    e.preventDefault();
    var params = {
        name: $("input[name=name]").val(),
        guest: $("input[name=guest]").val(),
        meal: $("input[name=meal]").val()
    };
    $.ajax({
        url: "/rsvp/rsvp",
        contentType : 'application/json',
        type: "POST",
        data: JSON.stringify(params)
    }).done(function() {
        alert("Thank you for rsvping! Can't wait to see you there!");
    }).error(function() {
        console.log(arguments);
    });
  });
});

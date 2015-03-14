//= require vendor/jquery-1.8.0.min.js

$(function() {
  $("#rsvp-form").submit(function(e) {
    e.preventDefault();
    var params = {
        name: $("input[name=name]").val(),
        meal_choice: $("select[name=meal_choice]").val(),
        guest: $("input[name=guest]").val(),
        guest_meal: $("select[name=guest_meal]").val()
    };
    $.ajax({
        url: "/rsvp/rsvp",
        contentType : 'application/json',
        type: "POST",
        data: JSON.stringify(params)
    }).done(function() {
        $("form").hide();
        $(".thankyou").toggleClass("hidden", false);
    }).error(function() {
        console.log(arguments);
    });
  });
});

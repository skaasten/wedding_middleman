//= require vendor/jquery-1.8.0.min.js

$(function() {

  $("input[name=can_attend]").change(function() {
    $(".meal-choice").toggleClass("hidden", $(this).val());
    $(".guest-name").toggleClass("hidden", $(this).val());
  });

  $("#rsvp-form").submit(function(e) {
    e.preventDefault();
    var params = {
        email: $("input[name=email]").val(),
        name: $("input[name=name]").val(),
        meal_choice: $("select[name=meal_choice]").val(),
        guest: $("input[name=guest]").val(),
        guest_meal: $("select[name=guest_meal]").val(),
        can_attend: $('input[name="can_attend"]:checked').val()
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

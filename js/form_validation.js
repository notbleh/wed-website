$(document).ready(function () {
    $("#rsvpform").validate({
        //by default the error elements is a <label>
        errorElement: "div",
        //place all errors in a <div id="errors"> element
        errorPlacement: function(error, element) {
            error.appendTo("div#errors");
        }, 
        rules: {
            "name": {
                required: true,
            },
            "email": {
                required: true,
                email: true
            }
        },
        messages: {
            "name": {
                required: "Please enter a name"
            },
            "email": {
                required: "Please enter an email",
                email: "Email is invalid"
            }
        },
        submitHandler: function (rsvpform) { // for demo
            alert('valid form submitted'); // for demo
            return false; // for demo
        }
    });

});


$(document).ready(function(){
var attendingyes = $('#attendingyes');
attendingyes.show();

    $('#attending').change(function(){ 
        select   = $('#attending').val();
        if (select == 'yes'){
          attendingoyes.show();
        }
        if (select == 'no'){
          attendingyes.hide();
        }
    });
});

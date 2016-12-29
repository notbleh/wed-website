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
        // submitHandler: function (rsvpform) { // for demo
            // alert('valid form submitted'); // for demo
            // return false; // for demo
        }
    });

});

$(document).ready(function(){
var attendingyes = $('#attendingyes');
attendingyes.show();
var attendingno = $('#attendingno');
attendingno.hide();
    
var guestsno = $('#guestsno');
guestsno.show();
var guestsyes = $('#guestsyes');
guestsyes.hide();
var guestdate = $('#guestdate');
guestdate.hide();
var guestfamily = $('#guestfamily');
guestfamily.hide();
    
var allergiesyes = $('#allergiesyes');
allergiesyes.hide();

    $('#guests').change(function(){ 
        select   = $('#guests').val();
        if (select == '0'){
            guestsno.show();
            guestsyes.hide();
            guestdate.hide();
            guestfamily.hide();
        }
        if (select == '1'){
            guestsno.hide();
            guestsyes.show();
            guestdate.show();
            guestfamily.hide();
        }
        if (select == '2'){
            guestsno.hide();
            guestsyes.show();
            guestdate.hide();
            guestfamily.show();
        }
    });
    
    $('#attending').change(function(){ 
        select   = $('#attending').val();
        if (select == 'yes'){
            attendingyes.show();
            attendingno.hide();
        }
        if (select == 'no'){
            attendingyes.hide();
            attendingno.show();
        }
    });
    
    $('#allergies').change(function(){ 
        select   = $('#allergies').val();
        if (select == 'no'){
            allergiesyes.hide();
        }
        if (select == 'yes'){
            allergiesyes.show();
        }
    });
});

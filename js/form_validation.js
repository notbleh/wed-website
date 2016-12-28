$(document).ready(function () {
    $("#rsvpform").validate({
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

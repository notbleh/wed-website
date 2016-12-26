function validateForm() {
    var x = document.forms["rsvp"]["name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

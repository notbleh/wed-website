$(document).ready(function() {
  var guestdatefood = $('#guestdatefood');
    guestdatefood.hide();

    $('#gnamedate').keyup(function(){
      if($(this).val() == ''){  
        guestdatefood.hide();
      }else{
        guestdatefood.show();
        }
    });

    $('#gnamedate').keyup(function () {
      $('#gnamedatedisp').text($(this).val());
    });
});

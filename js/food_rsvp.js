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
  
  var guest1food = $('#guest1food');
    guest1food.hide();
  
  $('#gname1').keyup(function(){
    if($(this).val() == ''){  
      guest1food.hide();
    }else{
      guest1food.show();
      }
  });
  
  $('#gname1').keyup(function () {
  	$('#gname1disp').text($(this).val());
  });
  
  
});

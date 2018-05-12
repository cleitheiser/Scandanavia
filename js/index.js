$(document).ready(function() {
 
    $('#credits').click(function() {
        $('.creditimg').fadeIn(500);
        $('.creditclose').fadeIn(500);
    });
    
    $('.creditclose').click(function() {
        $('.creditimg').fadeOut(500);
        $('.creditclose').fadeOut(500);
    });
      
    $('.container').click(function() {
            $('.navbar').fadeToggle(400);
    });     
    
    });
    $('path').hover(function() {
        var currState = $(this).attr('id');
      var currStateInfo = info.filter(function(x) {return x.id == currState});
        if (currStateInfo[0])
        console.log(currStateInfo[0].population);
    });
    
 
    function myFunction(x) {
        x.classList.toggle("change");
    }
    

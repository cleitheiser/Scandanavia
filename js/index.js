$(document).ready(function() {
 
    $('#credits').click(function() {
        $('#creditimg').fadeIn(500);
        $('#creditclose').fadeIn(500);
    });
    
    $('#creditclose').click(function() {
        $('#creditimg').fadeOut(500);
        $('#creditclose').fadeOut(500);
    });
    
    $('#iconselect').click(function() {
        $('#iconlegend').fadeIn(500);
        $('#legendclose').fadeIn(500);
        $('.container').fadeOut('fast');
        $('.navbar').fadeOut('fast');
        
    });
    
    $('#legendclose').click(function() {
        $('#iconlegend').fadeOut(500);
        $('#legendclose').fadeOut(500);
        $('.container').fadeIn('fast');
        $('.navbar').fadeIn('fast');
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
    

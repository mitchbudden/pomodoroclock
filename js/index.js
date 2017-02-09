$(document).ready(function(){
  //intitial variables
  var breakLength = 5;
  var sessionLength = 25;
  
  $("#reset").hide();
  
  $("#displayBreak").html(breakLength + ":00");
  $("#displaySession").html(sessionLength + ":00");
  
  $("#decreaseBreak").on('click', function() {
    if (breakLength > 1) {
      breakLength -= 1;
    }
    $("#displayBreak").html(breakLength + ":00");
  })
  $("#increaseBreak").on('click', function() {
    breakLength += 1;
    $("#displayBreak").html(breakLength + ":00");
  })
  $("#decreaseSession").on('click', function() {
    if (sessionLength > 1) {
      sessionLength -= 1;
    }
   $("#displaySession").html(sessionLength + ":00");
  })
  $("#increaseSession").on('click', function() {
    sessionLength += 1;
    $("#displaySession").html(sessionLength + ":00");
  })
  
  
  //on start, display timer
  $("#start").on('click',function() {
  
    $("#start, #decreaseBreak, #increaseBreak, #displayBreak, #decreaseSession, #displaySession, #increaseSession, #break, #work").hide();
    $("#timer, #timeType").show();
    //var count = sessionLength;
    //var breakCount = breakLength;
    var counter = setInterval(timer,1000);
    sessionLength *= 60;
    breakLength *= 60;
    function timer() {
  
      sessionLength -=1;
      if (sessionLength<=0) {
        clearInterval(counter);
        var startBreak= setInterval(breakTimer,1000)
      }
      if(sessionLength%60 >=10) {
         $("#timer").html(Math.floor(sessionLength/60) + ":" + sessionLength%60)
         } else {
           $("#timer").html(Math.floor(sessionLength/60) + ":" + "0" + sessionLength%60)
         }
      
      //$("#timer").html(count);
      $("#timeType").html("Session Time");

    function breakTimer() {
      $("#timeType").html("Break Time");
      breakLength -= 1;
      if(breakLength%60 >=10) {
         $("#timer").html(Math.floor(breakLength/60) + ":" + breakLength%60)
         } else {
           $("#timer").html(Math.floor(breakLength/60) + ":" + "0" + breakLength%60)
         }
      if (breakLength === 0) {
        clearInterval(startBreak);
        $("#timer").html("DONE");
        $("#timeType").hide();
        $("#reset").show();
      }
     }
      
    }         
    
  })
  
  //RESET
  
  $("#reset").on('click', function() {
    
    breakLength = 5;
    sessionLength = 25;
    $("#displaySession").html(sessionLength + ":00");
    $("#displayBreak").html(breakLength + ":00");
    $("#reset, #timeType, #timer").hide();
    $("#start, #decreaseBreak, #increaseBreak, #displayBreak, #decreaseSession, #displaySession, #increaseSession, #break, #work").show();

  });
});
$(document).ready(function() {
  var roundTime;
  var restTime;
  var numRounds;
  var counter = 0;
  var timerId;
  var new_audio = new Audio("bill.mp3")
  var new_audio1= new Audio('fin.mp3')
  $("#startBtn").click(function() {
    roundTime = $("#roundTime").val();
    restTime = $("#restTime").val();
    numRounds = $("#numRounds").val();
    $(".setup").hide();
    $(".timer").show();
    startWorkout();
    $("#timerText").text("let's star");
    $('#img').attr('src','im1.jpg')
    new_audio.play();
  });

  function startWorkout() {
    if (numRounds > 0) {
        $("#timerText").text(roundTime);
        $('#img').attr('src','im3.jpg')
        new_audio.play();
        timerId = setInterval(function() {
            if (roundTime - counter >= 0) {
                $("#timerText").text(roundTime - counter);
                counter++;
            } else {
                clearInterval(timerId);
                $("#timerText").text("Deep breath");
                $('#img').attr('src','im2.jpg')
                new_audio.play();
                counter = 0;
                numRounds--;
                setTimeout(startRest, 1000);
            }
        }, 1000);
    } else {
        clearInterval(timerId);
        $("#timerText").text("Workout Complete!");
        new_audio1.play()
    }
  }

  function startRest() {
    $("#timerText").text(restTime);
    timerId = setInterval(function() {
        if (restTime - counter >= 0) {
            $("#timerText").text(restTime - counter);
            counter++;
        } else {
            clearInterval(timerId);
            $("#timerText").text("Keep up!");
            new_audio.play();

            counter = 0;
            setTimeout(startWorkout, 1000);
        }
    }, 1000);
  }

  $("#resetBtn").click(function() {
    clearInterval(timerId);
    counter = 0;
    $("#timer").hide();
    $(".setup").show();
    $("#timerText").text("");
    $("#roundTime").val("");
    $("#restTime").val("");
    $("#numRounds").val("");
    });
    
    
    
    
    
});

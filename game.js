// alert("Hello! I am an alert box!!");

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = 0;
var level = 1;
var started = false;

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function nextSequence() {
    $("h1").text("level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    setTimeout(function() {
        $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
        playSound(randomChosenColour);
    }, 200);
    userClickedPattern = 0;
    console.log(gamePattern);
}
    

function animatePress(currentColour) {
    
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(game, userChosenColour) {
    if (game[userClickedPattern] === userChosenColour) {
        userClickedPattern++;
        if (userClickedPattern === level) {
            level++;
            nextSequence();
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 2000);
        // startOver();
        level = 1;
        started = false;
        $(document).keypress(function() {
            gameStart();
        });
    }
}

$(document).keypress(function() {
    if (!started) {
        nextSequence();
        started = true;
    }
});

$(".btn").click(function() {
    if (started) {
        var userChosenColour = $(this).attr("id");
        playSound(userChosenColour);
        animatePress(userChosenColour);
        checkAnswer(gamePattern, userChosenColour);
    }

});
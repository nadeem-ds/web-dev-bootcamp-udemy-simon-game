var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

var started = false;

//2. Create a new variable called level and start at level 0.
var level = 0;

//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function () {
  if (!started) {
    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("h1").text("Level is" + level);
    nextSequence();
    started = true;
  }
});
function nextSequence() {
  level++;

  //5. Inside nextSequence(), update the h1 with this change in the value of level.
  $("h1").text("Level is" + level);

  var randomNumber = Math.floor(Math.random() * 4);
  console.log("Random number", randomNumber);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log("random choosen color", randomChosenColour);
  var randomColor = "#" + randomChosenColour;

  $(randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  // var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  // audio.play();

  //function for genrate sound
  playSound(randomChosenColour);

  $(".btn").click(function (event) {
    var level = 0;
    $("h1").text("level is " + level);
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    // animatePress(userChosenColour);
    animatePress(userChosenColour);

    console.log("try to getting button id", userChosenColour);
    console.log("try to getting button Array", userClickedPattern);
  });
}
nextSequence();

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  // alert("button clciked");

  $("#" + currentColour).addClass("pressed");

  setTimeout(() => {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

//angela code

// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];

// function nextSequence() {
//   var randomNumber = Math.floor(Math.random() * 4);
//   console.log(randomNumber);
//   var randomChosenColour = buttonColours[randomNumber];
//   console.log(randomChosenColour);

//   gamePattern.push(randomChosenColour);

//   //1. Use jQuery to select the button with the same id as the randomChosenColour
//   //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
//   $("#" + randomChosenColour)
//     .fadeIn(100)
//     .fadeOut(100)
//     .fadeIn(100);

//   //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
//   var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//   audio.play();
// }
// nextSequence();



// added this homework to my Bootstrap Portfolio https://jermainehunter.github.io/Bootstrap-Portfolio/portfolio.html

console.log("works");

// below I'm creating an array that we will loop through.
// Make elements and inject into DOM

var crystals = [
  'assets/images/jewel_1.png',
  'assets/images/jewel_2.png',
  'assets/images/jewel_3.png',
  'assets/images/jewel_4.png',
]
// creating random number for computer
//we don't give values here to avoid a scoping issues
var goalNumber
var userScore 
//setting the wins and losses variables.  Using jquery to insert into DOM. :)
var wins = 0;
$("#wins").html(wins);
var losses = 0;
$("#losses").html(losses);




function startGame() {
  // for loop for creating crystal images and setting random value to each one
  //this makes sure the div is empty before for loop runs.

  // creating random number for computer
  goalNumber = Math.ceil((Math.random() * 101) + 19);
  $("#goal-number").html(goalNumber);
  userScore = 0;
  $("#user-score").html(userScore);

  //setting crystals for loop and attributes.
  //Need to use .empty() to make sure fields are empty on game start...something new we learned during extended session! check video
  $("#crystals").empty()
  for (let i = 0; i < crystals.length; i++) {
    var imageCrystal = $('<img>')
    imageCrystal.attr('src', crystals[i])
    imageCrystal.attr('random-value', Math.ceil(Math.random() * 12))
    imageCrystal.addClass('each-crystal')
    $('#crystals').append(imageCrystal)
  }

}  //end of start game function

//calling the function to start/reset game
startGame();




//Starting the onclick with $(document) to make sure to scan entire document on every restart.
$(document).on('click', '.each-crystal', function () {
  //below we're making sure our "strings" covert to numbers, parseInt is another way to do it.
  var value = Number($(this).attr('random-value'))
  //below we're adding to our total with every click and using jquery to insert into DOM.
  userScore += value;
  $("#user-score").html(userScore);
  //console.log to check shit and make sure it's working.
  console.log(userScore);

  //our if statements are below, if our scores match we increase/decrease our score 1, use jquery to insert into DOM, restart the game and last but not least, alert that user has won/lost!
  if (userScore === goalNumber) {
    wins++;
    $("#wins").html(wins);
    startGame();
    alert("You Win");
  }

  if (userScore > goalNumber) {
    losses++;
    $("#losses").html(losses);
    startGame();
    alert("You Lose");

  }

});
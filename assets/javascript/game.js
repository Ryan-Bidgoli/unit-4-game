
$(document).ready(function() {

  var wins = 0;
  var lost = 0;
  var score = 0;

var computerGuess = parseInt(Math.floor(Math.random() * 120) + 19);
$("#randomNumber").html(computerGuess);

 
var stone1 = parseInt(Math.floor(Math.random() * 12) + 1);
var stone2 = parseInt(Math.floor(Math.random() * 12) + 1);
var stone3 = parseInt(Math.floor(Math.random() * 12) + 1);
var stone4 = parseInt(Math.floor(Math.random() * 12) + 1);

 
console.log("computerGuess" + computerGuess);
console.log("stone1 " + stone1);
console.log("stone2 " + stone2);
console.log("stone3 " + stone3);
console.log("stone4 " + stone4);

 function reset () {
  
  score = 0;
  $("#score").html(score);
  computerGuess = parseInt(Math.floor(Math.random() * 120) + 19);
  $("#randomNumber").html(computerGuess);


  stone1 = parseInt(Math.floor(Math.random() * 12) + 1);
  stone2 = parseInt(Math.floor(Math.random() * 12) + 1);
  stone3 = parseInt(Math.floor(Math.random() * 12) + 1);
  stone4 = parseInt(Math.floor(Math.random() * 12) + 1);
  }
  

$("#stone1").on("click", function() {
  
          score = score + stone1;
          $("#score").html(score);
          console.log("score1 " + score);
          if (score == computerGuess) {
              checkifwon();
          }else if (score > computerGuess) {
              checkifwon();
          }

});

});

/* backend -------------*/
var roll1 = Math.floor(Math.random() * 6) + 1;
var roll2 = Math.floor(Math.random() * 6) + 1;

var totalScore = roll1 + roll2;

var status = function (){
  if ((roll1 != 1) || (roll2 != 1)) {
    return true;
  } else {
    return false;
  }
}
var totalScore = function (){
  while(status === true){
    Player.score += totalScore;
  }
}


function Player (score, status){
  this.score = score;
  this.status = status;
}

var player1 = new Player(score, status)



/* frontend -------------*/
$(document).ready(function() {
  $("button#click").click(function() {

    totalScore();


  });
});

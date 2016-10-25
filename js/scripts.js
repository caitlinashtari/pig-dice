/* backend -------------*/
var die1 = Math.floor(Math.random() * 6) + 1;
var die2 = Math.floor(Math.random() * 6) + 1;

function Player (score, status){
  this.score = score;
  this.status = status;
}


/* frontend -------------*/
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();



  });
});

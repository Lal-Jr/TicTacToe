// Restart the Game
var restart = document.querySelector("#butt");
// All Squares
var squares = document.querySelectorAll("td");
// Clear all Squares
function clearBoard(){
  for(var i = 0; i < squares.length; i++){
    squares[i].textContent = '';
  }
}

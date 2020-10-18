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
restart.addEventListener('click',clearBoard);
// Change Marker
function changeMarker(){
  if(this.textContent === ''){
    this.textContent = 'X';
  }
  else if (this.textContent === 'X') {
    this.textContent = 'O';
  }
  else{
    this.textContent = '';
  }
}
for(var i = 0; i < squares.length; i++){
  squares[i].addEventListener('click',changeMarker)
}

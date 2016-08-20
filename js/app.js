

var numberOfTrys = 0;

window.onload = init;



function init(){

  var board = document.getElementById('gameBoard');
  // board.getBoundingClientRect()
  board.addEventListener('click', press);
  board.onmousemove = readMouseMove;
  var innerText = document.getElementById('text');
  // motion dectection



  function readMouseMove(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coordinates = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("textOne").innerHTML = coordinates;


  }

  function clearCoor() {
    document.getElementById("text").innerHTML = "";
  }


// 


}

function press() {
  // alert('i was pressed')
  if(x === 499 && y === 256) {
    alert('you find me');
  }

}

//499, 256
























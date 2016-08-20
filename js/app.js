

var numberOfTrys = 0;

window.onload = init;

function init(){

  var board = document.getElementById('gameBoard');
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
}

//   function clearCoor() {
//     document.getElementById("text").innerHTML = "";
//   }


// }


























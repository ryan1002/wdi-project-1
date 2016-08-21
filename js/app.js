// function getPostion(element) {

// }
// // declar 2 variable whose values are initialised 
// var xPosition = 0;
// var yPostion  = 0;
var numberOfTrys = 0;
var x = 375;
var y = 652;

window.onload = init;

var squares = document.getElementsByClassName('emptyDiv');

function init(){



  var board = document.getElementById('gameBoard');
  // board.getBoundingClientRect()
  board.addEventListener('click', press);
  board.onmousemove = readMouseMove;
  var innerText = document.getElementById('text');
  var foundObject = document.getElementById('textTwo');
  // motion dectection

 //treasure coordinates 
window.addEventListener('mousedown', function(a) {
  var x = a.clientX, y = a.clientY;
  if(x > 342 && y > 188 && x < 392 && y < 234){
    foundObject.innerHTML = "You found the treasure!!";
    alert('you found the treasure');
  } 

});


 function coordinate(x, y) {
     this.x = x;
     this.y = y;
 }


  function readMouseMove(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("textOne").innerHTML = coor;
    press();

  }

  function clearCoor() {
    document.getElementById("text").innerHTML = "";
  }


// 


}

function press() {

  // alert('i was pressed')
  // if(coor === 375 || coor === 652) {
  //   alert('you find me');
  // }
  // var x = e.clientX;
  // var y = e.clientY;
}

//499, 256



//fist save coordinates of the treasure
//th









// <div onmousemove="myFunction(event)" onmouseout="clearCoor()"></div>

// <p>Mouse over the rectangle above, and get the coordinates of your mouse pointer.</p>

// <p>When the mouse is moved over the div, the p element will display the horizontal and vertical coordinates of your mouse pointer, whose values are returned from the clientX and clientY properties on the
// MouseEvent object.</p>

// <p id="demo"></p>

// <script>
// function myFunction(e) {
//     var x = e.clientX;
//     var y = e.clientY;
//     var coor = "Coordinates: (" + x + "," + y + ")";
//     document.getElementById("demo").innerHTML = coor;
// }

// function clearCoor() {
//     document.getElementById("demo").innerHTML = "";
// }


// board = obj.getBoundingClientRect();

// board.addEventListener('click', press);

// function press() {
//   alert("here I am " + board)
// }



// function getClickPosition(e) {
//   var xPosition = e.clientX;
//   var yPostion  = e.clientY;
//   console.log(getClickPosition);
// }

// document.addEventListener('click', handleEvent)


// function handleEvent(e){
//  var evt = e ? e:window.event;
//  var clickX=0, clickY=0;

//  if ((evt.clientX || evt.clientY) &&
//      document.body &&
//      document.body.scrollLeft!=null) {
//   clickX = evt.clientX + document.body.scrollLeft;
//   clickY = evt.clientY + document.body.scrollTop;
//  }
//  if ((evt.clientX || evt.clientY) &&
//      document.compatMode=='CSS1Compat' && 
//      document.documentElement && 
//      document.documentElement.scrollLeft!=null) {
//   clickX = evt.clientX + document.documentElement.scrollLeft;
//   clickY = evt.clientY + document.documentElement.scrollTop;
//  }
//  if (evt.pageX || evt.pageY) {
//   clickX = evt.pageX;
//   clickY = evt.pageY;
//  }

// if (pageX === 565 && pageY === 185) {
//   alert("you found the treasure!")
// }

//  alert (evt.type.toUpperCase() + ' mouse event:'
//   +'\n pageX = ' + clickX
//   +'\n pageY = ' + clickY 
//   +'\n clientX = ' + evt.clientX
//   +'\n clientY = '  + evt.clientY 
//   +'\n screenX = ' + evt.screenX 
//   +'\n screenY = ' + evt.screenY
//  )
//  return false;
// }


// var rect = element.getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);
























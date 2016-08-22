//numberOfLives records the number of cliks
var  numberOfLives   = 5;
var  treasure        = {
  x:      null,
  y:      null,
  gold:   "<div class='gold'></div>",
  width:  30,
  height: 30
};
var $board, $start;

// Run once the DOM is loaded
function init() {
  $board = $("#gameBoard");
  $start = $("#start");
  setupStartButton();
}

function startGame(){
  chooseTreasurePosition();
  setupClickEvent();
  setupMouseEvent();
}

// Choose random position WITHIN the game board
function chooseTreasurePosition(){
  treasure.x       = randomIntFromInterval(treasure.width, $board.width()- treasure.width);
  treasure.y       = randomIntFromInterval(treasure.height, $board.height()- treasure.height);
  // Just for debugging
console.log(treasure.x, treasure.y)
  showTreasure();
}

function showTreasure(){
  $(treasure.gold)
    .appendTo($board)
    .css("left", treasure.x)
    .css("top", treasure.y);
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function checkForHit(){
  numberOfLives--;

  var x      = event.pageX - $(this).offset().left;
  var y      = event.pageY - $(this).offset().top;
  var upperX = treasure.x + treasure.width;
  var lowerX = treasure.x;
  var upperY = treasure.y + treasure.height;
  var lowerY = treasure.y;

  if (x <= upperX && x >= lowerX &&
      y <= upperY && y >= lowerY) {
    console.log("hit");
    $("#display-text").text("You found the treasure!!");
    showTreasure();

  } else {
    console.log("Try again...")
    $("#display-text").text("Try again !!");
    // Decrement lives
    // Show hot/cold based on the difference of x & y with the treasure.x and treasure.y
  }
  if (numberOfLives === 0){
    console.log('your loose');
  }

}

function logPosition(){
  var x = event.pageX - $(this).offset().left;
  var y = event.pageY - $(this).offset().top;
}

function setupMouseEvent(){
  $board.on("mousemove", logPosition)
}

function setupClickEvent(){
  $board.on("click", checkForHit);
}

function setupStartButton(){
  $start.on("click", startGame);
}

$(init);
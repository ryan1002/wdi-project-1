//numberOfLives records the number of cliks
var  numberOfLives   = 5;
var  treasure        = {
  x:      null,
  y:      null,
  gold:   "<div class='gold'></div>",
  width:  30,
  height: 30
};
// sounds
var win      = new Audio();
var loose    = new Audio();
var gameOver = new Audio();
win.src      = "sounds/win_treasure.mp3";
loose.src    = "sounds/loose.wav";
gameOver.src = "sounds/game_over.wav";


var $board, $start;

// Run once the DOM is loaded
function init() {
  $board  = $("#gameBoard");
  $start  = $("#start");
  $replay = $("#replayButton");
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

  showTreasure();
}

function showTreasure(){
  $(treasure.gold)
    .appendTo($board)
    .css("left", treasure.x)
    .css("top", treasure.y);

    $('#gameBoard').mousemove(function() {
      var mouseX = event.pageX - $(this).offset().left;
      var mouseY = event.pageY - $(this).offset().top;
      var upperX = treasure.x + treasure.width;
      var lowerX = treasure.x;
      var upperY = treasure.y + treasure.height;
      var lowerY = treasure.y;

      if(mouseX >= lowerX && mouseX <= upperX && mouseY >= lowerY && mouseY <= upperY) {
        console.log("HOT")
        $('#display-text').text("HOT!!")
      } else {
        $('#display-text').text("COLD!!")
      }
    })
}

function hotOrCold(mouseX, mouseY, treasureX, treasureY) {
  // compare mouse coords to the treasure coords
  console.log(mouseX, mouseY);
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function checkForHit(){
  numberOfLives--;

  var x      = event.pageX - this.offsetLeft;
  var y      = event.pageY - this.offsetTop;
  var upperX = treasure.x + treasure.width;
  var lowerX = treasure.x;
  var upperY = treasure.y + treasure.height;
  var lowerY = treasure.y;

  if (x <= upperX && x >= lowerX &&
    y <= upperY && y >= lowerY) {
    console.log("hit");
  $("#display-text").text("You found the treasure!!");
  $(".gold").css('background', 'gold');
  
  setTimeout(function() {
    $(".gold").remove();
  }, 1000)
  win.play();

  $('#gameBoard').off('mousemove');

} else if (numberOfLives === 4){
  console.log('try again');
  $("#display-text").text("try again 4 lives left");
  loose.play();

} else if (numberOfLives === 3){
  console.log('try again');
  $("#display-text").text("try again 3 lives left");
  loose.play();

} else if (numberOfLives === 2){
  console.log('try again');
  $("#display-text").text("try again 2 lives left");
  loose.play();

} else if (numberOfLives === 1){
  console.log('try again 1 life left');
  $("#display-text").text("try again 1 lives left");
  loose.play();

} else if (numberOfLives === 0){
  console.log('You loose');
  $("#display-text").text("You loose");
  gameOver.play();
} else if (treasure.x > 5 && treasure.y > 5) {
    console.log('you are very hot');
    return;
}

else {

  console.log("Try again...")
  $("#display-text").text("Try again !!");
    // Decrement lives
    // Show hot/cold based on the difference of x & y with the treasure.x and treasure.y
  }

// if rase x - clickx certain size less then 200 
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
  $replay.on("click", startGame);
}

function setupStartButton(){
  $start.on("click", startGame);
}

$(init);
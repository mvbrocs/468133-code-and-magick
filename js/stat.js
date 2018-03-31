

//var canvas = document.getElementById('canvas');
//var ctx = canvas.getContext('2d');

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var BAR_GAP = 50;
var FONT_GAP = 15;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var barMaxHeight = CLOUD_HEIGHT - CLOUD_GAP - FONT_GAP - CLOUD_GAP;


var drawCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + BAR_GAP*2, CLOUD_Y + FONT_GAP);
  ctx.fillText('Список результатов: ', CLOUD_X + BAR_GAP*2, CLOUD_Y + FONT_GAP*2);
};

// X Y W H

var getMaxElement = function(arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    arr[i] > maxElement ? maxElement = arr[i] : false;
    return maxElement;
}
};


window.renderStatistics = function(ctx,names,times) {
  drawCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  drawCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.fillStyle = 'red';
  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + BAR_GAP +(BAR_GAP + BAR_WIDTH)*i, CLOUD_Y + FONT_GAP*4);
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH)*i, CLOUD_Y + FONT_GAP*6, BAR_WIDTH, (barMaxHeight*times[i])/maxTime);
  };

/*
playerIndex = 1;
  ctx.fillText(playerName, CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH)*playerIndex, CLOUD_Y + FONT_GAP*4);
  ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP)*playerIndex, CLOUD_Y + FONT_GAP*6, BAR_WIDTH, BAR_HEIGHT);

playerIndex = 2;
  ctx.fillText(playerName, CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH)*playerIndex, CLOUD_Y + FONT_GAP*4);
  ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP)*playerIndex, CLOUD_Y + FONT_GAP*6, BAR_WIDTH, BAR_HEIGHT);
*/

}

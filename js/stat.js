'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var BAR_GAP = 50;
var FONT_GAP = 15;
var BAR_WIDTH = 40;
var barMaxHeight = 150;


var drawCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + BAR_GAP * 2, CLOUD_Y + FONT_GAP);
  ctx.fillText('Список результатов: ', CLOUD_X + BAR_GAP * 2, CLOUD_Y + FONT_GAP * 2);
};

// X Y W H

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};


window.renderStatistics = function (ctx, names, times) {
  drawCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  drawCloud(ctx, CLOUD_X, CLOUD_Y, 'white');


  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + (Math.random() * 100 + '%') + ', 50%)';
    }
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + FONT_GAP * 4);
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_X + barMaxHeight - barMaxHeight * times[i] / maxTime, BAR_WIDTH, (barMaxHeight * times[i]) / maxTime);
    ctx.fillText(Math.ceil(times[i]), CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + FONT_GAP * 5);
  }

/* CLOUD_Y + FONT_GAP * 6*/

/*
playerIndex = 1;
  ctx.fillText(playerName, CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH)*playerIndex, CLOUD_Y + FONT_GAP*4);
  ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP)*playerIndex, CLOUD_Y + FONT_GAP*6, BAR_WIDTH, BAR_HEIGHT);

playerIndex = 2;
  ctx.fillText(playerName, CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH)*playerIndex, CLOUD_Y + FONT_GAP*4);
  ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP)*playerIndex, CLOUD_Y + FONT_GAP*6, BAR_WIDTH, BAR_HEIGHT);
*/

};

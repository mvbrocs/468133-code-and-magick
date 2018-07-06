'use strict';

(function () {
  window.renderStatistics = function (ctx, names, times) {
    ctx.globalCompositeOperation = 'destination-over';

    // Drawing a cloud
    var cloudCoordinates = [100, 10];
    var cloudWidth = 420;
    var cloudHeight = 270;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(cloudCoordinates[0], cloudCoordinates[1], cloudWidth, cloudHeight);

    // Draw cloud shadow
    var shadowOffset = 10;
    var shadowCoordinates = cloudCoordinates.map(function (elem) {
      return elem + shadowOffset;
    });

    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(shadowCoordinates[0], shadowCoordinates[1], cloudWidth, cloudHeight);

    ctx.globalCompositeOperation = 'source-over';

    // Draw text
    var textCoordinates = [130, 50];
    var nextLineTextCoordinates = textCoordinates.slice();
    nextLineTextCoordinates[1] += 20;

    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', textCoordinates[0], textCoordinates[1]);
    ctx.fillText('Список результатов:', nextLineTextCoordinates[0], nextLineTextCoordinates[1]);

    // Draw chart
    var maxTime = window.util.getMaxValue(times) + 500;
    var chartHeight = 150;
    var stepHeight = maxTime / chartHeight;
    var columnWidth = 40;
    var gutterWidth = 55;
    var marginChartFromTitle = 45;
    var colorColumn = '';
    var colorPlayer = 'rgba(255, 0, 0, 1)';
    var chartCoordinates = nextLineTextCoordinates.slice();
    var textMarginFromChart = 10;
    chartCoordinates[1] += marginChartFromTitle + chartHeight;

    for (var i = 0; i < times.length; i++) {
      ctx.save();

      // Calc color bar
      var randomOpacity = Math.floor(Math.random() * 10) / 10;

      if (randomOpacity === 0) {
        randomOpacity = 0.1;
      }

      if (names[i] === 'Вы') {
        colorColumn = colorPlayer;
      } else {
        colorColumn = 'rgba(0, 0, 255, ' + randomOpacity + ')';
      }

      // Calc height bar
      var currentTime = times[i];
      var currentTimeInSeconds = currentTime / 1000;
      var currentBarHeight = currentTime / stepHeight;
      var roundCurrentTime = Math.floor(currentTimeInSeconds * 10) / 10;
      var stringTime = roundCurrentTime + 's.';
      var currentNameCoordinates = [0, -(chartHeight + textMarginFromChart)];
      var timeStringCoordinates = currentNameCoordinates.slice();
      timeStringCoordinates[1] += 18;

      ctx.fillStyle = colorColumn;
      ctx.translate(chartCoordinates[0] + (i * (columnWidth + gutterWidth)), chartCoordinates[1]);
      ctx.scale(1, -1);
      ctx.fillRect(0, 0, columnWidth, currentBarHeight);

      // Draw name
      ctx.scale(1, -1);
      ctx.fillStyle = '#000000';
      ctx.fillText(names[i], currentNameCoordinates[0], currentNameCoordinates[1]);
      ctx.fillText(stringTime, timeStringCoordinates[0], timeStringCoordinates[1]);
      ctx.restore();
    }
  };
})();

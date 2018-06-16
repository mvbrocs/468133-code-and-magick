var getMaxValue = function (nums) {
  var max = nums[0];

  for (var i = 1; i < nums.length; i++) {
    var num = nums[i];

    if (num > max) {
      max = num;
    }
  }

  return max;
};

var renderStatistics = function (ctx, names, times) {
  ctx.globalCompositeOperation = 'destination-over';

  // Drawing a cloud
  var cloudCoordinates = [100, 10];
  var cloudWidth = 420;
  var cloudHeight = 270;

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(...cloudCoordinates, cloudWidth, cloudHeight);

  // Draw cloud shadow
  var shadowOffset = 10;
  var shadowCoordinates = cloudCoordinates.map(function (elem) {
    return elem + shadowOffset;
  });

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(...shadowCoordinates, cloudWidth, cloudHeight);

  ctx.globalCompositeOperation = 'source-over';

  // Draw text
  var textCoordinates = [130, 50];
  var nextLineTextCoordinates = [...textCoordinates];
  nextLineTextCoordinates[1] += 20;

  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', ...textCoordinates);
  ctx.fillText('Список результатов:', ...nextLineTextCoordinates);

  // Draw chart
  var maxTime = getMaxValue(times) + 500;
  var chartHeight = 150;
  var stepHeight = maxTime / chartHeight;
  var columnWidth = 40;
  var gutterWidth = 55;
  var marginChartFromTitle = 45;
  var colorColumn = '';
  var colorPlayer = 'rgba(255, 0, 0, 1)';
  var chartCoordinates = [...nextLineTextCoordinates];
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
    var timeStringCoordinates = [...currentNameCoordinates];
    timeStringCoordinates[1] += 18;
    var resString = names[i] + stringTime;

    ctx.fillStyle = colorColumn;
    ctx.translate(chartCoordinates[0] + (i * (columnWidth + gutterWidth)), chartCoordinates[1]);
    ctx.scale(1, -1);
    ctx.fillRect(0, 0, columnWidth, currentBarHeight);

    // Draw name
    ctx.scale(1, -1);
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], ...currentNameCoordinates);
    ctx.fillText(stringTime, ...timeStringCoordinates);
    ctx.restore();
  }
};

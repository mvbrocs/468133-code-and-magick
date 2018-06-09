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
  var chartHeight = 150;
  var columnWidth = 40;
  var gutterWidth = 50;
  var marginChartFromText = 40;
  var colorPlayer = 'rgba(255, 0, 0, 1)';
  var chartCoordinates = [...nextLineTextCoordinates];
  chartCoordinates[1] += marginChartFromText + chartHeight;

  for (var i = 0; i < times.length; i++) {
    ctx.save();

    var colorColumn = '';

    if (names[i] === 'Вы') {
      colorColumn = colorPlayer;
    } else {
      colorColumn = 'rgba(0, 0, 255, ' + (Math.floor(Math.random() * 10) / 10) + ')';
    }

    ctx.fillStyle = colorColumn;
    ctx.translate(chartCoordinates[0] + (i * (columnWidth + gutterWidth)), chartCoordinates[1]);
    ctx.scale(1, -1);
    ctx.fillRect(0, 0, columnWidth, chartHeight);

    ctx.restore();
  }
};

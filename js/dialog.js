'use strict';
var dialogHandle = document.querySelector('.setup-user-pic');
var setupBlock = document.querySelector('.setup');
dialogHandle.setAttribute('style', 'z-index: 1');

dialogHandle.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var beginCoord = {
    x: evt.clientX,
    y: evt.clientY
  };

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();

    var shift = {
      x: beginCoord.x - moveEvt.clientX,
      y: beginCoord.y - moveEvt.clientY
    };

    beginCoord = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    setupBlock.style.top = (setupBlock.offsetTop - shift.y) + 'px';
    setupBlock.style.left = (setupBlock.offsetLeft - shift.x) + 'px';
  };
  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

  };
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

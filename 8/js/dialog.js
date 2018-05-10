'use strict';
(function () {
  var dialogHandle = document.querySelector('.setup-user-pic');
  var setupBlock = document.querySelector('.setup');
  var setupOpenBlock = document.querySelector('.setup-open');
  var inputUserName = document.querySelector('.setup-user-name');
  var setupCloseButton = document.querySelector('.setup-close');
  var setupOpenIcon = document.querySelector('.setup-open-icon');
  var formWizard = document.querySelector('.setup-wizard-form');
  var SETUPBLOCK_HEIGHT = 920;
  // var SETUPBLOCK_WIDTH = 799;
  setupOpenIcon.setAttribute('tabindex', '0');
  setupCloseButton.setAttribute('tabindex', '0');
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

      if (setupBlock.offsetTop < 0) {
        setupBlock.style.top = 0 + 'px';
      }

      if (setupBlock.offsetTop + SETUPBLOCK_HEIGHT > document.documentElement.clientHeight) {
        setupBlock.style.top = (document.documentElement.clientHeight - SETUPBLOCK_HEIGHT) + 'px';
      }

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

  var openPopup = function () {
    setupBlock.classList.remove('hidden');
  };

  var closePopup = function () {
    setupBlock.classList.add('hidden');
    setupBlock.style.top = '';
    setupBlock.style.left = '';
  };

  setupOpenBlock.addEventListener('click', openPopup);

  setupOpenIcon.addEventListener('keydown', function (evt) {
    window.util.isEnterPress(evt, openPopup);
  });

  setupCloseButton.addEventListener('click', closePopup);

  setupCloseButton.addEventListener('keydown', function (evt) {
    window.util.isEnterPress(evt, closePopup);
  });

  document.addEventListener('keydown', function (evt) {
    if (inputUserName !== document.activeElement) {
      window.util.isEscPress(evt, closePopup);
    }
  });


  formWizard.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.sendData(new FormData(formWizard),
        function () {
          setupBlock.classList.add('hidden');
        },
        function () {});
  });

})();

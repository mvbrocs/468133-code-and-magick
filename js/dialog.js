'use strict';

(function () {
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

  var setup = document.querySelector('.setup');

  var onPopupEscPress = function (evt) {

    if (evt.keyCode === ESC_KEYCODE) {

      if (!setupUserNameIsFocus) {
        setup.classList.add('hidden');
      }
    }
  };
})();

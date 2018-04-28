'use strict';

window.util = (function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  return {

    makeRandom: function (massiv) {
      return massiv[Math.floor(Math.random() * massiv.length)];
    },

    isEscPress: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },

    isEnterPress: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    }
  };
})();

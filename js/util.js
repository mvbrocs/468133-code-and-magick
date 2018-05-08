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
    },

    shuffle: function (array) {
      for (var i = 0; i < array.length; i++) {
        var swapIdx = Math.floor(Math.random() * array.length);
        var tmp = array[swapIdx];
        array[swapIdx] = array[i];
        array[i] = tmp;
      }
      return array;
    }
  };
})();

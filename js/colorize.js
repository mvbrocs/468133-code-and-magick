'use strict';

window.colorize = (function () {

  return {

    getColorized: function (elem, colors) {
      elem.addEventListener('click', function () {
        var color = window.util.makeRandom(colors);
        if (elem.tagName.toLowerCase() === 'div') {
          elem.style.background = color;
          elem.querySelector('input').value = color;
        } else {
          elem.style.fill = color;
          document.querySelector('input[name="eyes-color"]').value = color;
        }

      });
    }
  };
})();

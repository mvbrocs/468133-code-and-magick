'use strict';
(function () {
  var wizards = [];
  var eyesColor;
  var coatColor;

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank = rank + 2;
    }

    if (wizard.colorEyes === eyesColor) {
      rank = rank + 1;
    }
    return rank;
  };

  var updateWizards = function () {
    window.render.allWizards(wizards.sort(function (left, right) {
      return getRank(right) - getRank(left);
    }));
  };

  window.wizard.onEyesChange = window.util.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });


  window.wizard.onCoatChange = window.util.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });


  var successHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  var errorHandler = function (errorMsg) {
    var errBlock = document.createElement('div');
    errBlock.style = 'z-index:100; margin: 0 auto; text-align: center; background-color: red;';
    errBlock.style.position = 'absolute';
    errBlock.style.left = 0;
    errBlock.style.rught = 0;
    errBlock.style.fontSize = '30px';
    errBlock.textContent = errorMsg;
    document.body.insertAdjacentElement('afterbegin', errBlock);
  };

  window.backend.getData(successHandler, errorHandler);

})();

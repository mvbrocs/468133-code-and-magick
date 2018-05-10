'use strict';
(function () {
  var COAT_COLORS = ['rgb(146, 100, 161)', 'rgb(215, 210, 55)', 'rgb(241, 43, 107)', 'rgb(101, 137, 164)', 'rgb(0, 0, 0)', 'rgb(215, 210, 55)', 'rgb(56, 159, 117)', 'rgb(241, 43, 107)'];
  var EYES_COLORS = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple'];
  var wizardElement = document.querySelector('.setup-wizard');
  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  wizardCoatElement.addEventListener('click', function () {
    var newColor = window.util.makeRandom(COAT_COLORS);
    wizardCoatElement.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });

  wizardEyesElement.addEventListener('click', function () {
    var newColor = window.util.makeRandom(EYES_COLORS);
    wizardEyesElement.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });

  wizard = window.wizard;
  return window.wizard;

})();

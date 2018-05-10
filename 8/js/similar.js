'use strict';
(function () {
var COAT_COLORS = [ 'rgb(146, 100, 161)', 'rgb(215, 210, 55)', 'rgb(241, 43, 107)', 'rgb(101, 137, 164)', 'rgb(0, 0, 0)', 'rgb(215, 210, 55)', 'rgb(56, 159, 117)', 'rgb(241, 43, 107)'];
var EYES_COLORS = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple'];
var wizards = [];
var eyesColor;
var coatColor;
var wizardElement = document.querySelector('.setup-wizard');
var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');

wizardCoatElement.addEventListener('click', function () {
  var newColor = window.util.makeRandom(COAT_COLORS);
  this.style.fill = newColor;
  coatColor = newColor;
  updateWizards();
});


wizardEyesElement.addEventListener('click', function () {
  var newColor = window.util.makeRandom(EYES_COLORS);
  this.style.fill = newColor;
  eyesColor = newColor;
  updateWizards();
});


var updateWizards = function () {

  var sameCoatAndEyesWizards = wizards.filter(function (item) {
    return item.colorCoat === coatColor && item.colorEyes === eyesColor;
  });

  var sameCoatWizards = wizards.filter(function(item) {
    return item.colorCoat === coatColor;
  });

  var sameEyesWizards = wizards.filter(function(item) {
    return item.colorEyes === eyesColor;
  })

var filteredWizards = sameCoatAndEyesWizards;
    filteredWizards = filteredWizards.concat(sameCoatWizards);
    filteredWizards = filteredWizards.concat(sameEyesWizards);
    filteredWizards = filteredWizards.concat(wizards);

var uniqueWizards = filteredWizards.filter(function (item, i) {
  return filteredWizards.indexOf(item) === i;
})

window.render.allWizards(uniqueWizards);
}



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

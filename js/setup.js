'use strict';

var wizardsQuantity = 4;
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatsColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballs = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var makeRandom = function (massiv) {
  return massiv[Math.floor(Math.random() * massiv.length)];
};


var wizards = [];

for (var i = 0; i < wizardsQuantity; i++) {
  wizards[i] = {
    name: makeRandom(names) + ' ' + makeRandom(surnames),
    coatColor: makeRandom(coatsColors),
    eyesColor: makeRandom(eyesColors)
  };
}

var wizardsTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var wizardsList = document.querySelector('.setup-similar-list');

wizards.forEach(function (item) {

  var element = wizardsTemplate.cloneNode(true);

  element.querySelector('.setup-similar-label').textContent = item.name;
  element.querySelector('.wizard-coat').style.fill = item.coatColor;
  element.querySelector('.wizard-eyes').style.fill = item.eyesColor;

  wizardsList.appendChild(element);
});

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');


var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setupBlock = document.querySelector('.setup');
var setupOpenBlock = document.querySelector('.setup-open');
var inputUserName = document.querySelector('.setup-user-name');
var setupCloseButton = document.querySelector('.setup-close');
var setupOpenIcon = document.querySelector('.setup-open-icon');
setupOpenIcon.setAttribute('tabindex', '0');
setupCloseButton.setAttribute('tabindex', '0');

setupOpenBlock.addEventListener('click', function () {
  setupBlock.classList.remove('hidden');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE && inputUserName !== document.activeElement) {
    setupBlock.classList.add('hidden');
  }
});

setupCloseButton.addEventListener('click', function () {
  setupBlock.classList.add('hidden');
});

setupCloseButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setupBlock.classList.add('hidden');
  }
});

setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setupBlock.classList.remove('hidden');
  }
});


var setupButton = document.querySelector('.setup-submit');
setupButton.setAttribute('type', 'submit');
var setupForm = document.querySelector('.setup-wizard-form');
setupForm.setAttribute('action', 'https://js.dump.academy/code-and-magick');
setupButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setupForm.submit();
  }
});

inputUserName.setAttribute('minlength', '2');


var wizardEyesBlock = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
var wizardEyesBlockInput = document.querySelector('.setup-wizard-appearance').querySelector('input[name="eyes-color"]');
wizardEyesBlock.addEventListener('click', function () {
  wizardEyesBlock.style.fill = makeRandom(eyesColors);
  wizardEyesBlockInput.value = wizardEyesBlock.style.fill;
});
/*
var changeWizardEyes = function () {
  wizardEyesBlock.style.fill = makeRandom(eyesColors);
}
*/

var wizardFireballBlock = document.querySelector('.setup-fireball-wrap');
var wizardFireballBlockInput = wizardFireballBlock.querySelector('input');
wizardFireballBlock.addEventListener('click', function () {
  wizardFireballBlock.style.background = makeRandom(fireballs);
  wizardFireballBlockInput.value = wizardFireballBlock.style.background;
});

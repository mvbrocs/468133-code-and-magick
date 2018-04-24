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
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupCloseButton.addEventListener('click', closePopup);

setupCloseButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE && inputUserName !== document.activeElement) {
    closePopup();
  }
});

var wizardEyesBlock = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
var wizardEyesBlockInput = document.querySelector('.setup-wizard-appearance').querySelector('input[name="eyes-color"]');
wizardEyesBlock.addEventListener('click', function () {
  var eyeColor = makeRandom(eyesColors);
  wizardEyesBlock.style.fill = eyeColor;
  wizardEyesBlockInput.value = eyeColor;
});


var wizardFireballBlock = document.querySelector('.setup-fireball-wrap');
var wizardFireballBlockInput = wizardFireballBlock.querySelector('input');
wizardFireballBlock.addEventListener('click', function () {
  var fireballColor = makeRandom(fireballs);
  wizardFireballBlock.style.background = fireballColor;
  wizardFireballBlockInput.value = fireballColor;
});

var draggedItem = null;
var shopElement = document.querySelector('.setup-artifacts-shop');
var artifactsElement = document.querySelector('.setup-artifacts');

shopElement.addEventListener('dragstart', function (evt) {
  if (evt.target.tagName.toLowerCase() === 'img') {
    artifactsElement.style.outline = '2px dashed red';
    draggedItem = evt.target;
    evt.dataTransfer.setData('text/plain', evt.target.alt);
  }
});

artifactsElement.addEventListener('dragover', function (evt) {
  evt.preventDefault();
  return false;
});

shopElement.addEventListener('dragend', function (evt) {
  evt.preventDefault();
  artifactsElement.style.outline = '';
});

artifactsElement.addEventListener('drop', function (evt) {
  var clonedDraggedItem = draggedItem.cloneNode();
  evt.target.style.backgroundColor = '';
  if (evt.target.tagName.toLowerCase() !== 'img' && evt.target.hasChildNodes() === false) {
    clonedDraggedItem.setAttribute('draggable', 'false');
    evt.target.appendChild(clonedDraggedItem);
  }
  evt.preventDefault();
});

artifactsElement.addEventListener('dragenter', function (evt) {
  evt.target.style.backgroundColor = 'yellow';
  evt.preventDefault();
});

artifactsElement.addEventListener('dragleave', function (evt) {
  evt.target.style.backgroundColor = '';
  evt.preventDefault();
});

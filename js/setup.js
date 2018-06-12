'use strict';

var WIZARDS_SUM = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomInt = function (min, max) {
  var res = Math.floor(Math.random() * (max - min)) + min;
  return res;
};

var getRandomName = function () {
  var nameIsFirst = getRandomInt(0, 2);

  if (nameIsFirst) {
    return WIZARD_NAMES[getRandomInt(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomInt(0, WIZARD_SURNAMES.length)];
  } else {
    return WIZARD_SURNAMES[getRandomInt(0, WIZARD_SURNAMES.length)] + ' ' + WIZARD_NAMES[getRandomInt(0, WIZARD_NAMES.length)];
  }
};

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var createWizards = function () {
  var wizards = [];

  for (var i = 0; i < WIZARDS_SUM; i++) {
    var wizard = {};
    wizard.name = getRandomName();
    wizard.coatColor = COAT_COLORS[getRandomInt(0, COAT_COLORS.length)];
    wizard.eyesColor = EYES_COLORS[getRandomInt(0, EYES_COLORS.length)];
    wizards.push(wizard);
  }

  return wizards;
};

var wizards = createWizards();

var createWizardsTemplates = function () {
  var fragment = document.createDocumentFragment();
  var template = document.querySelector('#similar-wizard-template');
  var templateItem = template.content.querySelector('.setup-similar-item');

  for (var i = 0; i < WIZARDS_SUM; i++) {
    var cloneItem = templateItem.cloneNode(true);

    var wizardName = cloneItem.querySelector('.setup-similar-label');
    wizardName.textContent = wizards[i].name;

    var wizardCoat = cloneItem.querySelector('.wizard-coat');
    wizardCoat.style.fill = wizards[i].coatColor;

    var wizardEyes = cloneItem.querySelector('.wizard-eyes');
    wizardEyes.style.fill = wizards[i].eyesColor;

    fragment.appendChild(cloneItem);
  }

  return fragment;
};

var renderingWizards = function () {
  var similarList = document.querySelector('.setup-similar-list');
  similarList.appendChild(createWizardsTemplates());

  var similarBlock = document.querySelector('.setup-similar');
  similarBlock.classList.remove('hidden');
};

renderingWizards();

'use strict';

var WIZARDS_NUM = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getRandomName = function () {
  var nameIsFirst = window.util.getRandomInt(0, 2);

  if (nameIsFirst) {
    return WIZARD_NAMES[window.util.getRandomInt(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[window.util.getRandomInt(0, WIZARD_SURNAMES.length)];
  } else {
    return WIZARD_SURNAMES[window.util.getRandomInt(0, WIZARD_SURNAMES.length)] + ' ' + WIZARD_NAMES[window.util.getRandomInt(0, WIZARD_NAMES.length)];
  }
};

var createWizards = function () {
  var wizards = [];

  for (var i = 0; i < WIZARDS_NUM; i++) {
    var wizard = {};
    wizard.name = getRandomName();
    wizard.coatColor = COAT_COLORS[window.util.getRandomInt(0, COAT_COLORS.length)];
    wizard.eyesColor = EYES_COLORS[window.util.getRandomInt(0, EYES_COLORS.length)];
    wizards.push(wizard);
  }

  return wizards;
};

var wizards = createWizards();

var createWizardsTemplates = function () {
  var fragment = document.createDocumentFragment();
  var template = document.querySelector('#similar-wizard-template');
  var templateItem = template.content.querySelector('.setup-similar-item');

  for (var i = 0; i < WIZARDS_NUM; i++) {
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

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  setupSubmitBtn.addEventListener('click', onPopupSubmitBtnPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  setupSubmitBtn.removeEventListener('click', onPopupSubmitBtnPress);
};

var setupOpen = document.querySelector('.setup-open');
var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpenIcon.addEventListener('keydown', function (evt) {

  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

var setupClose = setup.querySelector('.setup-close');

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {

  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var setupUserName = setup.querySelector('.setup-user-name');
var setupUserNameIsFocus = false;

setupUserName.addEventListener('focus', function () {
  setupUserNameIsFocus = true;
});

setupUserName.addEventListener('blur', function () {
  setupUserNameIsFocus = false;
});

var getIndexNextElement = function (array, currentElement) {
  var indexCurrentElement = 0;

  for (var i = 0; i < array.length; i++) {

    if (currentElement === array[i]) {
      indexCurrentElement = i;
    }
  }

  ++indexCurrentElement;

  if (indexCurrentElement === array.length) {
    indexCurrentElement = 0;
  }

  return indexCurrentElement;
};

var setupPlayerWizardCoat = setup.querySelector('.setup-player .wizard-coat');

var changeWizardCoatColor = function () {
  var currentCoatColor = setupPlayerWizardCoat.style.fill;
  setupPlayerWizardCoat.style.fill = COAT_COLORS[getIndexNextElement(COAT_COLORS, currentCoatColor)];
};

setupPlayerWizardCoat.addEventListener('click', function () {
  changeWizardCoatColor();
});

var setupPlayerWizardEyes = setup.querySelector('.setup-player .wizard-eyes');

var changeWizardEyesColor = function () {
  var currentEyesColor = setupPlayerWizardEyes.style.fill;
  setupPlayerWizardEyes.style.fill = EYES_COLORS[getIndexNextElement(EYES_COLORS, currentEyesColor)];
}

setupPlayerWizardEyes.addEventListener('click', function () {
  changeWizardEyesColor();
});

var setupFireballWrap = setup.querySelector('.setup-fireball-wrap');
var inputFireballColor = setupFireballWrap.querySelector('input');

var changeFireballColor = function () {
  var currentFireballColor = inputFireballColor.value;
  setupFireballWrap.style.background = FIREBALL_COLORS[getIndexNextElement(FIREBALL_COLORS, currentFireballColor)];
  inputFireballColor.value = FIREBALL_COLORS[getIndexNextElement(FIREBALL_COLORS, currentFireballColor)];
};

setupFireballWrap.addEventListener('click', function () {
  changeFireballColor();
});

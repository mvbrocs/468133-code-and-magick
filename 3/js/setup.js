'use strict';
var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');

var wizardsQuantity = 4;
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatsColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];


var makeRandom = function (massiv, massiv2) {
  var randomValue = massiv[Math.floor(Math.random() * massiv.length)];
  if (massiv2) {
    randomValue += ' ' + massiv2[Math.floor(Math.random() * massiv2.length)];
  }
  return randomValue;
};


var wizardObjects = [
  {
    name: makeRandom(names, surnames),
    coatColor: makeRandom(coatsColors),
    eyesColor: makeRandom(eyesColors)
  },
  {
    name: makeRandom(names, surnames),
    coatColor: makeRandom(coatsColors),
    eyesColor: makeRandom(eyesColors)
  },
  {
    name: makeRandom(names, surnames),
    coatColor: makeRandom(coatsColors),
    eyesColor: makeRandom(eyesColors)
  },
  {
    name: makeRandom(names, surnames),
    coatColor: makeRandom(coatsColors),
    eyesColor: makeRandom(eyesColors)
  }
];

var wizardsTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var wizardsList = document.querySelector('.setup-similar-list');

for (var i = 0; i < wizardsQuantity; i++) {
  var element = wizardsTemplate.cloneNode(true);

  element.querySelector('.setup-similar-label').textContent = wizardObjects[i].name;
  element.querySelector('.wizard-coat').style.fill = wizardObjects[i].coatColor;
  element.querySelector('.wizard-eyes').style.fill = wizardObjects[i].eyesColor;

  wizardsList.appendChild(element);
}

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

'use strict';
var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');

var wizardsQuantity = 4;
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatsColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];


var makeRandom = function (massiv) {
  var randomValue = massiv[Math.floor(Math.random() * massiv.length)];
  return randomValue;
};


var wizards = [];
/*
for (var i = 1; i < wizardsQuantity; i++) {
  wizards[i] = wizards.push({
    name: makeRandom(names) + ' ' + makeRandom(surnames),
    coatColor: makeRandom(coatsColors),
    eyesColor: makeRandom(eyesColors)
  });
}
*/

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

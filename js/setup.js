'use strict';
(function () {
  var wizardsQuantity = 5;
  var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballs = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var coatsColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

  var wizardEyesBlock = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
  var wizardFireballBlock = document.querySelector('.setup-fireball-wrap');
  var wizardsTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardsList = document.querySelector('.setup-similar-list');
  var setupSimilar = document.querySelector('.setup-similar');

  var draggedItem = null;
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var artifactsElement = document.querySelector('.setup-artifacts');

  var createWizards = function () {
    var wizards = [];
    for (var i = 0; i < wizardsQuantity; i++) {
      wizards[i] = {
        name: window.util.makeRandom(names) + ' ' + window.util.makeRandom(surnames),
        coatColor: window.util.makeRandom(coatsColors),
        eyesColor: window.util.makeRandom(eyesColors)
      };
    }

    wizards.forEach(function (item) {
      var element = wizardsTemplate.cloneNode(true);
      element.querySelector('.setup-similar-label').textContent = item.name;
      element.querySelector('.wizard-coat').style.fill = item.coatColor;
      element.querySelector('.wizard-eyes').style.fill = item.eyesColor;
      wizardsList.appendChild(element);
    });

    window.colorize.getColorized(wizardEyesBlock, eyesColors);
    window.colorize.getColorized(wizardFireballBlock, fireballs);

    setupSimilar.classList.remove('hidden');
  };

  createWizards();

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
})();

'use strict';
(function () {
  var wizardsQuantity = 5;
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballs = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var wizardEyesBlock = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
  var wizardFireballBlock = document.querySelector('.setup-fireball-wrap');
  var wizardsTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardsList = document.querySelector('.setup-similar-list');
  var setupSimilar = document.querySelector('.setup-similar');
  var draggedItem = null;
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var artifactsElement = document.querySelector('.setup-artifacts');

  window.colorize.getColorized(wizardEyesBlock, eyesColors);
  window.colorize.getColorized(wizardFireballBlock, fireballs);

  var successHandler = function (wizards) {
    window.util.shuffle(wizards);
    wizards.slice(0, wizardsQuantity).forEach(function (item) {
      var element = wizardsTemplate.cloneNode(true);
      element.querySelector('.setup-similar-label').textContent = item.name;
      element.querySelector('.wizard-coat').style.fill = item.colorCoat;
      element.querySelector('.wizard-eyes').style.fill = item.colorEyes;
      wizardsList.appendChild(element);
    });
    setupSimilar.classList.remove('hidden');
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

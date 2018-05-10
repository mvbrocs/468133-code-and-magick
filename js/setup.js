'use strict';
(function () {

  var fireballs = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var wizardFireballBlock = document.querySelector('.setup-fireball-wrap');

  var draggedItem = null;
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var artifactsElement = document.querySelector('.setup-artifacts');


  window.colorize.getColorized(wizardFireballBlock, fireballs);

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

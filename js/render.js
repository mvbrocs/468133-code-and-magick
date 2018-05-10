'use strict';

(function () {
  var WIZARDS_QTTY = 5;
  var wizardsTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardsList = document.querySelector('.setup-similar-list');
  var setupSimilar = document.querySelector('.setup-similar');

  window.render = {
    oneWizard: function (item) {
      var element = wizardsTemplate.cloneNode(true);
      element.querySelector('.setup-similar-label').textContent = item.name;
      element.querySelector('.wizard-coat').style.fill = item.colorCoat;
      element.querySelector('.wizard-eyes').style.fill = item.colorEyes;
      wizardsList.appendChild(element);
    },

    allWizards: function (arr) {
      wizardsList.innerHTML = '';
      arr.slice(0, WIZARDS_QTTY).forEach(function (item) {
        window.render.oneWizard(item);
      });
      setupSimilar.classList.remove('hidden');
    }
  };

})();

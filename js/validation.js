'use strict';

(function () {
  var setupWizardForm = setup.querySelector('.setup-wizard-form');
  var setupInputs = setup.querySelectorAll('input[required]');
  var setupSubmitBtn = setup.querySelector('.setup-submit');

  var onPopupSubmitBtnPress = function () {

    for (var i = 0; i < setupInputs.length; i++) {
      var input = setupInputs[i];

      if (!input.valid) {
        return;
      }
    }

    setupWizardForm.submit();
  };
})();

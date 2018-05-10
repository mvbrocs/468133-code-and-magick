'use strict';

(function () {

var FILE_TYPES= ['gif', 'jpg', 'jpeg', 'png'];
var fileChooser = document.querySelector('.upload input[type=file]');
var dialogHandle = document.querySelector('.setup-user-pic');

fileChooser.addEventListener('change', function (evt) {
  var file = fileChooser.files[0];
  var fileName = file.name.toLowerCase();

  var matches = FILE_TYPES.some(function (it) {
    return fileName.endsWith(it);
  });


  if (matches) {
    var reader = new FileReader();

    reader.addEventListener('load', function () {
      dialogHandle.src = reader.result;
    })

    reader.readAsDataURL(file);
  }

})
})()

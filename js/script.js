(function() {

  var header = document.querySelector('header');
  var mainMenu = document.querySelector('.main-menu');
  var stickedMenu = document.querySelector('.sticked-menu');

  window.addEventListener('scroll', function(evt){
    headerBottom = header.getBoundingClientRect().bottom;
    if (headerBottom < 1) {
      mainMenu.classList.add('blanked');
      stickedMenu.classList.remove('hidden');
    } else {
      mainMenu.classList.remove('blanked');
      stickedMenu.classList.add('hidden');
    }
  });

})();

(function() {

  var header = document.querySelector('header');
  var mainMenu = document.querySelector('.main-menu');
  var stickedMenu = document.querySelector('.sticked-menu');

  var catalog = document.querySelector('.catalog');
  var images = catalog.querySelectorAll('img');
  var modal = document.querySelector(".modal");
  var closeBtn = modal.querySelector(".modal__close-btn");

// Переключение меню

  var switchMenu = function() {
    headerBottom = header.getBoundingClientRect().bottom;
    if (headerBottom < 1) {
      mainMenu.classList.add('blanked');
      stickedMenu.classList.remove('hidden');
    } else {
      mainMenu.classList.remove('blanked');
      stickedMenu.classList.add('hidden');
    }
  }

  window.addEventListener('scroll', switchMenu);

  switchMenu();

// Отображение галереи

  var showGallary = function(evt) {
    if (!modal.classList.contains("modal--show")) {
      modal.classList.add("modal--show");
      window.console.log(evt.target.attributes.src.value);
    }
  }

  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', showGallary);
  }

  closeBtn.addEventListener("click", function() {
    modal.classList.remove("modal--show");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode == 27) {
      if (modal.classList.contains("modal--show")) {
        modal.classList.remove("modal--show");
      }
    }
  });

})();

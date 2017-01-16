(function() {

  var header = document.querySelector('header');
  var mainMenu = document.querySelector('.main-menu');
  var stickedMenu = document.querySelector('.sticked-menu');

  var feedbackBtn = document.querySelector('.feedback__btn');

  var formInput = document.querySelector('.form-input');
  var formClear = document.querySelector('.form-clear');
  var formSubmit = document.querySelector('.form-submit');
//  var phoneString = '';

  var catalog = document.querySelector('.catalog');
  var images = catalog.querySelectorAll('img');

  var modal = document.querySelector(".modal");
  var closeBtn = modal.querySelector(".modal__close-btn");
  var modalImage = modal.querySelector(".modal__image");

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

// Кнопка обратной связи

  feedbackBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    formInput.click();
    formInput.focus();
  });

// Форма обратной связи

  var checkInput = function() {
    if (formInput.value === '') {
      if (!formSubmit.classList.contains('form-submit-disabled')) {
        formSubmit.classList.add('form-submit-disabled');
      }
    } else {
      if (formSubmit.classList.contains('form-submit-disabled')) {
        formSubmit.classList.remove('form-submit-disabled');
      }
    }
  }

  formInput.addEventListener('input', function() {
    checkInput();
  });

  formInput.addEventListener('click', function() {
    if (formInput.value === '' || formInput.value === '8' || formInput.value === '8 ') {
      formInput.value = '8 ';
//      phoneString = '8 ';
    }
//    checkInput();
  });

  formClear.addEventListener('click', function() {
//    evt.stopImmediatePropagation();
    formInput.value = '';
//    phoneString = '';
    checkInput();
  });

  formInput.value = '';

// Отображение галереи

  var showGallary = function(evt) {
    if (!modal.classList.contains("modal--show")) {
      modal.classList.add("modal--show");
    }
    modalImage.innerHTML = '<img src="' + evt.target.attributes.src.value + '" alt="' + evt.target.attributes.alt.value + '" width="480" height="480">';
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

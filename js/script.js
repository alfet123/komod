(function() {

  var header = document.querySelector('header');
  var mainMenu = document.querySelector('.main-menu');
  var mainMenuLinks = mainMenu.querySelectorAll('.main-menu-link');
  var stickedMenu = document.querySelector('.sticked-menu');
  var stickedMenuLinks = stickedMenu.querySelectorAll('.sticked-menu-link');

  var feedbackBtn = document.querySelector('.feedback__btn');

  var formInput = document.querySelector('.form-input');
  var formClear = document.querySelector('.form-clear');
  var formSubmit = document.querySelector('.form-submit');
//  var phoneString = '';

  var catalog = document.querySelector('.catalog');
  var images = catalog.querySelectorAll('img');
  var orderBtn = catalog.querySelectorAll('.catalog-item-orderbtn');

  var modal = document.querySelector(".modal");
  var closeBtn = modal.querySelector(".modal__close-btn");
  var modalImage = modal.querySelector(".modal__image");

  var socialLinks = document.querySelectorAll(".social-link");

  var catalogScroll = document.querySelector('.catalog__scroll');
  var galleryScroll = document.querySelector('.gallery__scroll');
  var commentsScroll = document.querySelector('.comments__scroll');

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

// Работа с меню

  var selectMenu = function(evt) {
    evt.preventDefault();
    if (evt.target.hash === '#main') {
//      window.scroll(0, 0);
      header.scrollIntoView({block: "start", behavior: "smooth"});
    } else if (evt.target.hash === '#catalog') {
//      window.scroll(0, 600);
      catalogScroll.scrollIntoView({block: "start", behavior: "smooth"});
    } else if (evt.target.hash === '#gallery') {
      galleryScroll.scrollIntoView({block: "start", behavior: "smooth"});
    } else if (evt.target.hash === '#comments') {
      commentsScroll.scrollIntoView({block: "start", behavior: "smooth"});
    }
//    window.console.log('(' + evt.target.hash + ') ' + evt.target.text);
  }

  for (var i = 0; i < mainMenuLinks.length; i++) {
    mainMenuLinks[i].addEventListener('click', selectMenu);
  }

  for (var i = 0; i < stickedMenuLinks.length; i++) {
    stickedMenuLinks[i].addEventListener('click', selectMenu);
  }

// Кнопка обратной связи

  feedbackBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    formInput.click();
    formInput.focus();
  });

// Форма обратной связи

  var checkInput = function() {
    if (formInput.value.length < 15) {
      if (!formSubmit.classList.contains('form-submit-disabled')) {
        formSubmit.classList.add('form-submit-disabled');
      }
    } else {
      if (formSubmit.classList.contains('form-submit-disabled')) {
        formSubmit.classList.remove('form-submit-disabled');
      }
    }
  }

  formInput.addEventListener('input', function(evt) {
    if (evt.target.value.length === 1 || evt.target.value.length === 5 || evt.target.value.length === 9 || evt.target.value.length === 12) {
      evt.target.value += ' ';
    }
//    window.console.log(evt.target.value);
    checkInput();
  });

  formInput.addEventListener('keydown', function(evt) {
    if ((evt.target.value.length < 15) && (evt.keyCode > 47) && (evt.keyCode < 58)) { // 0123456789
//      window.console.log(evt.key);
    } else if (evt.keyCode === 8) { // Backspace
      if (evt.target.value.length === 2 || evt.target.value.length === 6 || evt.target.value.length === 10 || evt.target.value.length === 13) {
        evt.target.value = evt.target.value.slice(0, -1);
      }
//      window.console.log(evt.key);
//    } else if (evt.keyCode === 46) { // Delete
//      window.console.log(evt.key);
//    } else if (evt.keyCode === 37) { // ArrowLeft
//      window.console.log(evt.key);
//    } else if (evt.keyCode === 39) { // ArrowRight
//      window.console.log(evt.key);
//    } else if (evt.keyCode === 36) { // Home
//      window.console.log(evt.key);
//    } else if (evt.keyCode === 35) { // End
//      window.console.log(evt.key);
    } else {
      evt.preventDefault();
    }

//    checkInput();
  });

  formInput.addEventListener('click', function(evt) {
    evt.target.setSelectionRange(evt.target.value.length, evt.target.value.length);
//    window.console.log(evt);
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

  formSubmit.addEventListener('click', function(evt) {
    if (formSubmit.classList.contains('form-submit-disabled')) {
      evt.preventDefault();
    } else {
      evt.preventDefault();
      alert('Эта функция временно не работает');
    }
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
    if (evt.keyCode === 27) {
      if (modal.classList.contains("modal--show")) {
        modal.classList.remove("modal--show");
      }
    }
  });

// Отображение формы заказа

  for (var i = 0; i < orderBtn.length; i++) {
    orderBtn[i].addEventListener('click', function(evt) {
      evt.preventDefault();
      alert('Эта функция временно не работает');
    });
  }

// Работа с соцсетями

  for (var i = 0; i < socialLinks.length; i++) {
    socialLinks[i].addEventListener('click', function(evt) {
      evt.preventDefault();
    });
  }

// Клик по документу

  document.addEventListener('click', function(evt) {
//    window.console.log(evt.target);
  });

})();

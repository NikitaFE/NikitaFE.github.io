"use strict";

var openMap = document.querySelector('.map-icon');
var closeMap = document.querySelector('.close-map');
var map = document.querySelector('.main-map');
var openWrite = document.querySelector('.write-open');
var closeWrite = document.querySelector('.close-write');
var write = document.querySelector('.write-us');
var userName = document.querySelector('[name="name"]');
var userEmail = document.querySelector('[name="email"]');
var userText = document.querySelector('[name="text"]');
var form = document.querySelector('.write-form');
var slider = document.querySelector('.slider');
var leftInput = document.querySelector('#left');
var rightInput = document.querySelector('#right');
var controls = document.querySelectorAll('.control');
var products = document.querySelector('.products');
var popup = document.querySelector('.checkout');
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("userName");
} catch (err) {
  isStorageSupport = false;
}

if(openMap) {
  openMap.addEventListener('click', function(evt) {
    evt.preventDefault();
    map.classList.remove('hide');
    closeMap.focus();
  });	
}

if(closeMap) {
  closeMap.addEventListener('click', function(evt) {
    evt.preventDefault();
    map.classList.add('hide');
  });        	
}

window.addEventListener("keydown", function (evt) {
  if (map && evt.keyCode === 27) {
    evt.preventDefault();
    map.classList.add("hide");
  }
});

if(openWrite) {
  openWrite.addEventListener('click', function(evt) {
    evt.preventDefault();
    write.classList.remove('hide');

    if (storage) {
      userName.value = storage;
      userEmail.focus();
    } else {
      userName.focus();
    }
	});
}

if(closeWrite) {
  closeWrite.addEventListener('click', function(evt) {
    evt.preventDefault();
    write.classList.add('hide');
    write.classList.remove("modal-error");
  });
}

window.addEventListener("keydown", function (evt) {
  if (write && evt.keyCode === 27) {
    evt.preventDefault();
    write.classList.add("hide");
    write.classList.remove("modal-error");
  }
});

if(form) {
  form.addEventListener("submit", function (evt) {
    if(!userName.value || !userEmail.value || !userText.value) {
  		var offsetWidthValue = write.offsetWidth;
      evt.preventDefault();
      write.classList.remove("modal-error");
      offsetWidthValue = write.offsetWidth;
      write.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("userName", userName.value);
      }
    }
  });        	
}

if(slider) {
  slider.addEventListener('click', function (evt) {
    if(evt.target.classList.contains('left-arrow')) {
      evt.preventDefault();
      leftInput.checked = true;
    }
    if(evt.target.classList.contains('right-arrow')) {
      evt.preventDefault();
      rightInput.checked = true;
    }
  });        	
}

if(products) {
  products.addEventListener('click', function (evt) {
    var target = evt.target;

    if(target.classList.contains('card-buy')) {
      evt.preventDefault();
      popup.classList.remove('hide');
    };
  });        	
}

if(popup) {
  popup.addEventListener('click', function (evt) {
    var target = evt.target;

    if (target.classList.contains('close')) {
      popup.classList.add('hide');
    } else if (target.classList.contains('continue')) {
      evt.preventDefault();
      popup.classList.add('hide');
    };
  });
}

window.addEventListener("keydown", function (evt) {
  if (popup && evt.keyCode === 27) {
    evt.preventDefault();
    popup.classList.add("hide");
    popup.classList.remove("modal-error");
  }
});
        var link = document.querySelector(".btn-modal");

        var popup = document.querySelector(".modal-contacts");
        var close = popup.querySelector(".modal-close");

        var form = popup.querySelector("form");
        var username = popup.querySelector("[name=username]");
        var useremail = popup.querySelector("[name=useremail]");
        var usermessage = popup.querySelector("[name=usermessage]");


        var isStorageSupport = true;
        var storage = "";

        try {
            storage = localStorage.getItem("username");
        } catch (err) {
            isStorageSupport = false;
        }

        link.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.add("modal-show");

            if (storage) {
                username.value = storage;
                usermessage.focus();
            } else {
                username.focus();
            }
        });

        close.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        });

        form.addEventListener("submit", function (evt) {
            if (!username.value || !useremail.value) {
                evt.preventDefault();
                popup.classList.remove("modal-error");
                popup.offsetWidth = popup.offsetWidth;
                popup.classList.add("modal-error");
            } else {
                if (isStorageSupport) {
                    localStorage.setItem("username", username.value);
                }
            }
        });

        window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 27) {
                evt.preventDefault();
                if (popup.classList.contains("modal-show")) {
                    popup.classList.remove("modal-show");
                    popup.classList.remove("modal-error");
                }
            }
        });



// Попап с картой

        var mapLink = document.querySelector(".btn-map");

        var mapPopup = document.querySelector(".modal-map");
        var mapClose = mapPopup.querySelector(".modal-close");

        mapLink.addEventListener("click", function (evt) {
            evt.preventDefault();
            mapPopup.classList.add("modal-show");
        });

        mapClose.addEventListener("click", function (evt) {
            evt.preventDefault();
            mapPopup.classList.remove("modal-show");
        });

        window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 27) {
                evt.preventDefault();
                if (mapPopup.classList.contains("modal-show")) {
                    mapPopup.classList.remove("modal-show");
                }
            }
        });
	      

          // Слайдер

var advantagesButtons = Array.prototype.slice.call(document.querySelectorAll('.btn-slide'));
var advantages = document.querySelector('.sliders-services');

if (advantages) {
  var advantagesSlides = advantages.querySelectorAll('.sliders-services-item');

  advantagesButtons.forEach(function (button, i) {
    button.addEventListener('click', function () {

      for (var y = 0; y < advantagesSlides.length; y++) {
        advantagesSlides[y].classList.remove('sliders-services-active');
        advantagesButtons[y].classList.remove('btn-slide-active');
      }

      this.classList.add('btn-slide-active');
      advantagesSlides[i].classList.add('sliders-services-active');
    });
  });
}

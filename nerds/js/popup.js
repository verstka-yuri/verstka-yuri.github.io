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


	      
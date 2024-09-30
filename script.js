// local storage for products + cart storage
// modals Modal https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
// filtering - with url params?
// filters: search input, checkboxes, sort by, check bigcommerce stuff for more.
// data expanders
// pagination.
// announce whenever item gets added to cart.

console.log('ho hey!');

// data expanders  
(function () {
    const togglers = [...document.querySelectorAll('[data-expander-toggle]')];

    if (togglers.length !== 0) {
        togglers.forEach(toggle => {
            const toggleAttribute = toggle.getAttribute('data-expander-toggle');
            const toggleTarget = document.getElementById(toggleAttribute);

            toggle.addEventListener('click', e => {
                if (toggle.classList.contains('active')) {
                    toggle.classList.remove('active');
                    toggleTarget.classList.remove('active');
                    toggle.removeAttribute("aria-expanded", "true");
                }
                else {
                    toggle.classList.add('active');
                    toggleTarget.classList.add('active');
                    toggle.setAttribute("aria-expanded", "true");
                }
            })
        })
    }
})();

// modal  
(function () {
    const modalTogglers = [...document.querySelectorAll("[data-modal-toggle]")];

    if (modalTogglers.length !== 0) {
        modalTogglers.forEach(toggle => {
            const toggleAttribute = toggle.getAttribute("data-modal-toggle");
            const modalTarget = document.getElementById(toggleAttribute);
            const modalCloseBtn = modalTarget.querySelector('[data-close-modal]')

            toggle.addEventListener("click", e => {
                modalTarget.showModal();
            })

            modalCloseBtn.addEventListener("click", e => {
                modalTarget.close()
            })
        })
    }
})();

// clear search input 
(function () {
    const inputcontainers = [...document.querySelectorAll('[data-input-container]')];

    if (inputcontainers.length !== 0) {
        inputcontainers.forEach(inputcontainer => {
            const inputElement = inputcontainer.querySelector("[data-searcher]")
            const clearBtn = inputcontainer.querySelector("[data-clear-btn]");

            inputElement.addEventListener("input", e => {
                const inputValue = e.target.value;
                console.log(inputValue)
                if (inputValue.length > 0) {
                    clearBtn.classList.add('active')
                }
                else {
                    clearBtn.classList.remove('active')
                }
            })

            clearBtn.addEventListener("click", e => {
                inputElement.value = "";
                clearBtn.classList.remove('active')
            })
        })
    }
})();
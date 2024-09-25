// local storage for products + cart storage
// modals
// filtering - with url params?
// filters: search input, checkboxes, sort by, check bigcommerce stuff for more.
// data expanders
// pagination.
// announce whenever item gets added to cart.

console.log('ho hey!')




// Modal https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
(function()
{

})();

// toggle extra links for footer links on mobile
(function () { 
    setTimeout(() => {
      const togglers = document.querySelectorAll("[data-expander-toggle]");
      console.log(togglers)
      if (togglers.length !== 0) {
          togglers.forEach((toggler) => {
              const toggleAttributeValue = toggler.getAttribute("data-expander-toggle");
              const toggleTarget = document.getElementById(toggleAttributeValue);
              const triggerToggle = document.querySelector(`[data-trigger-close="${toggleAttributeValue}"]`);
  
              // other dropdowns 
              const cartDrop = document.querySelector('[data-cart-preview]');
  
              if (cartDrop) {
                  cartDrop.addEventListener('click', e => {
                      closeOthers();
                  })
              }
              if (triggerToggle) {
                  triggerToggle.addEventListener('click', e => {
                      toggler.click();
                  })
              }
              toggler.addEventListener("click", (e) => {
                  if (!toggler.classList.contains("show-up")) {
                      closeOthers();
                      toggler.classList.add("show-up");
                      toggler.setAttribute("aria-expanded", "true");
                      toggleTarget.classList.add("show-up");
  
                      if (toggler.hasAttribute('data-to-focus')) {
                          const firstFocusableElement = toggleTarget.querySelector('button, [href], input, [tabindex="0"]')
                          firstFocusableElement.focus()
                      }
  
                  } else if (toggler.classList.contains("show-up")) {
                      toggler.classList.remove("show-up");
                      toggler.setAttribute("aria-expanded", "false");
                      toggleTarget.classList.remove("show-up");
                  }
              });
  
              function closeOthers() {
  
                  togglers.forEach(toggler => {
                      if (toggler.hasAttribute('data-expander-hold')) {
                          return;
                      }
                      const toggleAttributeValue = toggler.getAttribute("data-expander-toggle");
                      const toggleTarget = document.getElementById(toggleAttributeValue);
  
                      toggler.classList.remove("show-up");
                      toggler.setAttribute("aria-expanded", "false");
                      toggleTarget.classList.remove("show-up");
  
                  })
              }
          });
      }
    }, 500);
  })();
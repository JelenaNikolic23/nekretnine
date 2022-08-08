/**
 * Easy selector helper function
 */
const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}

/**
 * Easy on scroll event listener 
 */
const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
}

  /**
   * Easy event listener function
   */
   const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

   /**
   * Preloader
   */
    function showLoader() {
      let preloader = select('#preloader');
      if (preloader) {
          preloader.style.display = "block";
      }
    }

    function hideLoader() {
      let preloader = select('#preloader');
      if (preloader) {
          preloader.style.display = "none";
      }
    }

export {
    select,
    onscroll,
    on,
    showLoader,
    hideLoader
}
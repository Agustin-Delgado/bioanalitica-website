(function() {
    "use strict";
  
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
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')

      on('click', 'li', function(e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        select('#navbar').classList.toggle('navbar-mobile')
        select('.mobile-nav-toggle').classList.toggle('bi-list')
        select('.mobile-nav-toggle').classList.toggle('bi-x')
      }
    }, true)
    })

    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-intuitive-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  
    on('click', '.navbar-intuitive .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-intuitive-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-intuitive-active')
      }
    }, true)



    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-olympus-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  
    on('click', '.navbar-olympus .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-olympus-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-olympus-active')
      }
    }, true)


    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-bk-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  
    on('click', '.navbar-bk .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-bk-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-bk-active')
      }
    }, true)

    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-polymedco-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  
    on('click', '.navbar-polymedco .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-polymedco-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-polymedco-active')
      }
    }, true)

    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-eppendorf-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  
    on('click', '.navbar-eppendorf .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-eppendorf-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-eppendorf-active')
      }
    }, true)

    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-brookfield-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  
    on('click', '.navbar-brookfield .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-brookfield-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-brookfield-active')
      }
    }, true)



    AOS.init({
        offset: 400,
        duration: 1000,
        once: true
    });

    let selectHeader = select('#header-active')
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 79) {
          selectHeader.classList.add('header-scrolled')
        } else {
          selectHeader.classList.remove('header-scrolled')
        }
      }
      window.addEventListener('load', headerScrolled)
      onscroll(document, headerScrolled)
    }

    var swiper = new Swiper(".mySwiper", 
    {
      autoplay:true,  
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
                                         

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
                 },
    });

    var swiper = new Swiper(".mySwiperTree", 
    {
      autoplay:true,  
      slidesPerView: 1,
      effect: "fade",
      spaceBetween: 30,
      loop: true,
                                         

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
                 },
    });

    var swiper = new Swiper(".mySwiperFour", {
      slidesPerView: 1,
      autoplay: true,
      loop: true,
      effect: "fade",

      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      },
    });

    var swiper = new Swiper(".mySwiperFive", {
      effect: "fade",
      slidesPerView: 1,
      autoplay: true,
      loop: true,

      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var swiper = new Swiper(".mySwiperSix", {
      slidesPerView: 1,
      autoplay: true,
      loop: true,

      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var menu = ['Neurooncolog??a', 'Base del craneo', 'Columna vertebral', 'Neurovascular', 'Funcional', 'Pediatr??a']
    var swiper = new Swiper(".mySwiperTwo", {
      spaceBetween: 30,
      effect: "fade",
      slidesPerView: 1,
      loop: true,
      autoplay: true,
  
      pagination: {
        el: ".swiper-pagination",
        clickable: true,

        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (menu[index]) + '</span>';
        }

        
      }
    });
  
  })()
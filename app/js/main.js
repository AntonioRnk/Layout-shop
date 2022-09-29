new Swiper('.top-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320:{
        slidesPerView: 1,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      975: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1250: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    } 
  });

  new Swiper('.feautered-slider', {
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320:{
        slidesPerView: 1,
        spaceBetween: 20,
        grid: {
          rows: 1,
        },
      },
      610: {
        slidesPerView: 2,
        spaceBetween: 20,
        grid: {
          rows: 1,
        },
      },
      876: {
        slidesPerView: 3,
        spaceBetween: 15,
        grid: {
          rows: 2,
        },
      },
      1175: {
        slidesPerView: 4,
        spaceBetween: 20,
        grid: {
          rows: 2,
        },
      },
    }, 
  });

  new Swiper('.biography-slider', {
    centeredSlides: true, 
    initialSlide:2,
    effect: "coverflow",
    coverflowEffect: {
      rotate: -20,
      stretch: 0,
      depth: 100,
      modifier: 1,
    },
    grabCursor: true,  
    breakpoints: {
      320:{
        slidesPerView: 1,
        spaceBetween: 20,
      },

      610: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      876: {
         slidesPerView: 3,
         spaceBetween: 30,
    },
  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  new Swiper('.reviews__slider', {
    centeredSlides: true,
    initialSlide:2,
    breakpoints: {
      320:{
        slidesPerView: 1,
        spaceBetween: 10,
      },

      610: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      935: {
         slidesPerView: 3,
         spaceBetween: 30,
    },
  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  new Swiper('.posts__slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320:{
        slidesPerView: 1,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      975: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1250: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }, 
  });



  const mob = document.querySelector(".mobile__menu");
  const menu = document.querySelector(".menu-list");

  mob.addEventListener('click', function(event){
    
    menu.classList.toggle('active');
    mob.classList.toggle('active');
  });


  let number = document.querySelector('.number');
  let numberTop = number.getBoundingClientRect().top;
  let start = +number.innerHTML; 
  let end = +number.dataset.max;

  window.addEventListener('scroll', function onScroll() {
    if(window.pageYOffset > numberTop - window.innerHeight / 2) {
      this.removeEventListener('scroll', onScroll);
      let interval = setInterval(function() {
        number.innerHTML = ++start;
        if(start == end) {
          clearInterval(interval);
        }
      }, 5);
    }
  });
 

let number1 = document.querySelector('.number1'),
  number1Top = number1.getBoundingClientRect().top,
  start1 = +number1.innerHTML, end1 = +number1.dataset.max;

  window.addEventListener('scroll', function onScroll() {
    if(window.pageYOffset > number1Top - window.innerHeight / 2) {
      this.removeEventListener('scroll', onScroll);
      let interval1 = setInterval(function() {
        number1.innerHTML = ++start1;
        if(start1 == end1) {
          clearInterval(interval1);
        }
      }, 5);
    }
  });

let number2 = document.querySelector('.number2'),
  number2Top = number2.getBoundingClientRect().top,
  start2 = +number2.innerHTML, end2 = +number2.dataset.max;

  window.addEventListener('scroll', function onScroll() {
    if(window.pageYOffset > number2Top - window.innerHeight / 2) {
      this.removeEventListener('scroll', onScroll);
      let interval2 = setInterval(function() {
        number2.innerHTML = ++start2;
        if(start2 == end2) {
          clearInterval(interval2);
        }
      }, 5);
    }
  });


let number3 = document.querySelector('.number3'),
  number3Top = number3.getBoundingClientRect().top,
  start3 = +number3.innerHTML, end3 = +number3.dataset.max;

  window.addEventListener('scroll', function onScroll() {
    if(window.pageYOffset > number3Top - window.innerHeight / 2) {
      this.removeEventListener('scroll', onScroll);
      let interval3 = setInterval(function() {
        number3.innerHTML = ++start3;
        if(start3 == end3) {
          clearInterval(interval3);
        }
      }, 5);
    }
  });


    const footerInner = document.querySelector('.footer-top__inner');
    footerInner.addEventListener('click', function(event){
    const cliclElem = event.target.closest('.footer-top__title');
    console.log(cliclElem);
    if(cliclElem)
    {
      cliclElem.classList.toggle('active'); 
      cliclElem.parentElement.classList.toggle('active');
    }

  });





  

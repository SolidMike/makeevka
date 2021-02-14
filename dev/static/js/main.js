//Слайдеры
var contactsSwiper = new Swiper(".swiper-container.contacts-slider", {
  // Optional parameters
  direction: "vertical",
  loop: true,
  slidesPerView: 1.5,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next.contacts-slider__btn-next",
    prevEl: ".swiper-button-prev.contacts-slider__btn-prev",
  },
});

var mainSwiper = new Swiper(".swiper-container.main-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination.main-slider__pagination",
    clickable: true,
    type: "bullets",
  },
});

var latestNewsSwiper = new Swiper(".swiper-container.latest-news-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination.latest-news-slider__pagination",
    clickable: true,
    type: "bullets",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
    },
    992: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3.8,
      spaceBetween: 40,
    },
  },
});

//Меню
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$dropdownToggle.on("click", function () {
  const $this = $(this);
  if ($this.parent().hasClass("show")) {
    if ($this.length && $this.attr("href")) {
      location.href = $this.attr("href");
    }
  } else {
  }
});

$(window).on("load resize", function () {
  if (this.matchMedia("(min-width: 992px)").matches) {
    $dropdown.hover(
      function () {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function () {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

$(function () {
  $("nav ul li a").each(function () {
    const location = window.location.href;
    const link = this.href;
    if (location === link) {
      $(this).parent().addClass("active");
    }
  });
});

//Parallax
// 1й экран на главной
const scene = document.getElementById("scene");
if (scene !== null) {
  const parallaxInstance = new Parallax(scene);
}

//2й экран на главной
const scene2 = document.getElementById("scene2");
if (scene2 !== null) {
  const parallaxInstance2 = new Parallax(scene2);
}

//"О нас"
const scene3 = document.getElementById("scene3");
if (scene3 !== null) {
  const parallaxInstance3 = new Parallax(scene3);
}

//Кнопка вверх
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $("#toTop").fadeIn(500);
    } else {
      $("#toTop").fadeOut(500);
    }
  });
  if ($(this).scrollTop() != 0) {
    $("#toTop").fadeIn();
  } else {
    $("#toTop").fadeOut();
  }
  $("#toTop").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 800);
  });
});

$(document).ready(function () {
  $(
    ".latest-news-slider__pagination .swiper-pagination-bullet:last-child"
  ).after('<a class="latest-news-slider__link" href="#">Еще новостей</a>');
});

// Часы
function startTime() {
  setInterval(function () {
    let clock = document.querySelector(".header__clock span");
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    clock.innerHTML = hours + ":" + minutes;
  }, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

window.onload = function () {
  startTime();
};

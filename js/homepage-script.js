$(window).on("beforeunload", function () {
  $("body").hide();
  $(window).scrollTop(0);
});

loaderAnimation = function () {
  var firstLine = document.querySelector(".loader-line-1");
  var secondLine = document.querySelector(".loader-line-2");
  var secondContainer = document.querySelector(".loader-container-2");
  $("body").css("overflow", "hidden");
  $(window).scrollTop();
  firstLine.style.top = "0px";

  window.setTimeout(function () {
    secondLine.style.top = "-10px";
  }, 1000);

  window.setTimeout(function () {
    firstLine.style.top = "-70px";
    secondContainer.style.position = "fixed";
  }, 2200);

  window.setTimeout(function () {
    $("body,html").animate({ scrollTop: window.innerHeight }, 1000);
  }, 3000);

  window.setTimeout(function () {
    $(".loader").css("display", "none");
    $(".header-title, .nav-bar h5, .full-navigation").css("visibility", "visible");
    $("header").css("backgroundAttachment", "scroll");
    $("body").css("overflow", "auto");
  }, 4600);

  window.setTimeout(function () {
    $(".header-title").css("transition", "color 0.5s");
  }, 6000)
};

var fixedHeader = document.querySelector(".header-title");
var loaderHeader = document.querySelector(".loader-line-2")

var headerAnimation = function () {
  var viewportHeight = window.innerHeight;

  var halfViewportHeight = viewportHeight / 2;

  var pixels = window.pageYOffset;

  if (pixels > halfViewportHeight) {
    fixedHeader.classList.add("scrolled");
  } else {
    fixedHeader.classList.remove("scrolled");
  }

  if (pixels > halfViewportHeight - 50){
    loaderHeader.classList.add("scrolled-loader");
  }

  if (pixels > halfViewportHeight + 278) {
    fixedHeader.classList.add("attached");
  } else {
    fixedHeader.classList.remove("attached");
  }
};

var navbar = document.querySelector(".nav-bar");
var hamburgerMenu = document.querySelector(".hamburger-menu");

function navbarAnimation() {
  var sticky = window.innerHeight;
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

var responsiveNavbarAnimation = function () {
  var menu = document.querySelector(".responsive-navigation");
  var lineOne = document.querySelector(".line1");
  var lineTwo = document.querySelector(".line2");

  hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("hamburger-menu-opened");
    menu.classList.toggle("responsive-navigation-opened");
    lineOne.classList.toggle("line1-close");
    lineTwo.classList.toggle("line2-close");
  });
};

var animatedTags = document.querySelectorAll(
  ".main-p, .flexbox, .photo, .title, .paragraph, .list, .link, footer h4, footer a"
);

animatedTags.forEach((tag) => {
  tag.style.opacity = 0;
  tag.style.transform = "translateY(100px)";
});

var fadeIn = function () {
  animatedTags.forEach((tag) => {
    var tagTop = tag.getBoundingClientRect().top;
    var tagBottom = tag.getBoundingClientRect().bottom;

    if (tagTop < window.innerHeight && tagBottom > 0) {
      tag.style.animation = "fadein  1s 0.2s both";
      tag.style.transition = "1.5s";
      tag.style.transform = "translateY(-10px)";
    }
  });
};

var backgroundColors = function () {
  var pixelsFromTop = $(document).scrollTop();

  var mainHeight = document.querySelector(".main").offsetHeight;
  var eatHeight = document.querySelector(".eat-container").offsetHeight;
  var buyHeight = document.querySelector(".buy-container").offsetHeight;
  var fixHeight = document.querySelector(".fix-container").offsetHeight;

  if (pixelsFromTop < 0.49 * window.innerHeight + mainHeight) {
    $("section").css("backgroundColor", "#FFFDF4");
    $("body").css("backgroundColor", "#FFFDF4");
  } else if (
    pixelsFromTop <
    0.66 * window.innerHeight + mainHeight + eatHeight
  ) {
    $("section").css({ backgroundColor: "#ECA278", transition: "2s" });
    $("body").css({ backgroundColor: "#ECA278", transition: "2s" });
  } else if (
    pixelsFromTop <
    window.innerHeight + mainHeight + eatHeight + buyHeight
  ) {
    $("section").css({ backgroundColor: "#F6ECD8", transition: "2s" });
    $("body").css({ backgroundColor: "#F6ECD8", transition: "2s" });
  } else if (
    pixelsFromTop <
    0.9 * window.innerHeight + mainHeight + eatHeight + buyHeight + fixHeight
  ) {
    $("section").css({ backgroundColor: "#E1D19D", transition: "2s" });
    $("body").css({ backgroundColor: "#E1D19D", transition: "2s" });
  }
};

headerAnimation();
navbarAnimation();
responsiveNavbarAnimation();
fadeIn();
backgroundColors();
loaderAnimation();

window.addEventListener("resize", function () {
  headerAnimation();
  navbarAnimation();
  fadeIn();
  backgroundColors();
});

document.addEventListener("scroll", function () {
  headerAnimation();
  navbarAnimation();
  fadeIn();
  backgroundColors();
});

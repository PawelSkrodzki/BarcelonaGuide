
function headerAnimationSmall() {
  if (window.pageYOffset >= 50) {
    $(".fix-header").addClass("sticky");
  } else {
    $(".fix-header").removeClass("sticky");
  }
};

var responsiveNavbarAnimation = function () {
  $(".hamburger-menu").on("click", function () {
    $(".hamburger-menu").toggleClass("hamburger-menu-opened");
    $(".responsive-navigation").toggleClass("responsive-navigation-opened");
    $(".line1").toggleClass("line1-close");
    $(".line2").toggleClass("line2-close");
    $(".overflow-hidden").toggleClass("overflow-hidden-show");

    var animatedTags = document.querySelectorAll(".responsive-menu li");
    let delay = 0.25;

    animatedTags.forEach((tag) => {
      tag.style.opacity = 0;
      tag.style.transform = "translateX(200px)";
      tag.style.transitionDelay = `${delay}s`;
    });

    animatedTags.forEach((tag) => {
      if ($(".hamburger-menu").hasClass("hamburger-menu-opened")) {
        tag.style.animation = `fadein  0.5s ${delay}s both`;
        tag.style.transitionDelay = `${delay}s`;
        delay = delay + 0.35;
        tag.style.transform = "translateX(0px)";
      } else {
        setTimeout(function () {
          tag.style.opacity = 0;
          tag.style.animation = "";
        }, 500);
      }
    });
  });
};

function FixAndBuyHover() {
  $(".fix").on("mouseover", function () {
    $(".fix img").addClass("img-opacity");
  });

  $(".buy").on("mouseover", function () {
    $(".buy img").addClass("img-opacity");
  });

  $(".fix").on("mouseout", function () {
    $(".fix img").removeClass("img-opacity");
  });

  $(".buy").on("mouseout", function () {
    $(".buy img").removeClass("img-opacity");
  });
}

headerAnimationSmall();
FixAndBuyHover();
responsiveNavbarAnimation();

document.addEventListener("scroll", function () {
  headerAnimationSmall();
});

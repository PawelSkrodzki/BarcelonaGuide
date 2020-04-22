var animatedTags = document.querySelectorAll(
  ".main-p, .flexbox, .photos h3, .photo, .title, .paragraph, .list, .link, footer h4, footer h2, .fix div, .buy div "
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



fadeIn();


window.addEventListener("resize", function () {
  fadeIn();
});

document.addEventListener("scroll", function () {
  fadeIn();
});

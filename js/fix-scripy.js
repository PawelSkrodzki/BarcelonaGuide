var animatedTags = document.querySelectorAll('.main-p, .flexbox, .photo, .title, .paragraph, .list, .link, footer h4, footer p');

animatedTags.forEach(tag => {
    tag.style.opacity = 0;
    tag.style.transform = "translateY(100px)";
});


var fadeIn = function () {
    animatedTags.forEach(tag => {
        var tagTop = tag.getBoundingClientRect().top;
        var tagBottom = tag.getBoundingClientRect().bottom;

        if (tagTop < window.innerHeight && tagBottom > 0) {
            tag.style.animation = 'fadein  1s 0.2s both';
            tag.style.transition = '1.5s';
            tag.style.transform = "translateY(-10px)";
        }

    });
};


var header = document.querySelector('.fix-header');

function headerAnimationSmall() {
    if (window.pageYOffset >= 100) {
        header.classList.add("sticky");
    }

    console.log(window.pageYOffset);
};

function headerAnimationBig() {
     if (window.pageYOffset <= 120) {
        header.classList.remove("sticky");
    }
};


var navbar = document.querySelector(".nav-bar");
var hamburgerMenu = document.querySelector('.hamburger-menu');

var responsiveNavbarAnimation = function(){
    var menu = document.querySelector('.responsive-navigation');
    var lineOne = document.querySelector('.line1');
    var lineTwo = document.querySelector('.line2');

    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('hamburger-menu-opened');
       menu.classList.toggle('responsive-navigation-opened');
       lineOne.classList.toggle('line1-close');
       lineTwo.classList.toggle('line2-close');
  });
};



fadeIn();
headerAnimationSmall();

window.addEventListener('resize', function () {
    fadeIn();
});

document.addEventListener('scroll', function () {
    fadeIn();
    headerAnimationSmall();
    headerAnimationBig();

});
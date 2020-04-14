var fixedHeader = document.querySelector('.header-title');


var headerAnimation = function () {

    var viewportHeight = window.innerHeight;

    var halfViewportHeight = viewportHeight / 2;

    var pixels = window.pageYOffset;

    if (pixels > halfViewportHeight) {
        fixedHeader.classList.add('scrolled');
    } else {
        fixedHeader.classList.remove('scrolled');
    }


    if (pixels > (halfViewportHeight + 278)) {
        fixedHeader.classList.add('attached');
    } else {
        fixedHeader.classList.remove('attached');
    }
};

var navbar = document.querySelector(".nav-bar");
var hamburgerMenu = document.querySelector('.hamburger-menu');

function navbarAnimation() {

    var sticky= window.innerHeight;
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};


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
}


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



headerAnimation();
navbarAnimation();
responsiveNavbarAnimation();
fadeIn();



window.addEventListener('resize', function () {
    headerAnimation();
    navbarAnimation();
    fadeIn();
});

document.addEventListener('scroll', function () {
    headerAnimation();
    navbarAnimation();
    fadeIn();

});


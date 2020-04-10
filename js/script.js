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
var sticky = navbar.offsetTop;

function navbarAnimation() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
};

var responsiveNavbarAnimation = function(){
    var menu = document.querySelector('.responsive-menu');

    var navibar = document.querySelector('.responsive-bars');

    navibar.addEventListener('click', function() {
        menu.classList.toggle('responsive-menu-opened');
  });
}


var animatedTags = document.querySelectorAll('.main-p, .flexbox, .photos h3, .photo, .fix, .buy');

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
fadeIn();
responsiveNavbarAnimation();



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


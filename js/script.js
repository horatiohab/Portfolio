// Typing text animation and fade in text
const bannerText = 'My Name Is Horatio Bennett';
const letters = bannerText.split("");
const sentence = document.querySelector(".sentence");
let i = 0;

function typer() {
    if (i < bannerText.length) {
        $(sentence).append(letters[i]);
        i++;
        setTimeout(typer, 100);
    } else if (i = bannerText.length) {
        $( ".subtitle" ).fadeIn(600);
        $( ".scroll-down" ).delay(300).fadeIn(600);
    };
};

window.onload = new function() {
    typer();
}

// Burger menu toggle for mobile
$(".menu-btn").click(function() {
    $(this).hide();
    $(".cross-btn").fadeIn();
    $(".sidenav").slideToggle();
    $('body').css('overflow', 'hidden');
}); 

$(".cross-btn").click(function() {
    $(this).hide();
    $(".menu-btn").fadeIn();
    $(".sidenav").slideToggle();
    $('body').css('overflow', 'visible');
}); 

$("li a").click(function() {
    $(".cross-btn").hide();
    $(".menu-btn").show();
    $(".sidenav").hide();
    $('body').css('overflow', 'visible');
}); 

// Drop shadow appears under mobile navbar when not at top of page
$(window).on("scroll", function() {
    const scrollPos = $(window).scrollTop();
    if (scrollPos <= 0) {
        $('.mobile-nav').css("box-shadow", "none");
    }   else {
        $('.mobile-nav').css("box-shadow", "0 0 4px 1px rgba(0, 0, 0, .2)");
    }
});


// Mobile navbar disappears when scrolling down and reappears when scrolling up, but only after passing the hero image
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    const scrollPos = $(window).scrollTop();
    var currentScrollPos = window.pageYOffset;
    if (scrollPos > window.innerHeight * 1 - 76) {
        if (prevScrollpos > currentScrollPos) {
            document.querySelector('.mobile-nav').style.top = "0";
        } else {
            document.querySelector('.mobile-nav').style.top = "-76px";
        };
        prevScrollpos = currentScrollPos;
    }
};
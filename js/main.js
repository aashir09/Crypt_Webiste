(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Roadmap carousel
    $(".roadmap-carousel").owlCarousel({
        autoplay: false ,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);

function ToggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}


document.addEventListener("DOMContentLoaded", function() {
const batchSize = 10; // Number of FAQs to render per batch
const faqAccordion = document.getElementById("accordionExample");
const showMoreBtn = document.getElementById("showMoreBtn");
const accordionItems = faqAccordion.querySelectorAll(".accordion-item");
let currentIndex = batchSize; // Start index for rendering additional FAQs

// Function to show additional FAQs
function showMoreFAQs() {
for (let i = currentIndex; i < currentIndex + batchSize && i < accordionItems.length; i++) {
    accordionItems[i].classList.remove("d-none");
}
currentIndex += batchSize;
if (currentIndex >= accordionItems.length) {
    showMoreBtn.style.display = "none"; // Hide button when all FAQs are shown
}
}

// Initially hide all FAQs except the first batch
for (let i = batchSize; i < accordionItems.length; i++) {
accordionItems[i].classList.add("d-none");
}

// Event listener for "Show More" button
showMoreBtn.addEventListener("click", function() {
showMoreFAQs();
});
});


        
        
        



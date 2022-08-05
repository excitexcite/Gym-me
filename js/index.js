$(document).ready(function() {
  
    var scrollLink = $('.scroll');
    
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000 );
    });
    
    // Active link switching
    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();
      
      scrollLink.each(function() {
        
        var sectionOffset = $(this.hash).offset().top;
        
        if ( sectionOffset <= scrollbarLocation ) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      })
    });
});
 
const accordion = document.querySelectorAll('.faq__item-header');
// const accordion = document.querySelectorAll('.faq__item');
console.log(accordion.length);
console.log(accordion[0]);
// console.log(accordion[1]);
for (let question of accordion) {
    question.addEventListener('click', function() {
        // this.classList.toggle('active');
        const answer = this.nextElementSibling;
        // const answer = document.querySelector('.faq__item-answer');
        console.log(answer);
        const icon = this.children[1];
        icon.classList.toggle('faq__item-icon--active');
        console.log(icon);
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
}


// $(document).ready(addStickyHeader);
window.addEventListener('load', addStickyHeader);

window.addEventListener('scroll', addStickyHeader);

function addStickyHeader() {
    const header = document.querySelector('.header-nav-background');
    header.classList.toggle('sticky', window.scrollY > 0);
}

let navScrollHidderSet = false;

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menu = document.querySelector('.nav');
    console.log(menu.backgroundColor);
    iconMenu.addEventListener('click', function(event) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menu.classList.toggle('_active');
        if (navScrollHidderSet) {
            menu.style.setProperty('--nav-mobile', 'none');
            navScrollHidderSet = false;
        } else {
            menu.style.setProperty('--nav-mobile', '#131316');
            navScrollHidderSet = true;
        }
    });
}


$(document).ready(function(){
    $('.program__slider').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        initialSlide: 2,
        variableWidth: true,
        appendArrows: $('.program__slider-arrows'),
    });
});

$(document).ready(function(){
    $('.community__slider').slick({
        slidesToShow: 1,
        variableWidth: true,
        infinite: false,
        initialSlide: 0,
        appendArrows: $('.community-slider__arrows'),
        responsive: [
            {
                breakpoint: 834,
                settings: {
                    centerMode: true,
                    variableWidth: true,
                    slidesToShow: 1,
                    initialSlide: 1,
                    infinite: true,
                }
            },
        ]
    });
});


  
  
  
  
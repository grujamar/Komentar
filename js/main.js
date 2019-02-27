$(document).ready(function () {
    
    //search wrapper 
    $('.search-icon').click(function(){
      $(this).next().slideToggle();
      $('.small-cart').removeClass('active');
      $('.body-overlay').hide(0);
    });
    
    //animate toogler
    
    $('.navbar-toggler').click(function(){
        $(this).toggleClass('active');
    });

    
    //FILL ELEMENTS DEPENDS OF CATEGORY
    $('[data-category]').each(function () {
        var color = $(this).data('category');
        $(this).find('.category-bg').css('background', color);
        $(this).find('.category-border').css('border-color', color);
        $(this).find('.category-color').css('color', color );
    });
    
    
    // EASE SCROLL

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });
    
    
    //ANIMATION 
    
    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var position = $(this).offset().top;
            var animation = $(this).attr('data-animation');
            //var delay = $(this).attr('data-delay');
            if (position < scroll + windowHight - 60) {
                $(this).addClass(animation);
                //$(this).css('animation-delay', delay);
            }
            console.log(position);
        });

    }

    animation();

    $(window).scroll(function () {
        animation();
    });
    
    
    //OWL-CAROUSEL SLIDER
    if($('.owl-carousel').length > 0){

        //grid-slider-mainslider
        $('.grid-slider-mainslider').owlCarousel({
            items: 1,
            dots:false,
            loop:true,
            nav:true,
            navText:['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>']
 
        });
        
        //newest-coments-slider
        $('.newest-coments-slider').owlCarousel({
            items: 4,
            dots:true,
            loop:true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2,
                    margin: 30,
                    slideBy: 2
                },
                992: {
                    items: 4,
                    margin: 30,
                    slideBy: 4
                }
            }
            
        });
        
    }
    
    







});//end document.ready



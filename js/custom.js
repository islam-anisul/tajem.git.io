
        $('.banner_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        loop: true,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 2000,
        fade: true,
        dots: true,
    });

//----------BANNER SLIDE MIXER

//------------WORKS GALLERY 

var mixer= mixitup('.gallery_mix');



//-----------testimonial slide
    $('.testimoni_content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        loop: true,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 2000,
        dots: true,
    });

//--------------STICKY HEADER COLOR
    $(window).scroll(function () {
        var anis = $(this).scrollTop();
        if (anis > 200) {
            $('.navbar').addClass('header_bg');
        } else {
            $('.navbar').removeClass('header_bg');
        }
    });


//==========video player=======
//$('.videoframe').hide();
$('.video_img').click(function(){
   $('.videoframe').show('slow');
});
































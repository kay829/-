//popup
$(document).ready(function(){
    var popup = '#popup';
    var closeBtn = '#popup .close';
    var expireBtn = '#popup .expire';


    function setCookie(name,value,expiredays){
        var today = new Date();
        today.setDate(today.getDate() + expiredays);

        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + today.toGMTString() + ';';
    }

    $(closeBtn).click(function(e){
        e.preventDefault();
        $(popup).stop().fadeOut(0); 
        $('html,body').css('overflow','visible');
    });

    $(expireBtn).click(function(e){
        e.preventDefault();
        setCookie('exCookie','yes',1); 

        $(popup).stop().fadeOut(0);
        $('html,body').css('overflow','visible'); 
    });

    var cookieData = document.cookie; 

    if(cookieData.indexOf('exCookie=yes') < 0){
        $(popup).fadeIn(0);
        $('html,body').css('overflow','hidden'); 
    }else{
        $(popup).fadeOut(0);
        $('html,body').css('overflow','visible');
    }

});


//main
$(document).ready(function(){
    $(window).resize(function(){
        var h = $(window).height();
        var w = $(window).innerWidth();

        $('#main').height(h);
        

        if(h >= 650 && h < 800 && w > 500){
            $('#main .swiper-pagination').css('bottom',40);
        }else if(h < 650 && w > 500){
            $('#main .swiper-pagination').css('bottom',10);
        }else if(w <= 500){
            $('#main .swiper-pagination').css('bottom',40);
        }else{
            $('#main .swiper-pagination').css('bottom',90);
        }
    });

    $(window).trigger('resize');

    var swiper = new Swiper("#main .swiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: "#main .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: "#main .swiper-button-next",
            prevEl: "#main .swiper-button-prev",
        },
        loop: true,
        effect: "fade",
      });
});

//best
$(document).ready(function(){
    var btn = '#best .tabBtn a'
    var content = '#best .contentsWrap > div'
    var england = '#best .tabBtn .england'

    $(btn).first().addClass('active');
    $(content).fadeOut(0);
    $(content).first().fadeIn(0);
    

    $(btn).click(function(e){
        e.preventDefault();

        $(btn).removeClass('active');
        $(this).addClass('active');

        var index = $(this).parent().index();

        $(content).stop().fadeOut(0);
        $(content).eq(index).stop().fadeIn(0);
    });


    $(window).resize(function(){
        var has = $(england).find('a').hasClass('active');
        var w = window.innerWidth;

        if(has && w < 744){
            $(btn).removeClass('active');
            $(btn).first().addClass('active');

            $(content).stop().fadeOut(0);
            $(content).first().fadeIn(0);
        }
    });
});


$(document).ready(function(){
    var swiper = new Swiper("#review .swiper", {
        slidesPerView: 'auto', 
        spaceBetween: 20,
        pagination: {
          el: "#review .swiper-pagination",
          clickable: true,
        },
        loop:true,
        centeredSlides: true,
        breakpoints: {
          1024: { 
            slidesPerView: 4,
            spaceBetween: 20,
            centeredSlides:false,
            navigation: {
                nextEl: "#review .swiper-button-next",
                prevEl: "#review .swiper-button-prev",
              },
          },
        },
      });
});

//consult
$(document).ready(function(){
    var btn = '#consult .dropdownMenu button';
    var list = '#consult .dropdownMenu ul'

    $(btn).click(function(){
        var has = $(this).hasClass('active');

        if(has){
            $(this).removeClass('active');
            $(this).next().stop().slideUp('fast');
        }else{
            $(btn).removeClass('active');
            $(this).addClass('active');
            $(list).stop().slideUp('fast');
            $(this).next().stop().slideDown('fast');
        }
    });


    $(list).find('a').click(function(e){
        e.preventDefault();

        var activeText = $(this).html();
        
        $(this).parent().parent().prev().find('.text').html(activeText);
        $(this).parent().parent().prev().find('.text').css('color','#999')

        $(this).parent().parent().stop().slideUp('fast');
        $(this).parent().parent().prev().removeClass('active');

    });


    $(list).find('li:last a').keydown(function(e){


        if(e.keyCode == 9){ 
            if(!e.shiftKey){
                $(this).parent().parent().stop().slideUp('fast');
                $(this).parent().parent().prev().removeClass('active');
            }
        }
    });
});
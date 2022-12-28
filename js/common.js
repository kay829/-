//gnb
$(document).ready(function(){
    var main = '#header .mainNav';
    var sub = '#header .subNav';
    var gnb = '#header .gnb';
    var topNav = '#header .tNav';
    var btn = '#header .panelIcon'

    function pcGnb(){
        $(btn).add(main).off('click');


        $(main).mouseenter(function(){
            $(main).removeClass('active');
            $(sub).stop().slideUp('fast');
            $(this).next().stop().slideDown('fast');          

            $(this).parent().mouseleave(function(){
                $(this).children().last().stop().slideUp('fast');
                $(main).removeClass('active');
            });
        });

        $(main).focus(function(){
            $(main).removeClass('active');
            $(this).addClass('active');

            $(sub).stop().slideUp('fast');
            $(this).next().stop().slideDown('fast');
        });


        $(main).keydown(function(e){
            if(e.keyCode == 9){
                if(e.shiftKey){
                    $(main).removeClass('active');
                    $(sub).stop().slideUp('fast');
                }
            }
        });

        $(sub).last().find('li:last a').keydown(function(e){
            if(e.keyCode == 9){
                if(!e.shiftKey){
                    $(main).removeClass('active');
                    $(sub).stop().slideUp('fast');
                }
            }
        });

    }

    function mGnb(){
        $(main).off('mouseenter click focus');
        $(main).parent().off('mouseleave');
        $(btn).off('click');


        $(btn).click(function(e){
            e.preventDefault();

            var has = $(this).hasClass('active');

            if(!has){
                $(main).removeClass('active');
                $(sub).stop().slideUp(0);
            }

            $(this).toggleClass('active');
            $(gnb).toggleClass('active');
            $(topNav).toggleClass('active');
        });


        $(main).click(function(e){
            e.preventDefault();

            var has = $(this).hasClass('active');
            
            if(has){
                $(this).removeClass('active');
                $(this).next().stop().slideUp('fast');
            }else{
                $(main).removeClass('active');
                $(this).addClass('active');
                $(sub).stop().slideUp('fast');
                $(this).next().stop().slideDown('fast');
            }
            
        });

    }


    $(window).resize(function(){
        $(main).add(gnb).add(btn).add(topNav).removeClass('active');
        $(sub).stop().slideUp(0);


        var w = window.innerWidth;

        if(w >= 1024){
            pcGnb();
        }else{
            mGnb();
        }


    });

    $(window).trigger('resize');

});


//scrollBtn
$(document).ready(function(){

    
    var btn = '#scrollBtn a';
    var speed = 1500;
    var easing = 'easeOutQuart';

    $(btn).click(function(e){
        e.preventDefault();

        var w = window.innerWidth;

        if(w >= 1024){
            speed = 1500;
        }else if(w < 1024 && w > 744){
            speed = 1300;
        }else{
            speed = 1100;
        }

        $('html, body').animate({
            scrollTop: 0
        },speed, easing);
    });

    $(window).scroll(function(){
        var top = $(this).scrollTop();

        if(top > 200){
            $(btn).parent().stop().fadeIn('fast');
        }else{
            $(btn).parent().stop().fadeOut('fast');
        }
    });

});
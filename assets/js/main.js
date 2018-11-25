(function($) {
    $(document).ready(function(){
        'use strict';

        // Replace no-js and adjust touch classes  
        ! function() {
            document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/, 'js');
            var yesIfTouchDevice = (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
            if (yesIfTouchDevice) {
                document.documentElement.className += " touch";
            } else {
                document.documentElement.className += " no-touch";
            }
        }();
        //replacing no-js and touch finishes

        // Global Module starts: For user agent device details
        var userAgent = function() {
            var yesIfTouchDevice = (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
            var yesIfRatina = (window.devicePixelRatio > 1);
            function isTouchDevice() {
                return yesIfTouchDevice;
            }
            function isRatina() {
                return yesIfRatina;
            }
            function width() {
                return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            }
            return {
                isTouchDevice: isTouchDevice,
                isRatina: isRatina,
                width: width
            }
        }();

        //for some instatnt viewport change issue fix
        var viewPortWidth = userAgent.width();
        $(window).on('resize orientationChange', function(event) {
            viewPortWidth = userAgent.width();
        });

        
        // Global Module finishes: User Agent

        //MODULE starts: working of recuerdo-rose like pop up on all links
        ! function() {

            $(".pop-container .link-description").each(function() {
                var str = $(this).text().trim().length;
                if (str < 25) {
                    $(this).addClass("max-25");
                } else if (str < 50) {
                    $(this).addClass("max-50");
                } else if (str < 100) {
                    $(this).addClass("max-100");
                }
            });

            $(".no-touch .pop-link").hover(function() {
                $(this).siblings(".link-description").addClass("active");
            }, function() {
                $(this).siblings(".link-description").removeClass("active");
            });

            $(".touch .plus").click(function(e) {
                $(this).closest(".pop-container").toggleClass("active");
                $(this).parent("h1").toggleClass("active");
                e.preventDefault();
            });

            $(".touch .pop-container-social .icon").on("click", function() {
                $(this).parent(".pop-container-social").toggleClass("active");
            });
            $(document).on("click.popups", function(e) {

                var popContainer = $(e.target).closest(".pop-container");

                $(".pop-container").not(popContainer).children("h1").removeClass("active");
                $(".pop-container").not(popContainer).removeClass("active");
            });
        }();
       
 

        /* Flag or Language Section Start */

    ! function() {
         if ($("body").hasClass("page-id-homepage")) {

             var active_top = $(".lang-container a.active").position().top;
             var active_left = $(".lang-container a.active").position().left;
             var scrollSpeed = 10;
             $(document).ready(function() {
                
                 $(".lang-container .ellipse").css("transform", "translateX(" + active_left + "px" + ")");
                 
                 if (!userAgent.isTouchDevice()) {
                    //mouseenter on a flag
                     $(".lang-container .pop-container-L").mouseenter(function() {
                         
                         var left = $(this).position().left + $(".lang-container .flags").scrollLeft();
                         $(".lang-container .ellipse").css("transform", "translateX(" + left + "px" + ")");
                         
                     });

                     //mouseleave from flags 
                     $(".lang-container .flags").mouseleave(function() {

                        active_left = $(".lang-container a.active").position().left + $(".lang-container .flags").scrollLeft();

                        $(".lang-container .ellipse").css("transform", "translateX(" + active_left + "px" + ")");
                         
                     });
                     
                     //mouseenter on right-arrow
                     $(".lang-grand .arrow-right > svg.arrow").on("mouseenter", function() {

                         var remLength = $(".lang-container .flags")[0].scrollWidth - $(".lang-container .flags").width();
                         var scrollableLength = remLength - $(".lang-container .flags").scrollLeft();

                         $(".lang-container .flags").animate({
                             scrollLeft: remLength
                         }, scrollSpeed * scrollableLength);

                         $(".lang-container .ellipse").animate({
                             left: parseFloat($(".lang-container .ellipse").css("left")) - scrollableLength + "px"
                         }, scrollSpeed * scrollableLength);

                     });

                     //mouseenter on left-arrow
                     $(".lang-grand .arrow-left > svg.arrow").on("mouseenter", function() {

                         var remLength = $(".lang-container .flags")[0].scrollWidth - $(".lang-container .flags").width();
                         var scrollableLength = remLength - $(".lang-container .flags").scrollLeft();

                         $(".lang-container .flags").animate({
                             scrollLeft: 0
                         }, scrollSpeed * $(".lang-container .flags").scrollLeft());

                         $(".lang-container .ellipse").animate({
                             left: parseFloat($(".lang-container .ellipse").css("left")) + $(".lang-container .flags").scrollLeft() + "px"
                         }, scrollSpeed * $(".lang-container .flags").scrollLeft());

                     });

                     //mouseleave from any arrow
                     $(".lang-grand svg.arrow").mouseleave(function() {
                         $(".lang-container .flags").stop();
                         $(".lang-container .ellipse").stop();
                     });

                 } else {

                     var running = false;
                     function stopAnimation() {
                        $(".lang-container .flags").stop();
                         $(".lang-container .ellipse").stop();
                         running = false;
                     }

                    
                    // mouse inter on svg arrow left START
                     $(".lang-grand .arrow-right > svg.arrow").on("click", function() {

                         if (running == false) {

                             var remLength = $(".lang-container .flags")[0].scrollWidth - $(".lang-container .flags").width();
                             var scrollableLength = remLength - $(".lang-container .flags").scrollLeft();

                             $(".lang-container .flags").animate({
                                 scrollLeft: remLength
                             }, scrollSpeed * scrollableLength, stopAnimation);

                             $(".lang-container .ellipse").animate({
                                 left: parseFloat($(".lang-container .ellipse").css("left")) - scrollableLength + "px"
                             }, scrollSpeed * scrollableLength);
                             running = true;

                         } else {
                             stopAnimation();
                         }

                     });
                     // mouse inter on svg arrow left END
                     // mouse inter on svg arrow RIGHT START
                     $(".lang-grand .arrow-left > svg.arrow").on("click", function() {

                         if (running == false) {

                             var remLength = $(".lang-container .flags")[0].scrollWidth - $(".lang-container .flags").width();
                             var scrollableLength = remLength - $(".lang-container .flags").scrollLeft();

                             $(".lang-container .flags").animate({
                                 scrollLeft: 0
                             }, scrollSpeed * $(".lang-container .flags").scrollLeft(), stopAnimation);

                             $(".lang-container .ellipse").animate({
                                 left: parseFloat($(".lang-container .ellipse").css("left")) + $(".lang-container .flags").scrollLeft() + "px"
                             }, scrollSpeed * $(".lang-container .flags").scrollLeft());
                             running = true;

                         } else {
                             stopAnimation();
                         }

                     });

                    // mouse inter on svg arrow right END

                 }


             });

             //-----------------             

             //for caption
             $(".lang-container .pop-container-L").each(function() {
                 var $caption = $(this).data("caption");
                 if(viewPortWidth >= 768){
                    $("body").append(
                         '<span class="link-description lang">' +
                         '<span class="inverse-skew">' +
                         $caption +
                         '</span>' +
                         '</span>'
                     );
                 }
             });

             //caption on hover
             $(".lang-container .pop-container-L").hover(function() {
                 var left = $(this).offset().left;
                 var top = $(this).offset().top;
                 var pos = $(this).index();
                 var ele = $("body > .lang.link-description").eq(pos);
                 top = top - 35;
                 ele.css({
                         top: top + "px",
                         left: left + "px"
                     })
                     .addClass("active");
             }, function() {
                 var pos = $(this).index();
                 $("body > .lang.link-description").eq(pos).removeClass("active");
             });



         }
     }();


        /* Flag or Language Section End */

        // Responsive Flag Combo
        if(viewPortWidth <= 767 ){
            
            $('.lang-container a.pop-container-L.active').mouseenter(function(){
                $('.lang-container .flags').css('overflow', 'visible');
            });

            $('.lang-container .flags').mouseleave(function(){
                $('.lang-container .flags').css('overflow', 'hidden');
            });
        }


        // text container function "scroll-up" and "scroll-down" start here
        // ----------------------------------------------------------------
        // random id genarator function start
        function makeid() {
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

          for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

          return text;
        }

        // paragraph scroll-up "upore" function start here
        // -----------------------------------------------
        function verticalSlideUp(){
            $(".scroll-inner-container").each(function(){
                let id = makeid();
                var div = $(this);
                div.stop();
                $(this).attr("id",id);
                var remHeight = div[0].scrollHeight - $(this).height();
                var scrollableHeight = remHeight - div.scrollTop();
                var pos = div.scrollTop();
                var remainingTime = (remHeight - pos) * 100 / 5; //here 5 is a speed
                // console.log("pos : "+ pos);
                div.animate({
                    scrollTop:remHeight
                },{
                    duration: remainingTime,
                    easing: "linear",
                });
            });
        };

        // paragraph scroll-down "neche" function start here
        // -----------------------------------------------
        function verticalSlideDown(){
            $(".scroll-inner-container").each(function(){
                let id = makeid();
                var div = $(this);
                div.stop();
                $(this).attr("id",id);
                var remHeight = div[0].scrollHeight - $(this).height();
                var scrollableHeight = remHeight - div.scrollTop();
                var pos = div.scrollTop();
                // console.log("pos : "+ pos);
                var remainingTime = (pos * 100) / 5; //here 5 is a speed

                div.animate({
                    scrollTop:0
                },{
                    duration: remainingTime,
                    easing: "linear",

                });

            });
        };

    // mouse movement exucution start here .when mouse hover over 10% top or 10% bottom then scroll up/down start
    // ----------------------------------------------------------------------------------------------------------
    var obj = $('.scroll-inner-container');
    var top, left, bottom, right;
    var excldH,objHeight,objWidth;
    // Get position of the div 'scroll-inner-container'
     function getPos(obj) {
        var offsets = obj.offset();
        objHeight = obj.height();
        objWidth = obj.width();
        excldH = objHeight/3; //Caculating 10% height
        top = offsets.top,
        left = offsets.left,
        bottom = top+objHeight,
        right = left+objWidth
    };
    getPos(obj);

    //Calls fuction on mouse over
    obj.mousemove(function(e) {
        handleMouseMove(e)
    });
    //Get position of mouse pointer
    var disableAutoScroll = true;
    function handleMouseMove(e) {
            var posX = e.clientX;
                var posY = e.clientY;

            if(posY < top+excldH && disableAutoScroll == true){
                
                verticalSlideDown();

            }else if(posY > bottom-excldH && disableAutoScroll == true){
                
                verticalSlideUp();
            }else{
                var div = $('.scroll-inner-container');
                div.stop();
            }
     };





    //Assigning random Id For Every Horizontal Menu and resizing the menuContainer
    function initHorizontal(){
        $(".horizontalMenu").each(function(){
            let id = makeid();
            $(this).attr("id", id);
            let mainWidth = $(this).width();
            let arrowWidth = $(this).children('i').outerWidth(true);
            let calculatedWidth = mainWidth - (arrowWidth*2);
            $(this).children('.menuContainer').css('width', calculatedWidth);
        });
    }
    initHorizontal();
    var scrollSpeed = 7;
    //mouseenter on arrow Horizontal Menu
     $(".horizontalMenu > i").on("mouseenter", function() {

         var topParentId = $(this).parent('.horizontalMenu')[0].id;
         console.log("topParentId" + topParentId);
         var leftArrow = $(this).hasClass('pull-left');
         var rightArrow = $(this).hasClass('pull-right');

         var remLength = $("#"+ topParentId +" >.menuContainer>.innerContainer")[0].scrollWidth - $("#"+ topParentId +" >.menuContainer>.innerContainer").width();
         var scrollableLength = remLength - $("#"+ topParentId +" >.menuContainer>.innerContainer").scrollLeft();

         if(rightArrow){
             $("#"+ topParentId +">.menuContainer>.innerContainer").animate({
                scrollLeft: remLength
             }, scrollSpeed * scrollableLength, hArrowVisibilityCheck(topParentId));
         }else if(leftArrow){
            $("#"+ topParentId +">.menuContainer>.innerContainer").animate({
                 scrollLeft: 0
             }, scrollSpeed * $("#"+ topParentId +" >.menuContainer>.innerContainer").scrollLeft(), hArrowVisibilityCheck(topParentId));
         }
     });

     //Mouse Leave from Arrow Horizontal Menu
     $(".horizontalMenu > i").on("mouseleave", function() {
        var topParentId = $(this).parent('.horizontalMenu')[0].id;
        $("#"+ topParentId +" >.menuContainer>.innerContainer").stop();
        hArrowVisibilityCheck(topParentId);
     });

     function hArrowVisibilityCheck(parentId){
        var remLength = $("#"+ parentId +" >.menuContainer>.innerContainer")[0].scrollWidth - $("#"+ parentId +" >.menuContainer>.innerContainer").width();
        var scrollableLength = remLength - $("#"+ parentId +" >.menuContainer>.innerContainer").scrollLeft();
        console.log("scrollWidth: "+$("#"+ parentId +" >.menuContainer>.innerContainer")[0].scrollWidth+" width: "+$("#"+ parentId +" >.menuContainer>.innerContainer").width());
        console.log('remlength: '+ remLength + " scrollableLength: "+scrollableLength);
        if(scrollableLength <= 3){
            $("#"+ parentId +" > i.pull-right").css('visibility', 'hidden');
        }else{
            $("#"+ parentId +" > i.pull-right").css('visibility', 'visible');
        }

        if( $("#"+ parentId +" >.menuContainer>.innerContainer").scrollLeft() >= 1 ){
            $("#"+ parentId +" > i.pull-left").css('visibility', 'visible');
        }else{
            $("#"+ parentId +" > i.pull-left").css('visibility', 'hidden');
        }
     }
     /* Horizontaol Menu End*/




    //initially background color is display none.
    //when window will ne load then random image number will be shown 
    $('.img-class').css('display','none');
    // random number for background image class
    function getRandomNumber() {
        
        var number = Math.floor(Math.random()*15);

        // random colore code start
        var imgLink = $('.random-background-image-'+number+' img').attr('src');

        if (number == 0) {
            var bgcolor = "EFE7EB";
        } else if(number == 1){
            var bgcolor = "A8BFC5";
        } else if(number == 2){
            var bgcolor = "B1B0C7";
        } else if(number == 3){
            var bgcolor = "D8C5C6";
        } else if(number == 4){
            var bgcolor = "E4C3D9";
        } else if(number == 5){
            var bgcolor = "E3C4DB";
        } else if(number == 6){
            var bgcolor = "FFE3BA";
        } else if(number == 7){
            var bgcolor = "F8E7C4";
        } else if(number == 8){
            var bgcolor = "F8D6DB";
        } else if(number == 9){
            var bgcolor = "91B8E0";
        } else if(number == 10){
            var bgcolor = "A8B08B";
        } else if(number == 11){
            var bgcolor = "CBFFE9";
        } else if(number == 12){
            var bgcolor = "B2FFFF";
        } else if(number == 13){
            var bgcolor = "E5C8B3";
        } else if(number == 14){
            var bgcolor = "FFF2EB";
        } else if(number == 15){
            var bgcolor = "EBDBB4";
        }
        // random colore code end
        console.log("color code : "+ bgcolor + " Number is : "+ number);
        $("body").css({
            "background" : "transparent url('"+imgLink+"') repeat-x left bottom fixed",
            "background-color" : "#"+bgcolor
        });

        console.log("Random NUmber is : "+ number + ' image link is : '+ imgLink);
    }
    // random color code and image(image are spacifide in html) function init here
    // ------------------------------------------------------------------------------
    getRandomNumber();





/*
click over bradcrumb arrow massage box....
to show artical headding dropdown menu
=============================================
*/
//click arrow massage box to show artical headding
$('.breadcrumb_arrow_massage_box').click(function(){
    $('.artical_headding_dropdown').css({
        'visibility':'visible',
    });
});

// click to stay and hide on plus and minus btn

$('.stay-and-out > i.fa-plus-circle').click(function(){
    $('.artical_headding_dropdown').addClass('stay_and_hide');
});
$('.stay-and-out > i.fa-minus-circle').click(function(){
    $('.artical_headding_dropdown').removeClass('stay_and_hide');
});

$('.stay-and-out > i.fa-minus-circle').click(function(){
    $('.artical_headding_dropdown').css({
        'visibility':'hidden',
    });
});

if($('.artical_headding_dropdown').hasClass('stay_and_hide')){
    $(this).css({
        'visibility':'visible',
    });
}else{
    //hover to show/hide show artical headding
    $('li.artical_headding_area')
    .mouseenter(function(){
        $('.artical_headding_dropdown').css({
            'visibility':'visible',
        });
    })
    .mouseleave(function(){
        $('.artical_headding_dropdown').css({
            'visibility':'hidden',
        });
    });

    //hide artical headding dropdown after leave mouse from it.
    $('.artical_headding_dropdown').mouseleave(function(){
        $(this).css({
            'visibility':'hidden',
        });
    });

}


/* bradcrumb arrow visibility based on 
width of bradcrumb and string length
===============================================
*/

function countString(){
    var bradcrump_str = '';
    $('ul.innerContainer.breadcrumb_menu li a').each(function(){
        bradcrump_str = $(this).text().length;
    });
    if(bradcrump_str > 100){
        $('ul.innerContainer.breadcrumb_menu li a').append('...');
    }
    // console.log(bradcrump_str);
    return bradcrump_str;
}
// init calculations string length functions
countString();

// calculate width of bradcrumb visibal area

function bradcrumbWidth(){
    $(".horizontalMenu").each(function(){
        let id = makeid();
        $(this).attr("id", id);
        let mainWidth = $(this).width();
        let arrowWidth = $(this).children('i').outerWidth(true);
        let calculatedWidth = mainWidth - (arrowWidth*2);
        console.log(calculatedWidth);
    });

}
// init bradcrumbWidth functions
bradcrumbWidth();



// canculate height for all devices
// ---------------------------------
// calculate height of sections (header-areas-top)
//---------------------------------------------
function sectionHeight(){
    // variable initialize
    let headerAresTopHeight, headerBreadcrumbSectionHeight, mainTextContainerHeight, langGrandHeight, accordianHeight, socialWrapperHeight,viewPortHeight = 0;
    // sections ID initializations
    let viewHeight = window.innerHeight;
    let socialWrapperHeightId = document.getElementById('social_wrapper');
    let headerAresTopHeightId = document.getElementById('header-areas-top');
    let headerBreadcrumbSectionHeightId = document.getElementById('header_breadcrumb_section');
    let mainTextContainerHeightId = document.getElementsByClassName('scroll-inner-container');
    let langGrandHeightId = document.getElementById('lang-ground-flag');
    let accordianHeightId = document.getElementById('accordian');
    // sections height measurement
    socialWrapperHeight = $(socialWrapperHeightId).height();
     headerAresTopHeight = $(headerAresTopHeightId).height();
    headerBreadcrumbSectionHeight = $(headerBreadcrumbSectionHeightId).height();
    langGrandHeight = $(langGrandHeightId).height();
    accordianHeight = $(accordianHeightId).height();
     /* i need dynamic main-text-cntainer-height so 
    first we do substruct all height from "viewheight" except (main_text_container)
    */
    let calculatedHeight = headerAresTopHeight+headerBreadcrumbSectionHeight +langGrandHeight+accordianHeight;
   let main_text_container = viewHeight - calculatedHeight;
    mainTextContainerHeight = $(mainTextContainerHeightId).css({
        
        'max-height' : main_text_container-50,
        'min-height' : 300+'px'
    });

}

sectionHeight();
$(window).resize(function(){
    sectionHeight();
});









//dark background when hover or click on 
// (lang-select-flag-combo)
// --------------------------------------
 $('.header-flag-image-right').hover(function(){
    $('.background-changes').toggleClass('dark-background');

    $('.social-wrapper').toggleClass('dark-inner-background');
    
 });

 

/*
    document redy function "end" here
    ----------XXXX-------------------
*/

    });
})(jQuery);

// full background-image with color with image
$(window).on('load',function(){
    function getRandomColor() {
        var r  = Math.floor(Math.random() * 256);
        var g  = Math.floor(Math.random() * 256);
        var b  = Math.floor(Math.random() * 256);
        var a  = 0.65;
        var imglink = "http://ppcdn.500px.org/75319705/1991f76c0c6a91ae1d23eb94ac5c7a9f7e79c480/2048.jpg"
        var rgbaColor = "rgba(" + r +"," + g +","+ b + "," + a +")";
        // console.log("rgba color : "+ rgbaColor);
        $("body").css("background-image", "linear-gradient(" + rgbaColor + "," + rgbaColor + "),url("+imglink+")");
    }
    //getRandomColor();
});
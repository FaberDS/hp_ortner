// JavaScript Document


// ##################################################################################################
// Fixed Responsive Navbar
// ##################################################################################################

$(document).ready(function(){

    //Mobile NAVBAR Slidedown effekt Effekt *************************************************************       

    $(".menu-icon").on("click", function(){
        $("nav ul").toggleClass("showing");
        document.body.style.overflow = 'hidden';
    })

    //Scrolling Effekt *************************************************************       
    $(window).on("scroll", function(){
        if($(window).scrollTop()){
            $('nav').addClass('black');
        } else{
            $('nav').removeClass('black');

        }
    })

    //Click and Close ************************************************************* 
    $(".firtst_level li, .first_level a").on("click", function(){
        console.log('click');
        $("nav ul").removeClass("showing");
        document.body.style.overflow = 'scroll';
    })

    // ESC close navbar
    document.addEventListener('keydown', e => {
        if(e.keyCode === 27){
            $("nav ul").removeClass("showing");
            document.body.style.overflow = 'scroll';
        }
    })



})
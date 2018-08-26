// JavaScript Document

    // ##################################################################################################
    // Smooth Scrolling
    // ##################################################################################################
    $(function(){

        $('a[href*="#"]').stop().click(function(){
            console.log(location.hostname);
            if(location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname){
                var SC_HASH = this.hash;        //ergibt ein string
                var SC_ZIEL = $(this.hash);     // ergibt ein HTML Element
                if(SC_ZIEL.length){             // Abfrage gibt es ein Ziel
                    var SC_ABSTAND_TOP = SC_ZIEL.offset().top;      //Gibt die höhe der oberen Kante des Element zurück

                    $('html,body').animate({scrollTop: SC_ABSTAND_TOP}, 1000, function(){       //Scrollt zur jeweiligen Top Kante einer Box
                        window.location.hash = SC_HASH;
                    });
                    return false;
                }
            }

        });
    })
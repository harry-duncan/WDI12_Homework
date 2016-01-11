$(document).ready(function(){
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
      
        var target = this.hash,
        $target = $(target);
      
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-40
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    }); 
});


var thursday = {
    rob: 0,
    harry: 0,
    beers: 50,

    drinks: function (beers){&&in9 ]
            return "hungover";
        }
    },
    WDI12: function (fridayMorning){
        return "deal with life and joel"
    }
};
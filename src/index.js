$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".mynav").css("border-bottom" , "0.5px solid #f1f5f9",  );
          $(".mynav").css("background" , "#FFFFFF",  );


        }
  
        else{
            $(".mynav").css("background" , "transparent");
            $(".mynav").css("border" , "none");  	
  	
        }
    })
  })


 


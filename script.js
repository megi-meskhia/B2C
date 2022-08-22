// swiper

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay:2500,
      disableOnInteraction: false,
    },
  });
  
// /////////////////////////////

  $(document).ready(function (){

    $(".btn-leng").click(function(){
      if($(".btn-leng").hasClass("borders")){
        $(".btn-leng").removeClass("borders");
      }else {
        $(".btn-leng").addClass("borders");
      }
    });

// blocks hide-show

    $(".block").click(function(){
      $(".blocks").hide();
      $(".big-box").show();
      $(".boxes").show();
    });
    $(".box1").click(function(){
      $(".box1").hide();
      $(".box1p").show(3000);
      $(".box5, .box2, .box3, .box4").click(function(){
          $(".box1").show();
          $(".box1p").hide();
      });
    });
    $(".box2").click(function(){   
      $(".box2").hide();
      $(".box2p").show();
      $(".box5, .box1, .box3, .box4").click(function(){
          $(".box2").show();
          $(".box2p").hide();
      });
    });
    $(".box3").click(function(){
      $(".box3").hide();
      $(".box3p").show();
      $(".box5, .box2, .box1, .box4").click(function(){
          $(".box3").show();
          $(".box3p").hide();
      });
    });
    $(".box4").click(function(){
      $(".box4").hide();
      $(".box4p").show();
      $(".box5, .box2, .box3, .box1").click(function(){
          $(".box4").show();
          $(".box4p").hide();
      });
    });
    $(".box5").click(function(){
      $(".box5").hide();
      $(".box5p").show();
      $(".box1, .box2, .box3, .box4").click(function(){
          $(".box5").show();
          $(".box5p").hide();
      });
    });

// /////////////////////////////


// questions hide-show 

   $(".q").click(function(){
    $(".answer, .qimg").show();
    $(".q").hide();
    $(".questions").show();
    $(".qsvg").removeClass("pt-5 mt-5");
    $(".qsvg").css("height","25vw")
   })

   $(".q1, .q-1").click(function(){
    $(".q1").addClass("clicked-q");
    $(".ans1, .q1").show();
    $(".q-1").hide();
    $(".q-2, .q-3, .q-4, .q-5").click(function(){
      $(".q1, .ans1").hide();
      $(".q-1").show();
  });
   })
   $(".q2, .q-2").click(function(){
    $(".q2").addClass("clicked-q ml-5 pl-3");
    $(".ans2, .q2").show();
    $(".q2").removeClass("py-3 my-5");
    $(".q-1").addClass("mb-5 pb-5");
    $(".q-2").hide();
    $(".q-1, .q-3, .q-4, .q-5").click(function(){
      $(".q2, .ans2").hide();
      $(".q-2").show();
  });
   })
   $(".q3, .q-3").click(function(){
    $(".q3").addClass("clicked-q ml-5 pl-3");
    $(".q-3").hide();
    $(".ans3, .q3").show();
    $(".q-2, .q-1, .q-4, .q-5").click(function(){
      $(".q3, .ans3").hide();
      $(".q-3").show();
  });
   })
   $(".q4, .q-4").click(function(){
    $(".q4").addClass("clicked-q ml-5 pl-3");
    $(".ans4, .q4").show();
    $(".q4").removeClass("py-3 my-5");
    $(".q-3").addClass("mb-5 pb-5");
    $(".q-4").hide();
    $(".q-2, .q-3, .q-1, .q-5").click(function(){
      $(".q4, .ans4").hide();
      $(".q-4").show();
  });
   })
   $(".q5, .q-5").click(function(){
    $(".q5").addClass("clicked-q ml-5 pl-3");
    $(".ans5, .q5").show();
    $(".q-5").hide();
    $(".q-2, .q-3, .q-4, .q-1").click(function(){
      $(".q5, .ans5").hide();
      $(".q-5").show();
  });
   })
  });

  // ///////////////////////////////

$(".save").click(function(){
  if($(".check").css('display') == 'none'){
    $(".check").show();
    $(".empty").hide();
  }else if($(".empty").css('display') == 'none'){
    $(".empty").show();
    $(".check").hide();
  }
})


// dark and light modes

var $darkmode = $('<link class="darkmode" rel="stylesheet">').attr('href', 'assets/css/darkmode.css');
var $lightmode = $('<link class="lightmode" rel="stylesheet">').attr('href', 'assets/css/lightmode.css');

  $(document).ready(function(){
    $(".dark-mode").click(function(){
      if($("link").hasClass("lightmode")){
        $(".lightmode").remove();
        $("head").append($darkmode);
      }
    });
    $(".light-mode").click(function(){
      if($("link").hasClass("darkmode")){
        $(".darkmode").remove();
        $("head").append($lightmode);
      }
    });
  })

// ///////////////////////////

  // scroll top

const button = document.querySelector('.scrollup');

const scrollToTop = () => {
    button.addEventListener("click", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      }); 
      console.log(event);
    });
  };

  scrollToTop();
jQuery(document).ready(function($){

// header code
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();    
    if (scroll >= 100) {
	$(".main-menu").addClass("stickey");
    } else {
        $(".main-menu").removeClass("stickey");
    }
});

gsap.set(".cursorA", { xPercent: -50, yPercent: -50 });
var CA = document.querySelector(".cursorA");
window.addEventListener("mousemove", (e) => {
	gsap.to(CA, 0.5, { x: e.clientX, y: e.clientY });
	gsap.to(CA, { delay: 0.6, opacity: 1 });
});
$(document).ready(function () {
	$("body").hover(
		function () {
			$(".cursorA").animate({
				width: "40px",
				height: "40px"
			});
		},
		function () {
			$(".cursorA").animate({
				width: "13px",
				height: "13px"
				
			});
		}
	);
	
	
});
$(document).ready(function () {
	$("div").hover(
		function () {
			$(".cursorA").css({
				background: "none"
			});
		},
		function () {
			$(".cursorA").css({
				background: "white"
			});
		}
	);
	
});




  });


  function openNavbar() {
    document.querySelector("#navbar").style.width = "80%";
    document.querySelectorAll(".open")[0].style.opacity = 0;
  }
  function closeNavbar() {
    document.querySelector("#navbar").style.width = "0";
    document.querySelectorAll(".open")[0].style.opacity = 1;
  }
  
  jQuery('.navbar-toggler').on('click', function () {
    jQuery(this).toggleClass('change');
    if(jQuery(this).hasClass('change')) {
      jQuery('.logo').attr('src', stickyLogoSrc);
    }
    else { 
      if(jQuery(window).scrollTop() < 10) { 
       jQuery('.logo').attr('src', initialLogoSrc);
       if(jQuery('body').hasClass('page-template-opening-soon') || jQuery('body').hasClass('dark-header')) {
          jQuery('.logo').attr('src', stickyLogoSrc);
        }
      }
    }
});

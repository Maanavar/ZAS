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
				width: "15px",
				height: "15px"
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
				background: "white",
        width: "30px",
				height: "30px"
			});
		},
		function () {
			$(".cursorA").css({
				background: "white"
			});
		}
	);
	
});

AOS.init({
	offset: 80,
	duration: 1500,
	// once: true,
	easing: 'ease',
});


  });


//   function openNavbar() {
//     document.querySelector("#navbar").style.width = "80%";
//     document.querySelectorAll(".open")[0].style.opacity = 0;
//   }
//   function closeNavbar() {
//     document.querySelector("#navbar").style.width = "0";
//     document.querySelectorAll(".open")[0].style.opacity = 1;
//   }
  
//   jQuery('.navbar-toggler').on('click', function () {
//     jQuery(this).toggleClass('change');
//     if(jQuery(this).hasClass('change')) {
//       jQuery('.logo').attr('src', stickyLogoSrc);
//     }
//     else { 
//       if(jQuery(window).scrollTop() < 10) { 
//        jQuery('.logo').attr('src', initialLogoSrc);
//        if(jQuery('body').hasClass('page-template-opening-soon') || jQuery('body').hasClass('dark-header')) {
//           jQuery('.logo').attr('src', stickyLogoSrc);
//         }
//       }
//     }
// });

var span = document.querySelector(".typewriter span");
var textArr = span.getAttribute("data-text").split(", "); 
var maxTextIndex = textArr.length; 

var sPerChar = 0.15; 
var sBetweenWord = 1.5;
var textIndex = 0; 

typing(textIndex, textArr[textIndex]); 

function typing(textIndex, text) {
    var charIndex = 0; 
    var maxCharIndex = text.length - 1; 
    
    var typeInterval = setInterval(function () {
        span.innerHTML += text[charIndex]; 
        if (charIndex == maxCharIndex) {
            clearInterval(typeInterval);
            setTimeout(function() { deleting(textIndex, text) }, sBetweenWord * 1000); 
            
        } else {
            charIndex += 1; 
        }
    }, sPerChar * 500); 
}

function deleting(textIndex, text) {
    var minCharIndex = 0; 
    var charIndex = text.length - 1; 

    var typeInterval = setInterval(function () {
        span.innerHTML = text.substr(0, charIndex); 
        if (charIndex == minCharIndex) {
            clearInterval(typeInterval);
            textIndex + 1 == maxTextIndex ? textIndex = 0 : textIndex += 1; 
            setTimeout(function() { typing(textIndex, textArr[textIndex]) }, sBetweenWord * 1000); 
        } else {
            charIndex -= 1; 
        }
    }, sPerChar * 1000); 
}
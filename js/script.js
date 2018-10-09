// JQuery popup knapper - https://www.pair.com/support/kb/how-to-use-jquery-to-generate-modal-pop-up-when-clicked/

$(document).ready(function() {
            
            $(".open").on("click", function() {
                $(".popup-overlay, .popup-content").addClass("active");
            });

            //Fjerner "active" class og åbner .popup og fjerner .popup-content når "Close" button er aktiv
            $(".close, .popup-overlay").on("click", function() {
                $(".popup-overlay, .popup-content").removeClass("active");
            });
     
      $(".open1").on("click", function() {
                $(".popup-overlay1, .popup-content1").addClass("active");
            });

           //Fjerner "active" class og åbner .popup og fjerner .popup-content når "Close" button er aktiv 
            $(".close1, .popup-overlay1").on("click", function() {
                $(".popup-overlay1, .popup-content1").removeClass("active");
            });
                   
        });

// Javascript vores slider - https://www.w3schools.com/howto/howto_js_slideshow.asp


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}






let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("slider-dot");
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].checked = false;
  }
  
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].checked = true;
}

// Automatic slideshow
let autoSlideIndex = 0;
autoShowSlides();

function autoShowSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("slider-dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  autoSlideIndex++;
  if (autoSlideIndex > slides.length) {
    autoSlideIndex = 1;
  }
  slides[autoSlideIndex - 1].style.display = "block";
  dots[autoSlideIndex - 1].checked = true;
  setTimeout(autoShowSlides, 3000); // Change slide every 2 seconds (2000ms)
}

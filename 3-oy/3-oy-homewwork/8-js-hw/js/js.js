let mybutton = document.querySelector("#myBtn"),
    scrolheader=document.querySelector(".nav-bar"),
    strelkabtn=document.querySelector("#strelka1"),
    imgcarousel=document.querySelector("#img");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
    scrolheader.style.height="80px";

  } else {
    mybutton.style.display = "none";
    scrolheader.style.height="120px";

  }
  
}
mybutton.addEventListener("click",function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


const indicators = document.querySelectorAll(".smal-img a");
let a=document.querySelector(".strelka");
console.log(a);

for (i of indicators) {
  function add(event) {
    const show = document.querySelector("#show img");
    show.setAttribute("src", this.firstElementChild.getAttribute("src"));
    event.preventDefault();
  }
}
a.addEventListener("click", add);


// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }




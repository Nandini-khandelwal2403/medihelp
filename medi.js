let slideIndex = 1;
showSlides(slideIndex);

//Next / previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function myFunction(i) {
    const dots = document.querySelector('.dots');
    const more = document.querySelector('.more');
    const mybtn = document.getElementsById("mybtn1");
    const mybtn2 = document.getElementsById("mybtn2");
    const mybtn3 = document.getElementsById("mybtn3");
    console.log(mybtn);
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        mybtn.innerHTML = "Read more";
        more.style.display = "none";
    } else {
        dots.style.display = "none";
        mybtn.innerHTML = "Read less";
        more.style.display = "inline";
    }
}

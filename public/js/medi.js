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


    // const dots = document.querySelector('.dots0');
    // const more = document.querySelector('.more0');
    // const mybtn = document.getElementById("mybtn1");
    // console.log("printing");
    // if (dots.style.display === "none") {
    //     dots.style.display = "inline";
    //     mybtn.innerHTML = "Read more";
    //     more.style.display = "none";
    // } else {
    //     dots.style.display = "none";
    //     mybtn.innerHTML = "Read less";
    //     more.style.display = "inline";
    // }

    const dots = document.querySelector('.dots' + i);
    const more = document.querySelector('.more' + i);
    const mybtn = document.getElementById("mybtn" + i);
    const bn = document.querySelector('.b' + (i + 3));
    console.log("printing");
    if (dots.style.display === "none") {
        // bn.classList.remove("incHeight");
        dots.style.display = "inline";
        mybtn.innerHTML = "Read more";
        more.style.display = "none";
        console.log("goingInIf");
    } else {
        dots.style.display = "none";
        mybtn.innerHTML = "Read less";
        more.style.display = "inline";
        bn.classList.add("incHeight");
    }

}

var image = document.getElementsByClassName("image")
var dots = document.getElementsByClassName("dot")
var imageno = 1
displayimg(imageno)
function nexting(n) {
    displayimg(imageno += n)
}
function currentSlide(n) {
    displayimg(imageno = n)
}
function displayimg(n) {
    var i;
    if (n > image.length) {
        imageno = 1
    }
    if (n < 1) {
        imageno = image.length
    }
    for (i = 0; i < image.length; i++) {
        image[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }
    image[imageno - 1].style.display = "block";
    dots[imageno - 1].className += " active";
}
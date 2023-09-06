var sliderContent = document.getElementById('box');
var image = ['nach', 'nach2', 'nach3', 'nach4'];

var i = image.length;

function nextImage(){
    if (i<image.length) {
        i = i + 1;
    } else {
        i = 1;
    }
    sliderContent.innerHTML = "<img src="+image[i-1]+".jpg>";
}

function prewImage(){
    if(i<image.length+1 && i>1) {
        i= i-1;
    } else {
        i = image.length;
    }
    sliderContent.innerHTML = "<img src="+image[i-1]+".jpg>";
}
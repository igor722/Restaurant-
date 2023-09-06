var sliderContent = document.getElementById('box');
var image = ['image001', 'image002', 'image003', 'image004', 'image005', 'image006', 'image007', 'image008', 
            'image009', 'image010', 'image011', 'image012', 'image013', 'image014', 'image015',];

var i = image.length;

function nextImage(){
    if (i<image.length) {
        i = i + 1;
    } else {
        i = 1;
    }
    sliderContent.innerHTML = "<img class=slide-img src=" +image[i-1]+ ".jpg>";
}

function prewImage(){
    if(i<image.length+1 && i>1) {
        i= i-1;
    } else {
        i = image.length;
    }
    sliderContent.innerHTML = "<img class=slide-img src="+image[i-1]+".jpg>";
}


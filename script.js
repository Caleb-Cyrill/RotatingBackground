var images = ['assets/background1.jpg', 'assets/background2.jpg', 'assets/background3.jpg'];
var i = 1;

function rotate() {
    document.body.style.background = 'url(' + images[i] + ') no-repeat';
    if (i+1 == images.length) {
        i = 0;
    }
    i++;
}
setInterval(rotate, 3000);
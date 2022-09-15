
var video = document.querySelector('video');

window.addEventListener('scroll', function () {
    video.currentTime = window.pageYOffset / 100;
});

window.addEventListener('scroll', function () {
    if (!video.paused) {
    video.play();
}
    else video.pause();
});

    

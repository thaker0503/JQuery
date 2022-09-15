
// set page height to video duration
var video = document.querySelector('video');
video.addEventListener('loadedmetadata', function () {
    document.body.style.height = video.duration * 100 + 'px';
});
// set video time to page scroll
window.addEventListener('scroll', function () {
    video.currentTime = window.pageYOffset / 100;
});
// breakdown of the above code
// 1. get the video element
// 2. add an event listener to the video element
// 3. when the video metadata is loaded, set the page height to the video duration
// 4. add an event listener to the window
// 5. when the window is scrolled, set the video time to the page scroll


    

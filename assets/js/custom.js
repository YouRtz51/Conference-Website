// Controlling speed of Banner video
let v = document.querySelector('.video-area video');
v.playbackRate = 0.85;

// Scroll Behaviour
window.scroll({
    behavior: 'smooth'
});

var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

function vidFade() {
    vid.classList.add("stopfade");
}

vid.addEventListener('ended', function() {
    // only functional if "loop" is removed 
    vid.pause();
    // to capture IE10
    vidFade();
});
pauseButton.addEventListener("click", function() {
    vid.classList.toggle("stopfade");
    if (vid.paused) {
        vid.play();
        pauseButton.innerHTML = "<i class='lni-pause'></i>";
    } else {
        vid.pause();
        pauseButton.innerHTML = "<i class='lni-play'></i>";
    }
})

// preloader
let loader = document.querySelector('#preloader');
window.addEventListener('load', function() {
    loader.style.display = "none";
});
document.addEventListener("DOMContentLoaded", function() {
    var counter = document.getElementById("counter");
    var percent = 0;
    var interval = setInterval(function() {
        percent++;
        counter.textContent = percent + "%";
        if (percent >= 100) {
            clearInterval(interval);
            // Once loading is complete, hide the loader
            document.getElementById("loader").style.display = "none";
        }
    }, 20); // Adjust the interval as needed

    var video = document.getElementById("bg-video");

    video.addEventListener("canplaythrough", function() {
        // Once the video can play through without buffering, show it
        video.style.display = "block";
    });
});

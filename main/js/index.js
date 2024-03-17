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

    video.addEventListener("progress", function() {
        // Calculate video loading progress
        var progress = 0;
        if (video.duration > 0) {
            for (var i = 0; i < video.buffered.length; i++) {
                progress += video.buffered.end(i);
            }
            progress = Math.floor((progress / video.duration) * 100);
        }

        // Update the loader progress to sync with video loading
        counter.textContent = progress + "%";
        if (progress >= 100) {
            // Once the video is fully loaded, hide the loader
            document.getElementById("loader").style.display = "none";
            // Show the video
            video.style.display = "block";
        }
    });
});

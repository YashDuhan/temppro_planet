//Preloader
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
});

/*Cursor-effects*/
// Initialize custom cursor
 let cursor;

 document.addEventListener("DOMContentLoaded", function() {
     // Initialize cursor and additional effects
     cursor = new cursoreffects.rainbowCursor({
         colors: ["#DBF2BD"],
         // Initial default color
         length: 14,
         size: 18,
     });

     // Adding custom cursor using jQuery
     const circleCursor = $("<div class='circle-cursor'></div>").appendTo("body");

     $(document).on("mousemove", function(e) {
         circleCursor.css({
             left: e.clientX + "px",
             top: e.clientY + "px"
         });
     });

     circleCursor.addClass("visible");
 });
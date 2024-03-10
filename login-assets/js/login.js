/*PreLoader*/ 
var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
    this.setTimeout(function()
    {
        loader.style.display = "none";
    },1000); //Add a 1000 milliseconds(1 Sec) delay
})
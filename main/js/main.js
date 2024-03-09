/*PreLoader*/ 
var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
    this.setTimeout(function()
    {
        loader.style.display = "none";
    },2000); //Add a 2000 milliseconds(2 Sec) delay
})
/*PreLoader*/ 
var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
    this.setTimeout(function()
    {
        loader.style.display = "none";
    },1000); //Add a 1000 milliseconds(1 Sec) delay
})

/*Particle JS*/ 
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 6,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#1b1e34"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": "#000"
        },
        "polygon": {
          "nb_sides": 6
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 160,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 10,
          "size_min": 40,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 200,
        "color": "#ffffff",
        "opacity": 1,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 8,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  


// TypeWriter
const txtElement = document.getElementById("typewriter");
const typed = ["ood to see you again"];
let index = 0;
let typer = 0;
let currentTyped = [];
let isDeleting = false;
let isEnd = false;
function loop() {
  isEnd = false;
  txtElement.innerHTML = currentTyped.join("");

  if (index < typed.length) {
    if (!isDeleting && typer <= typed[index].length) {
      currentTyped.push(typed[index][typer]);
      typer++;
      txtElement.innerHTML = currentTyped.join("");
    }

    if (isDeleting && typer <= typed[index].length) {
      currentTyped.pop(typed[index][typer]);
      typer--;
      txtElement.innerHTML = currentTyped.join("");
    }
    if (typer == typed[index].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && typer === 0) {
      currentTyped = [];
      isDeleting = false;
      index++;
      if (index == typed.length) {
        index = 0;
      }
    }
  }
  const typeSpeed = Math.random() * (100 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200) + 100;
  const time = isEnd ? 1000 : isDeleting ? typeSpeed : normalSpeed;
  setTimeout(loop, time);
}

loop();
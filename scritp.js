function openDrawerMenu() {
  var x = document.getElementById("mainNavBar");
  if (x.className === "navBar") {
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}

let earth = document.querySelector(".earth");
let earth2 = document.querySelector(".earth2");
let etoilef = document.querySelector(".etoile_f");
let etoilef2 = document.querySelector(".etoile_f2");
let etoilef3 = document.querySelector(".etoile_f3");
let t = document.querySelector(".t");
let fusee = document.querySelector(".fusee");

let stopScrollAt = 400; // Variable déclarée globalement

// window.addEventListener("resize", updateScrollLimits);
// window.addEventListener("load", updateScrollLimits);

// function updateScrollLimits() {
//   // Mettez à jour ici la valeur de stopScrollAt basée sur la hauteur de l'écran
//   stopScrollAt = window.innerHeight * 0.8; // Par exemple, 80% de la hauteur de l'écran
//   console.log("stopScrollAt updated to:", stopScrollAt);
// }

let arrow = document.querySelector(".scroll-down-link");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    arrow.classList.add("none");
  } else {
    arrow.classList.remove("none");
  }
});

let astro = document.querySelector(".astro");
window.addEventListener("scroll", () => {
  let value = 1 - window.scrollY / 400;
  if (value > 0 && value < 1) {
    astro.style.opacity = value;
  }
});

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  if (value <= stopScrollAt) {
    earth.style.right = value * 3.4 + "px";
    earth.style.marginTop = value * 1.3 + "px";
    earth2.style.right = value * -0.5 + "px";
    etoilef.style.marginLeft = value * 0.5 + "px";
    etoilef2.style.left = value * -1.5 + "px";
    etoilef3.style.left = value * -0.6 + "px";
  }
  t.style.marginTop = value * -0.7 + "px";

  if (value > 400) {
    fusee.style.marginTop = value * 0.7 + "px";
    fusee.style.right = value * 0.7 + "px";
  }

  // if (value >= stopScrollAt && value <= stopScrollAt + 400) {
  //   earth.classList.add("fix");
  // }

  // if (value > stopScrollAt + 400) {
  //   earth.classList.remove("fix");
  // }
});

document.addEventListener("DOMContentLoaded", function () {
  // Placez votre code JavaScript ici, y compris le code qui manipule les éléments du DOM
  let elements = document.querySelectorAll(".element-to-move");
  let sensitivity = 100;

  window.addEventListener("mousemove", (e) => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let moveX = (mouseX - window.innerWidth / 2) / sensitivity;
    let moveY = (mouseY - window.innerHeight / 2) / sensitivity;

    elements.forEach((element) => {
      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  });
});

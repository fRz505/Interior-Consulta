// Agregue una clase activa para resaltar la página actual en la navegación derecha
var rightNavItems = document.getElementsByClassName("right-nav-item");

for (var i = 0; i < rightNavItems.length; i++) {
  rightNavItems[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Agregue una clase de resaltado para resaltar la página actual en la navegación superpuesta
var overlayNavItems = document.getElementsByClassName("overlay-nav-item");

for (var i = 0; i < overlayNavItems.length; i++) {
  overlayNavItems[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("highlight");
    current[0].className = current[0].className.replace(" highlight", "");
    this.className += " highlight";
  });
}

// Open overlay nav
var rightNavIcon = document.getElementsByClassName("right-nav-icon");
var overlayNav = document.getElementsByClassName("overlay-nav-container");

rightNavIcon[0].addEventListener("click", function () {
  overlayNav[0].style.width = "100%";
});

// Close overlay nav
var overlayCloseBtn = document.getElementsByClassName("overlay-close-btn");

overlayCloseBtn[0].addEventListener("click", function () {
  overlayNav[0].style.width = "0%";
});

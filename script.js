//Her har vi nogle constanter til brug senere, istedet for at vi skriver en hel DOM.
const menuBtn = document.getElementById("menuBtn");
const hiddenMenu = document.querySelector(".menuOverlay");

//Vi laver en funktion med en boolean (if/else)
menuBtn.addEventListener("click", function () {
  if (hiddenMenu.classList.contains("show")) {
    hiddenMenu.classList.remove("show");

    menuBtn.innerHTML = "☰";
    console.log("close");
  } else {
    hiddenMenu.classList.add("show");
    menuBtn.innerHTML = "x";
    console.log("open");
  }
});

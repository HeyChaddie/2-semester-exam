//Her har vi nogle constanter til brug senere, istedet for at vi skriver en hel DOM.
const menuBtn = document.getElementById("menuBtn");
const hiddenMenu = document.querySelector(".menuOverlay");

//Vi laver en funktion med en boolean (if/else)
menuBtn.addEventListener("click", function () {
  //funktionen starte med at hvis hiddenMenu har class "show", så vil den fjerne "show".
  if (hiddenMenu.classList.contains("show")) {
    hiddenMenu.classList.remove("show");

    //Derefter vil den ændre teksten til "☰".
    menuBtn.innerHTML = "☰";
    //Virker det, vil den skrive "close" i konsolen.
    console.log("close");
  } else {
    //Ellers vil den tilføje class "show", hvis den ikke allerede er der.
    hiddenMenu.classList.add("show");
    //Der efter vil den ændre knappen til "X".
    menuBtn.innerHTML = "x";
    //Virker det, vil den skrive "open" i konsolen.
    console.log("open");
  }
});

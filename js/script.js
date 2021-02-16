// LISTENER DU JOUEUR
// Z, D and C ARE DEV-ONLY
// M,A,R,C,O ARE FOR GAMER

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    moveLeft();
  }
  if (event.key === "ArrowRight") {
    moveRight();
  }
  if (event.key === "ArrowUp") {
    moveUp();
  }
  if (event.key === "ArrowDown") {
    moveDown();
  }
  if (event.key === "z") {
    randomizeR();
  }
  if (event.key === "d") {
    distance();
  }
  if (event.key === "c") {
    coord();
  }
  if (
    event.key === "M" ||
    event.key === "m" ||
    event.key === "A" ||
    event.key === "a" ||
    event.key === "R" ||
    event.key === "r" ||
    event.key === "C" ||
    event.key === "c" ||
    event.key === "O" ||
    event.key === "o"
  ) {
    marco();
  }
});

// POSITION INITIALE DU JOUEUR et DE LA CIBLE

var JoueurLeft = 310;
var JoueurTop = 230;
var randomLeft = 0;
var randomTop = 0;

// POSITION ALEATOIRE DE LA CIBLE

function randomizeR() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  randomLeft = getRandomInt(62) * 10;
  randomTop = getRandomInt(46) * 10;
  target.style.left = randomLeft + "px";
  target.style.top = randomTop + "px";
  console.log("randomizeD !");
}
randomizeR();

// ANIMATION DEPLACEMENT PAS COMME ÇA QUE ÇA MAMRCHE ?

function animation() {}

// DEPLACEMENTS DU JOUEUR

function moveLeft() {
  var left = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  left -= 10;
  if (left >= 0) {
    character.style.left = left + "px";
    JoueurLeft = JoueurLeft - 10;
    didYouWin();
  }
}

function moveRight() {
  var left = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  left += 10;
  if (left < 630) {
    character.style.left = left + "px";
    JoueurLeft = JoueurLeft + 10;
    didYouWin();
  }
}

function moveUp() {
  var top = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  top -= 10;
  if (top >= 0) {
    character.style.top = top + "px";
    JoueurTop = JoueurTop - 10;
    didYouWin();
  }
}

function moveDown() {
  var top = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  top += 10;
  if (top <= 460) {
    character.style.top = top + "px";
    JoueurTop = JoueurTop + 10;
    didYouWin();
  }
}

// GAGNÉ !

function didYouWin() {
  if (JoueurTop === randomTop && JoueurLeft === randomLeft) {
    changeColor("#E70735");
    alert("YOU WON!");
  }
}

// AFFICHER COORDONNEES JOUEUR

function coord() {
  console.log("CCCCCCCCCC");
  console.log("Position joueur :");
  console.log(JoueurLeft, JoueurTop);
}

// CALCUL DISTANCE ENTRE LES 2

function distance() {
  console.log("DDDDDDDD");
  console.log("position joueur (Left, Top) : ");
  console.log(JoueurLeft, JoueurTop);
  console.log("position cible : (Left, Top)");
  console.log(randomLeft, randomTop);
  console.log("différence : ");
  var distLeft = 0;
  var distTop = 0;
  distTop = JoueurTop - randomTop;
  distLeft = JoueurLeft - randomLeft;
  console.log(distLeft, distTop);
  console.log("moyenne positive : ");
  if (distLeft < 0) {
    distLeft = distLeft * -1;
  }
  if (distTop < 0) {
    distTop = distTop * -1;
  }
  var moyenne = (distLeft + distTop) / 2;
  console.log(moyenne);
}

// TEST CHANGER COULEUR FOND

function changeColor(color) {
  document.getElementById("terrain").style.backgroundColor = color;
}

// "MARCO !!"

function marco() {
  var distLeft = 0;
  var distTop = 0;
  distTop = JoueurTop - randomTop;
  distLeft = JoueurLeft - randomLeft;
  if (distLeft < 0) {
    distLeft = distLeft * -1;
  }
  if (distTop < 0) {
    distTop = distTop * -1;
  }
  var moyenne = (distLeft + distTop) / 2;
  if (moyenne > 250) {
    console.log("TT FROID");
    changeColor("F6E5DE");
  } else if (moyenne > 225) {
    console.log("T FROID");
    changeColor("#fbe3d2");
  } else if (moyenne > 200) {
    console.log("FROID");
    changeColor("#fbd4bb");
  } else if (moyenne > 175) {
    console.log("FROID");
    changeColor("#fcc4a6");
  } else if (moyenne > 150) {
    console.log("FROID");
    changeColor("#fcb393");
  } else if (moyenne > 125) {
    console.log("FROID/TIEDE");
    changeColor("#fcb393");
  } else if (moyenne > 100) {
    console.log("TIEDE");
    changeColor("#faa383");
  } else if (moyenne > 75) {
    console.log("TIEDE/CHAUD");
    changeColor("#f99374");
  } else if (moyenne > 50) {
    console.log("T CHAUD");
    changeColor("#f78168");
  } else if (moyenne > 25) {
    console.log("TT CHAUD");
    changeColor("#f56e5d");
  } else if (moyenne > 15) {
    console.log("TTT CHAUD");
    changeColor("#f25954");
  } else if (moyenne > 10) {
    console.log("TTTT CHAUD");
    changeColor("#ef404c");
  } else if (moyenne <= 10) {
    console.log("TTTTT CHAUD");
    changeColor("#E70735");
  }
}



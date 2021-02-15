// LISTENER DU JOUEUR
// R, D and C ARE DEV-ONLY
// M IS FOR GAME

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
  if (event.key === "r") {
    randomizeR();
  }
  if (event.key === "d") {
    distance();
  }
  if (event.key === "c") {
    coord();
  }
  if (event.key === "m" || event.key === "M") {
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
  randomLeft = getRandomInt(63) * 10;
  randomTop = getRandomInt(47) * 10;
  target.style.left = randomLeft + "px";
  target.style.top = randomTop + "px";
  console.log("randomizeD !");
}


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
  if (left < 640) {
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
  if (top <= 470) {
    character.style.top = top + "px";
    JoueurTop = JoueurTop + 10;
    didYouWin();
  }
}

// GAGNÉ !

function didYouWin() {
  if (JoueurTop === randomTop && JoueurLeft=== randomLeft) {
    console.log("YOU WON!");
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
  if(distLeft < 0) {
    distLeft = distLeft *-1;
  }
  if(distTop < 0) {
    distTop = distTop *-1;
  }
  var moyenne = (distLeft + distTop) / 2;
  console.log(moyenne);
}

function marco() {
  var distLeft = 0;
  var distTop = 0;
  distTop = JoueurTop - randomTop;
  distLeft = JoueurLeft - randomLeft;
  if(distLeft < 0) {
    distLeft = distLeft *-1;
  }
  if(distTop < 0) {
    distTop = distTop *-1;
  }
  var moyenne = (distLeft + distTop) / 2;
  if (moyenne > 200) {
    console.log("FROID");
  } else if (moyenne > 150) {
    console.log("TIEDE");
  } else if (moyenne > 100) {
    console.log("CHAUD");
  } else if (moyenne > 50) {
    console.log("T CHAUD");
  } else if (moyenne > 25) {
    console.log("TT CHAUD");
  } else if (moyenne > 15) {
    console.log("TTT CHAUD");
  } else if (moyenne > 10) {
    console.log("TTTT CHAUD");
  } 
  console.log(moyenne);
}


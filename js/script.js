// LISTENER DU JOUEUR

// Z (re-init target), D (log distance), and T (testing) ARE DEV-ONLY
// MmAaRrCcOo IS FOR GAME

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
  if (event.key === "t") {
    test();
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

document.getElementById("reboot").addEventListener("click", function() {
  randomizeR();
  var x = document.getElementById("title");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});

// WEBTOOL : TESTS

 function test() {

  console.log("test");
  var x = document.getElementById("title");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  

  // element.classList.toggle("youwon");
  // let element = document.getElementById("game");
  // element.classList.toggle("youwon");
  // let flash = document.getElementById("terrain");
  // flash.classList.add("animated");
 }

// POSITION INITIALE DU JOUEUR et DE LA CIBLE

var whatIsLeft = parseInt(
  window.getComputedStyle(character).getPropertyValue("left")
);
var whatIsTop = parseInt(
  window.getComputedStyle(character).getPropertyValue("top")
);
var JoueurLeft = whatIsLeft;
var JoueurTop = whatIsTop;
var randomLeft = 0;
var randomTop = 0;
var directionTarget = 0;


// SON PLONGEON

function play(){
  var audio = document.getElementById("audio");
}

// POSITION INITIALE ALEATOIRE DE LA CIBLE

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomizeR() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  randomLeft = getRandomInt(62) * 10;
  randomTop = getRandomInt(46) * 10;
  target.style.left = randomLeft + "px";
  target.style.top = randomTop + "px";
  console.log("randomizeD !");
 play();
}
randomizeR();


// DEPLACEMENT REGULIER DE LA CIBLE

setInterval(function(){ 
  directionTarget = getRandomInt(4);

  if (directionTarget === 0) {
    randomTop = randomTop + 10;
    if (randomTop < 470 && randomTop !== JoueurTop) {
    target.style.top = randomTop + "px";
    console.log("Target has gone down");
    } else randomTop = randomTop - 10;

  } else if (directionTarget === 1) {
    randomLeft = randomLeft + 10;
    if (randomLeft < 630 && randomLeft !== JoueurLeft) {
      target.style.left = randomLeft + "px";
      console.log("Target has gone right");
    } else randomLeft = randomLeft - 10;

  } else if (directionTarget === 2) {
    randomTop = randomTop - 10;
    if (randomTop > 0 && randomTop !== JoueurTop) {
      target.style.top = randomTop + "px";
      console.log("Target has gone up");
      } else randomTop = randomTop + 10;

   } else if (directionTarget === 3) {
    randomLeft = randomLeft - 10;
    if (randomLeft > 0 && randomLeft !== JoueurLeft) {
      target.style.left = randomLeft + "px";
      console.log("Target has gone left");
    } else randomLeft = randomLeft + 10;
    }

}, 5000);



// DEPLACEMENTS DU JOUEUR

function moveLeft() {
  if (JoueurLeft > 0) {
    JoueurLeft = JoueurLeft - 10;
    character.style.left = JoueurLeft + "px";
    console.log(character.style.left);
    didYouWin();
  }
}

function moveRight() {
  if (JoueurLeft < 620) {
    JoueurLeft = JoueurLeft + 10;
    character.style.left = JoueurLeft + "px";
    console.log(character.style.left);
    didYouWin();
  }
}

function moveUp() {
  if (JoueurTop > 0) {
    JoueurTop = JoueurTop - 10;
    character.style.top = JoueurTop + "px";
    console.log(character.style.top);
    didYouWin();
  }
}

function moveDown() {
  if (JoueurTop < 460) {
    JoueurTop = JoueurTop + 10;
    character.style.top = JoueurTop + "px";
    console.log(character.style.top);
    didYouWin();
  }
}


// GAGNÉ !

function didYouWin() {
  if (JoueurTop === randomTop && JoueurLeft === randomLeft) {
    changeColor("#be0105"); console.log("YOU WON !");
    let element = document.getElementById("game");
    element.classList.toggle("youwon");
    document.removeEventListener("keydown", (event));
    youwon.style.display = "block";
 
  }
}




// DEVTOOL -- AFFICHAGE DISTANCE ENTRE LES 2

function distance() {
  console.log("DDDDDDDD");
  console.log("Character position (left, top) :");
  console.log(JoueurLeft, JoueurTop);
  console.log("Target position : (left, top)");
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


// CHANGER COULEUR FOND

function changeColor(color) {
  document.getElementById("terrain").style.backgroundColor = color;
}


// « MARCO !! »

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
  if (moyenne >= 300) {
    console.log("TTTTTT FROID");
    changeColor("#57B9F4");
  } else if (moyenne >= 275) {
    console.log("TTTTT FROID");
    changeColor("#bfe5ff");
  } else if (moyenne >= 250) {
    console.log("TTTT FROID");
    changeColor("#ffffff");
  } else if (moyenne >= 225) {
    console.log("TTT FROID");
    changeColor("#ffede8");
  } else if (moyenne >= 200) {
    console.log("TT FROID");
    changeColor("#fddbd2");
  } else if (moyenne >= 175) {
    console.log("T FROID");
    changeColor("#fbc9bc");
  } else if (moyenne >= 150) {
    console.log("FROID");
    changeColor("#f8b7a7");
  } else if (moyenne >= 125) {
    console.log("FROID/TIEDE");
    changeColor("#f3a592");
  } else if (moyenne >= 100) {
    console.log("TIEDE");
    changeColor("#ee937d");
  } else if (moyenne >= 75) {
    console.log("TIEDE/CHAUD");
    changeColor("#e88169");
  } else if (moyenne >= 50) {
    console.log("T CHAUD");
    changeColor("#e16e55");
  } else if (moyenne >= 25) {
    console.log("TT CHAUD");
    changeColor("#d95b42");
  } else if (moyenne >= 15) {
    console.log("TTT CHAUD");
    changeColor("#d1462f");
  } else if (moyenne >= 10) {
    console.log("TTTT CHAUD");
    changeColor("#c82e1b");
  } else if (moyenne < 10) {
    console.log("TTTTT CHAUD");
    changeColor("#be0105");
  }
}

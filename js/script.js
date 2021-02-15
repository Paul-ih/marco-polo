
// LISTENER DU JOUEUR

document.addEventListener("keydown", event => {
    if(event.key==="ArrowLeft") {moveLeft();}
    if(event.key==="ArrowRight"){moveRight();}
    if(event.key==="ArrowUp"){moveUp();}
    if(event.key==="ArrowDown"){moveDown();}
    if(event.key==="r"){randomizeR();}
    if(event.key==="d"){distance();}
    if(event.key==="c"){coord();}
});



// POSITION INITIALE DU JOUEUR et DE LA CIBLE


let JoueurTop = 230;
let JoueurLeft = 310;


// DEPLACEMENTS DU JOUEUR

function moveLeft(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -= 10;
    if(left>=0) {
    character.style.left = left + "px";
    JoueurLeft = JoueurLeft - 10;
    youwon();

    

    }
}

function moveRight() {
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left += 10;
    if(left<640){
    character.style.left = left + "px";
    JoueurLeft = JoueurLeft + 10;
    youwon();
    } 
}

function moveUp(){
    var top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    top -= 10;
    if(top>=0) {
    character.style.top = top + "px";
    JoueurTop = JoueurTop - 10;
    youwon();
    }
}

function moveDown(){
    var top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    top += 10;
    if(top<=470) {
    character.style.top = top + "px";
    JoueurTop = JoueurTop + 10;
    youwon();
    }
}

// GAGNÉ (VERSION TEST) !

function youwon() {
    
if (JoueurTop == 10 && JoueurLeft == 10) {
    console.log("you won!");
}

}


// AFFICHER COORDONNEES JOUEUR

function coord() {
    console.log("CCCCCCCCCC");
    console.log("Position joueur :");
    console.log(JoueurLeft, JoueurTop);

}

// POSITION ALEATOIRE DE LA CIBLE

function randomizeR(){
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      var randomLeft = getRandomInt(63) * 10;
      var randomTop = getRandomInt(47) * 10;
      target.style.left = randomLeft + "px";
      target.style.top = randomTop + "px";
      console.log("RRRRRRRRRR");
      console.log("randomizeR :");
      console.log(randomLeft, randomTop);
      
}

// CALCUL DISTANCE ENTRE LES 2

function distance() {
    console.log("DDDDDDDD");
    console.log("position joueur : ");
    console.log(JoueurLeft, JoueurTop);
    console.log("position cible : ");
    console.log(randomLeft, randomTop);
    console.log("différence : ");
    var distLeft = 0;
    var distTop = 0;
    distTop = JoueurTop - randomTop;
    distLeft = JoueurLeft - randomLeft;
    console.log(distLeft, distTop);


}



// TEST GESTION DE COLLISION


// setInterval(function() {
//     var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
//     var targetLeft = parseInt(window.getComputedStyle(target).getPropertyValue("left"));
//     var targetTop = parseInt(window.getComputedStyle(target).getPropertyValue("top"));
//     if(characterLeft == targetLeft && targetTop<500 && targetTop>300) {
//         console.log("Game Over");
//         target.style.animation = "none";
//     }
// }, 100);
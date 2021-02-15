
// LISTENER DU JOUEUR

document.addEventListener("keydown", event => {
    if(event.key==="ArrowLeft" || event.key==="q" || event.key==="Q") {moveLeft();}
    if(event.key==="ArrowRight" || event.key==="m" || event.key==="M"){moveRight();}
    if(event.key==="ArrowUp" || event.key==="o" || event.key==="O"){moveUp();}
    if(event.key==="ArrowDown" || event.key==="w" || event.key==="W"){moveDown();}
});

// DEPLACEMENTS DU HEROS

let JoueurTop = 190;
let JoueurLeft = 290;
console.log(JoueurTop, JoueurLeft);

function moveLeft(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -= 10;
    if(left>=0) {
    character.style.left = left + "px";
    JoueurLeft = JoueurLeft - 10;
    console.log(JoueurTop, JoueurLeft);
    }
}

function moveRight() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left += 10;
    if(left<600){
    character.style.left = left + "px";
    JoueurLeft = JoueurLeft + 10;
    console.log(JoueurTop, JoueurLeft);
    } 
}

function moveUp(){
    let top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    top -= 10;
    if(top>=0) {
    character.style.top = top + "px";
    JoueurTop = JoueurTop - 10;
    console.log(JoueurTop, JoueurLeft);
    }
}

function moveDown(){
    let top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    top += 10;
    if(top<=390) {
    character.style.top = top + "px";
    JoueurTop = JoueurTop + 10;
    console.log(JoueurTop, JoueurLeft);
    }
}

// POSITION DU FANTOME

var target = document.getElementById("target");
// target.top = (getRandomInt(47) * 10) px;
console.log(target);



// GESTION DE COLLISION

setInterval(function() {
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var targetLeft = parseInt(window.getComputedStyle(target).getPropertyValue("left"));
    var targetTop = parseInt(window.getComputedStyle(target).getPropertyValue("top"));
    if(characterLeft == targetLeft && targetTop<500 && targetTop>300) {
        console.log("Game Over");
        target.style.animation = "none";
    }
}, 100);
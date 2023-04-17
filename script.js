// Variables
let main = document.querySelector('main');
let section1 = main.children[0];
let section2 = main.children[1];
let section3 = main.children[2];
let list = section3.children[1];

const _initTime = Date.now()

const getElapsedTime = () => {
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

// Functions
const clickOnSquare = (e) => {
    // console.log(e.target.classList[1]);
    // console.log(getElapsedTime());
    let clone = e.target.cloneNode(false);
    clone.className = "displayedsquare " + e.target.classList[1];
    section1.appendChild(clone);
    let newLog = document.createElement('li');
    newLog.textContent =  '['+getElapsedTime()+'] Created a new ' + e.target.classList[1] + ' square';
    list.appendChild(newLog);
}
const actionSquares = document.querySelectorAll('.actionsquare');
for (let actionSquare of actionSquares) {
    actionSquare.addEventListener('click', clickOnSquare);
}
function displayColor(square){
    let color = square.classList[1];
    alert(color);
}
function getHex(){
    return '#' + Math.random().toString(16).slice(2, 8);
}
function setBackground(){
    var bgColor = getHex();
    document.body.style.background=bgColor;
    let newLog = document.createElement('li'); 
    newLog.textContent = "Changement de la couleur de fond : " + bgColor;
    list.appendChild(newLog);
}

// Program
section1.addEventListener("click", (event) => {
    if (event.target.classList.contains("displayedsquare")){
        displayColor(event.target);
    }
});
document.body.onkeyup=function(a){
    if(a.keyCode == 32){
        setBackground();
    }
}



// Variables
// let main = document.querySelector('main');
// let section1 = main.children[0];
// let section2 = main.children[1];
// let section3 = main.children[2];
// let divSection2 = section2.children[0];
// let list = section3.children[1];
// let greenSquare = divSection2.children[0];
// let violetSquare = divSection2.children[1];
// let orangeSquare = divSection2.children[2];
// /* TEST querySelector
// let greenSquare = document.querySelector('.actionsquare, green');
// let violetSquare = document.querySelector('.actionsquare, violet');
// let orangeSquare = document.querySelector('.actionsquare, orange');
// squares = document.querySelectorAll('.actionsquare');
// let greenSquare1 = document.querySelector('.actionsquare, green');
// let greenSquare2 = document.querySelector('.green');
// let greenSquare3 = document.querySelector('.actionsquare');
// */

// // Functions
// function displayGreen(){
//     return alert('Green');
// }
// function displayViolet(){
//     return alert('Violet');
// }
// function displayOrange(){
//     return alert('Orange');
// }
// function newLogG(){
//     let newLog = document.createElement('li');
//     newLog.textContent =  '['+getElapsedTime()+'] Created a new green square';
//     list.appendChild(newLog);
// }
// function newLogV(){
//     let newLog = document.createElement('li');
//     newLog.textContent =  '['+getElapsedTime()+'] Created a new violet square';
//     list.appendChild(newLog);
// }
// function newLogO(){
//     let newLog = document.createElement('li');
//     newLog.textContent = '['+getElapsedTime()+'] Created a new orange square';
//     list.appendChild(newLog);
// }
// function cloneGreen(){
//     let cloneG = greenSquare.cloneNode(false);
//     cloneG.className = "displayedsquare green";
//     section1.appendChild(cloneG);
//     cloneG.addEventListener('click', displayGreen);
//     newLogG();
// }
// function cloneViolet(){
//     let cloneV = violetSquare.cloneNode(false);
//     cloneV.className = "displayedsquare violet";
//     section1.appendChild(cloneV);
//     cloneV.addEventListener('click', displayViolet);
//     newLogV();
// }
// function cloneOrange(){
//     let cloneO = orangeSquare.cloneNode(false);
//     cloneO.className = "displayedsquare orange";
//     section1.appendChild(cloneO);
//     cloneO.addEventListener('click', displayOrange);
//     newLogO();
// } 
// /* TEST interaction
// function displayAnAlert(){
//     return alert('The square was pressed!')
// }
// greenSquare.addEventListener('click', displayAnAlert);
// */

// // Program
// greenSquare.addEventListener('click', cloneGreen);
// violetSquare.addEventListener('click', cloneViolet);
// orangeSquare.addEventListener('click', cloneOrange);

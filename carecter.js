const diceR = document.getElementById("diceNum")

function Rollf(){
    let d4 = Math.floor(Math.random()*4)+1
    diceR.innerHTML = d4;
}
function RollS(){
   let d6 = Math.floor(Math.random()*6)+1
   diceR.innerHTML = d6;
}
function RollE(){
   let d8 = Math.floor(Math.random()*8)+1
   diceR.innerHTML = d8;
}
function RollTe(){
   let d10 = Math.floor(Math.random()*10)+1
   diceR.innerHTML = d10;
}
function RollTw(){
   let d12 = Math.floor(Math.random()*12)+1
   diceR.innerHTML = d12;
}
function RollTwenty(){
    let d20 = Math.floor(Math.random()*20)+1
    diceR.innerHTML = d20;
}
function RollH(){
    let d100 = Math.floor(Math.random()*100)+1;
    diceR.innerHTML = d100;
}
// Gjort för att vara äkligt 
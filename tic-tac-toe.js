let boxes = document.querySelectorAll(".boxes");
let winners = document.querySelector("h1");
let resetBtn = document.querySelector(".button");
let statusbar = document.querySelector("h1");
let body= document.querySelector('body')



let turnO = true;


const winnerCondition = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


boxes.forEach((box) => {
   box.addEventListener("click", () => {
    // console.log("click");

    // turn change 
    if ( turnO) {
      box.innerText = "O";
      turnO = false;
     
    }
     else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true
    
    body.style.background=`#${Math.random().toString(16).slice(2,8)}`
    console.log(body);
    checkWin()
   
   })

});
//  check win condition 
function checkWin (){
  for(let pattern of  winnerCondition)
{
  let a =boxes[pattern[0]].innerText
  let b=boxes[pattern[1]].innerText
  let c =boxes[pattern[2]].innerText

  // console.log(a,b,c);
  if(a !=''&& b != '' && c !=''){
    if(a ===b && b===c){
// console.log('winner ');
showWinner(a)

  }
  }
}



}

// show winner 

const showWinner=(winner)=>{
winners.innerHTML= `congratulation winner is ${winner}`
disabled()
}
  // disabled box after winning
const disabled =()=>{
  for(let box of boxes){
    box.disabled=true
  }}

  // enabled box

const enabled =()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText='';
    body.style.background='black'

  }}

  // reset button 
const reset=()=>{
  turnO=true
  enabled()
  winners.innerHTML=''
}

resetBtn.addEventListener('click',reset)
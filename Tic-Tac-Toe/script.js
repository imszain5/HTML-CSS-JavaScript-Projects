let boxes = document.querySelectorAll(".btn");
let resetButton = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; 
let moves = 0;

const winPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((btn) =>{
    btn.addEventListener("click", ()=>{
         console.log("Im clicked ");
         if(turn0){
            btn.innerHTML = "O";
            btn.style.color = "green"
            turn0 = false;
         }else {
            btn.innerHTML = "X";
            btn.style.color = "blue";
            turn0 = true;
         }
         btn.disabled = true;

         checkWinner();
    });
});
const disableBoxes = ()=>{
    for(let box of boxes ){
        box.disabled = true;
    }       
};
const showWinner =(winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner =()=>{
    for(let patterns of winPatterns){
        let pos1Val = boxes[patterns[0]].innerHTML;
        let pos2Val = boxes[patterns[1]].innerHTML;
        let pos3Val = boxes[patterns[2]].innerHTML;
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                console.log("Winner", pos1Val);
                moves ++;
                showWinner(pos1Val);
            }
        }else if (moves == 9){
            msg.innerText = "Game Drawn";
            msg.classList.remove("hide");
        }

    }
};

const resetGame =()=>{
     turn0 = true;
     btn_count = 0;
     enableBoxes();
     msgContainer.classList.add("hide");
};
const enableBoxes = ()=>{
    for(let box of boxes ){
        box.disabled = false;
        box.innerHTML = "";
    }       
};

newGamebtn.addEventListener("click", resetGame);
resetButton.addEventListener("click",resetGame);

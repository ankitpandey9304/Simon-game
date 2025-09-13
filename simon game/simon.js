let gameseq =[];
let userseq = [];

let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

let startbtn = document.querySelector(".center_btn");
startbtn.addEventListener("click", function(){ // this is for start the game
    if (started == false){
        started=true;
        console.log("gsme is started");
        
        levelUp();
    }
});
// document.addEventListener("click",function(){
//     console.log(" key was pressed");
// });
function gameFlash(btn){
    btn.classList.add("Flash");
    setTimeout(function(){
        btn.classList.remove("Flash")
    },250);
};

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
};
function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    //random btn chhose
    let randIdx = Math.floor(Math.random() *3);
    let randcolor= btns[randIdx]
    let randbtn = document.querySelector(`.${randcolor}`);
    // console.log(randIdx);
    // console.log(randcolor);
    // console.log(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameFlash(randbtn);
};

function checkAns(idx){
    // console.log("curr level :", level);
    // let idx = level-1;

    if(userseq[idx]===gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp, 1000);
            
        }
    } else{
        h2.innerHTML = `Game Over!  Your score was <b>${level}</b>  <br> press any key to start.`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";
        },150);
        reset();
    }
}

function btnpress (){
    let btn = this;
    userflash(btn);
    usercolor =btn.getAttribute("id");
    // console.log(usercolor);
    userseq.push(usercolor);

    checkAns(userseq.length-1);
};

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnpress);
}

function reset(){
    started == false;
    gameseq =[];
    userseq =[];
    level = 0;
}
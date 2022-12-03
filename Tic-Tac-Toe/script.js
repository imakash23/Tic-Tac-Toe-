const boxs=document.querySelectorAll('.box');
const statustxt= document.querySelector('.status');
const btnRestart=document.querySelector('#restart');
let x= '<img class="img1" src="./img/Letter-X-PNG-Photo.png">';
let o='  <img class="img2" src="./img/letter-o-icon-png-20906.png">';

//wins

/*$("#restart").click(function(){
    Swal.fire(
        'New game started',
    )
});

*///

const wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let options =["","","","","","","","",""];
let currentPlayer=x;
let player="x"
let running=false;
init();
function init(){
   boxs.forEach(box=>box.addEventListener('click',boxClick));
  
   btnRestart.addEventListener('click',restartGame);
   statustxt.textContent=`${player} your trun`;
   running=true;
} 

function boxClick()
{
     const index=this.dataset.index;
     if(options[index]!="" || !running)
     {
        return;
     }
     
        updateBox(this,index);
        checkWinner();

     
   

}

function updateBox(box,index)
{
options[index]=player;
box.innerHTML=currentPlayer;
}

function changePlayer()
{
    player=(player=='x')?"o":"x";
    currentPlayer=(currentPlayer==x)?  o : x;
    statustxt.textContent=`${player} your trun`;

}

function checkWinner()
{
    let isWon=false;
    for(let i=0;i<wins.length;i++)
    {
        const condition=wins[i];
        const box1=options[condition[0]];
        const box2=options[condition[1]];
        const box3=options[condition[2]];

        if(box1=="" || box2=="" || box3=="")
        {
            continue;
        }
      
        if(box1==box2 && box2==box3)
        {
            isWon=true;
            boxs[condition[0]].classList.add('winss');
            boxs[condition[1]].classList.add('winss');
            boxs[condition[2]].classList.add('winss');
        }
    }
    if(isWon){
        statustxt.textContent=`${player} Won...`;
        running=false;
    }
    else if(!options.includes(""))
    {
      statustxt.textContent=`Game Draw....!`;
      running=false;
    }
    else
    {
        changePlayer();
    }
}

function restartGame()
{

options =["","","","","","","","",""];
 currentPlayer=x;
 player="x"
 running=true;
 statustxt.textContent=`${player} your trun`;

 boxs.forEach(box=>{
    box.innerHTML="";
    box.classList.remove('winss');
 })

}

player_X = "X";
player_O = "0";
let music=new Audio("winner.wav");
let turnmusic=new Audio("ting.mp3");
let drawmusic=new Audio("draw.mp3");
let turnCounter = 0;
let turn = player_X;
let clickitems = [];
let userinput = {
    c0: "",
    c1: "",
    c2: "",
    c3: "",
    c4: "",
    c5: "",
    c6: "",
    c7: "",
    c8: "",
};
const cellsitems = document.querySelectorAll(".grid-container .box");

function checkWinner() {

    if (turn === player_O) {
        document.getElementsByClassName('txt')[0].innerHTML = "winner player-X";
        document.getElementById("pic").style.width = "150px";
        music.play();
    }
    else {
        document.getElementsByClassName('txt')[0].innerHTML = "winner player-O";
        document.getElementById("pic").style.width = "150px";
        music.play();
    }

}
function winnerCondition() {
    console.log('inside winner condition')
    console.log(userinput)
    if (userinput.c0 === userinput.c1 && userinput.c1 === userinput.c2 && userinput.c2 !== "") {
        document.getElementById("c0").style.backgroundColor = "rgb(187, 240, 212)";
        document.getElementById("c1").style.backgroundColor = "rgb(187, 240, 212)";
        document.getElementById("c2").style.backgroundColor = "rgb(187, 240, 212)";
        document.getElementById("c3").style.pointerEvents = "none";
        document.getElementById("c4").style.pointerEvents = "none";
        document.getElementById("c5").style.pointerEvents = "none";
        document.getElementById("c6").style.pointerEvents = "none";
        document.getElementById("c7").style.pointerEvents = "none";
        document.getElementById("c8").style.pointerEvents = "none";
    
            
         setTimeout(checkWinner, 500);
    }
    else if (userinput.c3 === userinput.c4 && userinput.c4 === userinput.c5 && userinput.c5 !== "") {
        document.getElementById("c3").style.backgroundColor = "rgb(187, 240, 212)";
        document.getElementById("c4").style.backgroundColor = "rgb(187, 240, 212)";
        document.getElementById("c5").style.backgroundColor = "rgb(187, 240, 212)";
        document.getElementById("c0").style.pointerEvents = "none";
        document.getElementById("c1").style.pointerEvents = "none";
        document.getElementById("c2").style.pointerEvents = "none";
        document.getElementById("c6").style.pointerEvents = "none";
        document.getElementById("c7").style.pointerEvents = "none";
        document.getElementById("c8").style.pointerEvents = "none";



        setTimeout(checkWinner, 500);
    }
    else if (userinput.c6 === userinput.c7 && userinput.c7 === userinput.c8 && userinput.c8 !== "") {
        document.getElementById("c6").style.backgroundColor = "rgb(187, 240, 212)";
        document.getElementById("c7").style.backgroundColor = "rgb(187, 240, 212)";
        document.getElementById("c8").style.backgroundColor = "rgb(187, 240, 212)";
        document.getElementById("c0").style.pointerEvents = "none";
        document.getElementById("c1").style.pointerEvents = "none";
        document.getElementById("c2").style.pointerEvents = "none";
        document.getElementById("c5").style.pointerEvents = "none";
        document.getElementById("c3").style.pointerEvents = "none";
        document.getElementById("c4").style.pointerEvents = "none";




        setTimeout(checkWinner, 500);
    }
    else if (userinput.c0 === userinput.c3 && userinput.c3 === userinput.c6 && userinput.c6 !== "") {
        document.getElementById("c0").style.backgroundColor = "rgb(187, 240, 212)";
        document.getElementById("c3").style.backgroundColor = "rgb(187, 240, 212)";
        document.getElementById("c6").style.backgroundColor = "rgb(187, 240, 212)";
        document.getElementById("c8").style.pointerEvents = "none";
        document.getElementById("c1").style.pointerEvents = "none";
        document.getElementById("c2").style.pointerEvents = "none";
        document.getElementById("c5").style.pointerEvents = "none";
        document.getElementById("c7").style.pointerEvents = "none";
        document.getElementById("c4").style.pointerEvents = "none";



        setTimeout(checkWinner, 500);
    }
    else if (userinput.c1 === userinput.c4 && userinput.c4 === userinput.c7 && userinput.c7 !== "") {
        document.getElementById("c1").style.backgroundColor = "rgb(187, 240, 212)";
        document.getElementById("c4").style.backgroundColor = "rgb(187, 240, 212)";
        document.getElementById("c7").style.backgroundColor = "rgb(187, 240, 212)";
        document.getElementById("c0").style.pointerEvents = "none";
        document.getElementById("c8").style.pointerEvents = "none";
        document.getElementById("c2").style.pointerEvents = "none";
        document.getElementById("c5").style.pointerEvents = "none";
        document.getElementById("c3").style.pointerEvents = "none";
        document.getElementById("c6").style.pointerEvents = "none";



        setTimeout(checkWinner, 500);
    }
    else if (userinput.c2 === userinput.c5 && userinput.c5 === userinput.c8 && userinput.c8 !== "") {
        document.getElementById("c2").style.backgroundColor = "rgb(187, 240, 212)";
        document.getElementById("c5").style.backgroundColor = "rgb(187, 240, 212)";
        document.getElementById("c8").style.backgroundColor = "rgb(187, 240, 212)";
        document.getElementById("c0").style.pointerEvents = "none";
        document.getElementById("c1").style.pointerEvents = "none";
        document.getElementById("c7").style.pointerEvents = "none";
        document.getElementById("c6").style.pointerEvents = "none";
        document.getElementById("c3").style.pointerEvents = "none";
        document.getElementById("c4").style.pointerEvents = "none";




        setTimeout(checkWinner, 500);
    }
    else if (userinput.c0 === userinput.c4 && userinput.c4 === userinput.c8 && userinput.c8 !== "") {
        document.getElementById("c0").style.backgroundColor = "rgb(187, 240, 212)";
        document.getElementById("c4").style.backgroundColor = "rgb(187, 240, 212)";
        document.getElementById("c8").style.backgroundColor = "rgb(187, 240, 212)";
        document.getElementById("c6").style.pointerEvents = "none";
        document.getElementById("c1").style.pointerEvents = "none";
        document.getElementById("c2").style.pointerEvents = "none";
        document.getElementById("c5").style.pointerEvents = "none";
        document.getElementById("c3").style.pointerEvents = "none";
        document.getElementById("c7").style.pointerEvents = "none";



        setTimeout(checkWinner, 500);
    }
    else if (userinput.c2 === userinput.c4 && userinput.c4 === userinput.c6 && userinput.c6 !== "") {
        document.getElementById("c2").style.backgroundColor = "rgb(187, 240, 212)";
        document.getElementById("c4").style.backgroundColor = "rgb(187, 240, 212)";
        document.getElementById("c6").style.backgroundColor = "rgb(187, 240, 212)";
        document.getElementById("c0").style.pointerEvents = "none";
        document.getElementById("c1").style.pointerEvents = "none";
        document.getElementById("c7").style.pointerEvents = "none";
        document.getElementById("c5").style.pointerEvents = "none";
        document.getElementById("c3").style.pointerEvents = "none";
        document.getElementById("c8").style.pointerEvents = "none";



        setTimeout(checkWinner, 500);
    }
    else {
        if (turnCounter == 9) {
            document.getElementsByClassName('txt')[0].innerHTML = " Game Draw";
            document.getElementById("pic1").style.width = "150px";
            drawmusic.play();
        }

    }


}
cellsitems.forEach(Element => {
    Element.onclick = () => {
        turnCounter++;
        
        console.log(turnCounter);
        Element.innerHTML = turn;
        userinput[Element.id] = turn;
        Element.classList.add("disabled");
        if (turn === player_X) {
            document.getElementById("turn1").innerHTML="Turn for O";
            turnmusic.play();
            turn = player_O;
        
        }
        else {
            document.getElementById("turn1").innerHTML="Turn for X";
            turnmusic.play();
            turn = player_X;
        }
        if (turnCounter >= 5) {
            winnerCondition();

        }

    }
})
function refreshPage() {
    window.location.reload();
} 
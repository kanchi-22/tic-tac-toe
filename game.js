let arr=[0,0,0,0,0,0,0,0,0];
let boxes = document.getElementsByClassName('box');
let result = document.getElementById('result');
let ng = document.getElementById('ngbutton');
let line = document.getElementById('line');
let turn = 'O';
let winner="0";

function playGame(){
    for(let i = 0 ; i < 9 ; i++){
        boxes[i].addEventListener('click',function(){
            if(arr[i]==0){
                boxes[i].innerText = turn;
                if(turn == 'X'){
                    turn = 'O';
                }
                else{
                    turn = 'X';
                }
            }
            arr[i]=1;
            winner = checkWin();
            if(winner == "no"){
                result.innerText = "It's a tie!";
            }
            else if(winner !== "0"){
                for(let j = 0 ; j < 9 ; j++){
                    arr[j]=1;
                }
                result.innerText = `${winner} won the game`;
            }
        })    
    }
}

function checkWin(){
    for(let i = 0 ; i <= 6 ; i = i + 3){
        if((boxes[i].innerText == boxes[i+1].innerText) && (boxes[i].innerText == boxes[i+2].innerText) && (boxes[i+1].innerText == boxes[i+2].innerText)){
            if(boxes[i].innerText == 'O'){
                line.className = `line${(i/3)+1}`;
                // console.log(line.className);
                return "Player 1";
            }
            else if(boxes[i].innerText == 'X'){
                line.className = `line${(i/3)+1}`;
                // console.log(line.className);
                return "Player 2";
            }
//             else{
//                 return "0";
//             }
        }
    }
    for(let i = 0 ; i <= 2 ; i = i + 1){
        if((boxes[i].innerText == boxes[i+3].innerText) && (boxes[i].innerText == boxes[i+6].innerText) && (boxes[i+3].innerText == boxes[i+6].innerText)){
            if(boxes[i].innerText == 'O'){
                line.className = `line${i+4}`;
//                 console.log(line.className);
                return "Player 1";
            }
            else if(boxes[i].innerText == 'X'){
                line.className = `line${i+4}`;
//                 console.log(line.className);
                return "Player 2";
            }
//             else{
//                 return "0";
//             }
        }
    }
    if((boxes[2].innerText == boxes[4].innerText) && (boxes[4].innerText == boxes[6].innerText) && (boxes[2].innerText == boxes[6].innerText)){
        if(boxes[2].innerText == 'O'){
            line.className = "line8";
            return "Player 1";
        }
        else if(boxes[2].innerText == 'X'){
            line.className = "line8";
            return "Player 2";
        }
//         else{
//             return "0";
//         }
    }
    else if((boxes[0].innerText == boxes[4].innerText) && (boxes[4].innerText == boxes[8].innerText) && (boxes[0].innerText == boxes[8].innerText)){
        if(boxes[0].innerText == 'O'){
            line.className = "line7";
            return "Player 1";
        }
        else if(boxes[0].innerText == 'X'){
            line.className = "line7";
            return "Player 2";
        }
//         else{
//             return "0";
//         }
    }
    else if((boxes[0].innerText != "") && (boxes[1].innerText != "") && (boxes[2].innerText != "") && (boxes[3].innerText != "") && (boxes[4].innerText != "") && (boxes[5].innerText != "") && (boxes[6].innerText != "") && (boxes[7].innerText != "") && (boxes[8].innerText != "")){
        return "no";
    }
    else{
        return "0";
    }
    return "0";
}

playGame();
ng.addEventListener('click',function(){
    turn = 'O';
    winner = "0";
    result.innerText = "";
    for(let i = 0 ; i < 9 ; i++){
        arr[i]=0;
        boxes[i].innerText = "";
    }
    line.className = "line";
    playGame(); 
})

let compChoice, yourChoice, randomNum, result, final_score;
let resultConvert =localStorage.getItem('Score_Save');
reset_Score(resultConvert);


function reset_Score(resultCo){
if(resultCo!== undefined) {
  final_score=JSON.parse(resultCo);
  }
else{
  final_score={ 
      you: 0,
      comp:0,
    };
}
// final_score = resultCo ? JSON.parse(resultCo) : {
//   you: 0,    
//   comp: 0,
//     };
  saveResult();
}

randomgen();
saveResult();
function randomgen(){
  randomNum=Math.floor(Math.random() * 3);
  if (randomNum==0){ compChoice= 'stone'; }
  else if (randomNum==1){compChoice= 'paper';}
  else {compChoice= 'scissor';}
}
function final_result(yourChoice,compChoice){
  if (yourChoice== 'stone'){
    if (compChoice==='paper'){
      final_score.comp++;
      document.querySelector('.display-cs').value=final_score.comp;
      result='Computer won';
      document.querySelector('#score').value=result;}
      
    else if(compChoice==='scissor'){
      final_score.you++;
      document.querySelector('.display-you').value=final_score.you;
      result='You won';
      document.querySelector('#score').value=result;}
    else{ 
      result='Round Tie';
      document.querySelector('#score').value=result;}
  }
  if (yourChoice== 'paper'){
    if (compChoice==='paper'){
      result='Round tie';
      document.querySelector('#score').value=result;}
    else if(compChoice==='scissor'){
      final_score.comp++;      
      document.querySelector('.display-cs').value=final_score.comp;  
      result='Computer won';
      document.querySelector('#score').value=result;}
    else{ 
      final_score.you++;
      document.querySelector('.display-you').value=final_score.you;
      result='You won'; 
      document.querySelector('#score').value=result;}
  }
  if (yourChoice== 'scissor'){
    if (compChoice==='paper'){
      final_score.you++;
      document.querySelector('.display-you').value=final_score.you;
      result='You won';
      document.querySelector('#score').value=result;}
    else if(compChoice==='scissor'){
      result='Round Tie'; 
      document.querySelector('#score').value=result;}
    else{ 
      final_score.comp++;
      document.querySelector('.display-cs').value=final_score.comp;
      result='Computer won'; 
      document.querySelector('#score').value=result;}
  }
}
function saveResult(){
  localStorage.setItem('Score_Save',JSON.stringify(final_score));
}


function resetdisplay(){
document.querySelector('.display-cs').value=0;
document.querySelector('.display-you').value=0;
}
document.querySelector('.display-cs').value=final_score.comp;
document.querySelector('.display-you').value=final_score.you;
// function cs_won(){
//   currentDisplay_cs += 1;
//   document.querySelector('.display-cs').value=currentDisplay_cs;
// }

// function you_won(){
//   currentDisplay_you += 1;
//   document.querySelector('.display-you').value=currentDisplay_you;
// }
let nun=" ";
result='';
document.querySelector('#score').value=result;
let rel;
const end_v= document.querySelector('#end');
const end_show= document.querySelector('#end_show');
function end(){
  if (final_score.comp == 10 || final_score.you== 10 ){
  
    if (final_score.comp == 10){
      rel='YOU LOST';
      end_show.value= rel;
    }
  if(final_score.you== 10) { 
      rel='WINNER';
      end_show.value= rel;
    }
    
  localStorage.clear();
  reset_Score();
  resetdisplay();
  document.querySelector('#score').value= nun;
    
  end_v.style.visibility="visible";
  }
  
  
}

function again(){
  end_v.style.visibility="hidden";
  end_show.value=nun;

}

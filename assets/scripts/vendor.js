const userInput = document.getElementById('input-number');
const historyInput = document.getElementById('input-history');
const scrollBtn = document.getElementById('btn-scroll');
const buttons=document.querySelectorAll('button')

let percent=0;
let ln=0;
let logar=0;
let expo=0;

for(const btn of buttons){
  btn.addEventListener('click',function(){
    digitar(btn.innerText);
  })
}

function digitar(operador){
  switch (operador){
    case '1':
      userInput.value+='1';
      historyInput.value+='1';
      break;
    case '2':
      userInput.value+='2';
      historyInput.value+='2';
      break;
    case '3':
      userInput.value+='3';
      historyInput.value+='3';
      break;
    case '4':
      userInput.value+='4';
      historyInput.value+='4';
      break;
    case '5':
      userInput.value+='5';
      historyInput.value+='5';
      break;
    case '6':
      userInput.value+='6';
      historyInput.value+='6';
      break;
    case '7':
      userInput.value+='7';
      historyInput.value+='7';
      break;
    case '8':
      userInput.value+='8';
      historyInput.value+='8';
      break;
    case '9':
      userInput.value+='9';
      historyInput.value+='9';
      break;
    case '0':
      userInput.value+='0';
      historyInput.value+='0';
      break;
    case '+':
      historyInput.value+='+';
      userInput.value='';
      break;
    case '-':
      historyInput.value+='-';
      userInput.value='';
      break;
    case '*':
      historyInput.value+='*';
      userInput.value='';
      break;
    case '/':
      historyInput.value+='/';
      userInput.value='';
      break;
    case '%':
        percent=eval(userInput.value/100);
        userInput.value+='%';
        break;
    case '^':
      userInput.value+='^';
      break;
    case '(':
      userInput.value+='(';
      break;
    case ')':
      userInput.value+=')';
      break;
    case 'ln':
      userInput.value='LN('+userInput.value+')';
      break;
    case 'log':
      userInput.value='LOG('+userInput.value+')';
      break;
    case 'sqr':
      userInput.value='SQRT('+userInput.value+')';
      break;
    case 'pi':
      userInput.value+='3.1416';
      break;
    case '=':
      ejecutar();
      break;
    case 'H':
      hist();
      break;
    case 'C':
      clear();
      break;

  }
}
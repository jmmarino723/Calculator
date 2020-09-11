const userInput = document.getElementById('input-number');
const scrollBtn = document.getElementById('btn-scroll');
const buttons=document.querySelectorAll('button')
for(const btn of buttons){
  btn.addEventListener('click',function(){
    digitar(btn.innerText);
  })
}

function digitar(operador){
  switch (operador){
    case '1':
      userInput.value+='1';
      break;
    case '2':
      userInput.value+='2';
      break;
    case '3':
      userInput.value+='3';
      break;
    case '4':
      userInput.value+='4';
      break;
    case '5':
      userInput.value+='5';
      break;
    case '6':
      userInput.value+='6';
      break;
    case '7':
      userInput.value+='7';
      break;
    case '8':
      userInput.value+='8';
      break;
    case '9':
      userInput.value+='9';
      break;
    case '0':
      userInput.value+='0';
      break;
    case '+':
      userInput.value+='+';
      break;
    case '-':
      userInput.value+='-';
      break;
    case '*':
      userInput.value+='*';
      break;
    case '/':
      userInput.value+='/';
      break;
    case '%':
        userInput.value+='%';
        break;
    case '^':
      userInput.value+='^';
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
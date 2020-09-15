const userInput = document.getElementById('input-number');
const historyInput = document.getElementById('input-history');
const scrollBtn = document.getElementById('btn-scroll');
const buttons=document.querySelectorAll('button');
const collapse=document.getElementById('');
const standBtn = document.getElementById('btn-stand');


let total=0;

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
    case 'sin':
      total=Math.sin(eval(eval(historyInput.value)+'/180')*Math.PI);
      historyInput.value='SIN('+historyInput.value+')';
      userInput.value=total;
      hist();
      break;
    case 'cos':
      total=Math.cos(eval(eval(historyInput.value)+'/180')*Math.PI);
      historyInput.value='COS('+historyInput.value+')';
      userInput.value=total;
      hist();
      break;
    case '^2':
      total=eval(historyInput.value)*eval(historyInput.value);
      historyInput.value='('+historyInput.value+')^2';
      userInput.value=total;
      hist();
      break;
    case '10^x':
      total=Math.pow(10,eval(historyInput.value));
      historyInput.value='10^('+historyInput.value+')';
      userInput.value=total;
      hist();
      break;
    case '(':
      historyInput.value+='(';
      userInput.value+='(';
      break;
    case ')':
      historyInput.value+=')';
      userInput.value+=')';
      break;
    case 'ln':
      total=Math.log(eval(historyInput.value));
      historyInput.value='LN('+historyInput.value+')';
      userInput.value=total;
      hist();
      break;
    case 'log':
      total=Math.log10(eval(historyInput.value));
      historyInput.value='LOG('+historyInput.value+')';
      userInput.value=total;
      hist();
      break;
    case 'sqr':
      total=Math.sqrt(eval(historyInput.value));
      historyInput.value='SQRT('+historyInput.value+')';
      userInput.value=total;
      hist();
      break;
    case 'tan':
      total=Math.tan(eval(eval(historyInput.value)+'/180')*Math.PI);
      historyInput.value='TAN('+historyInput.value+')';
      userInput.value=total;
      hist();
      break;
    case '1/x':
      total=1/eval(historyInput.value);
      historyInput.value='1/('+historyInput.value+')';
      userInput.value=total;
      hist();
      break;
    case '|x|':
      total=Math.abs(eval(historyInput.value));
      historyInput.value='|'+historyInput.value+'|';
      userInput.value=total;
      hist();
      break;
    case '=':
      ejecutar();
      break;
    case 'C':
      clear();
      break;

  }
}
const defaultResult=0;
let currentResult=defaultResult;
let historial=[];
let operacion={};
let result='';

function ejecutar(){
    result=userInput.value+'=';
    //historial.push(userInput.value);
    userInput.value=eval(String(userInput.value));
    result+=userInput.value;
    historial.push(result);
}

function clear(){
    currentResult=0;
    userInput.value="";
}
function hist(){
    alert(historial);
}
function visscroll(){
    window.close();
}

scrollBtn.addEventListener('click',visscroll);
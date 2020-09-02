const defaultResult=0;
let currentResult=defaultResult;
let historial=[];
let operacion={};

function calcular(operador){
    if (operador==='SUMA'){
        operacion={
            operando: userInput.value,
            opera: "SUMA"
        }
        alert(operacion.opera+": "+operacion.operando)
        historial.push("+"+userInput.value);
        currentResult=currentResult+parseInt(userInput.value);
    }
    else if (operador==='RESTA'){
        operacion={
            operando: userInput.value,
            opera: "RESTA"
        }
        alert(operacion.opera+": "+operacion.operando)
        historial.push("-"+userInput.value);
        currentResult=currentResult-parseInt(userInput.value);
    }
    else if (operador==='MULTIPLICACIÓN'){
        operacion={
            operando: userInput.value,
            opera: "MULTIPLICACIÓN"
        }
        alert(operacion.opera+": "+operacion.operando)
        historial.push("*"+userInput.value);
        currentResult=currentResult*parseInt(userInput.value);
    }
    else if (operador==='DIVISIÓN'){
        operacion={
            operando: userInput.value,
            opera: "DIVISIÓN"
        }
        alert(operacion.opera+": "+operacion.operando)
        historial.push("/"+userInput.value);
        currentResult=currentResult/parseInt(userInput.value);
    }
    outputResult(currentResult,currentResult);
}
function sum(){
    calcular('SUMA');
}
function sust(){
    calcular('RESTA');
}
function multiply(){
    calcular('MULTIPLICACIÓN');
}
function divide(){
    calcular('DIVISIÓN');
}
function clear(){
    currentResult=0;
    userInput.value="";
    historial=[];
    outputResult(currentResult,0);
}
function hist(){
    alert(historial);
}
addBtn.addEventListener('click',sum);
subtractBtn.addEventListener('click',sust);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);
clearBtn.addEventListener('click',clear);
histBtn.addEventListener('click',hist)
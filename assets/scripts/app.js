const defaultResult=0;
let currentResult=defaultResult;
let historial=[];
let operacion={};

function calcular(operacion){
    switch (operacion){
        case '+':
            //historial.push("+"+userInput.value);
            userInput.value=userInput.value+'+';
            //currentResult=currentResult+'+';
            break;
        case '-':
            userInput.value=userInput.value+'-';
            //historial.push("-"+userInput.value);
            //currentResult=currentResult-parseInt(userInput.value);
            break;
        case '*':
            userInput.value=userInput.value+'*';
            //historial.push("*"+userInput.value);
            //currentResult=currentResult*parseInt(userInput.value);
            break;
        case '/':
            userInput.value=userInput.value+'/';
            //historial.push("/"+userInput.value);
            //currentResult=currentResult/parseInt(userInput.value);
            break;
    }
    //outputResult(currentResult);
}

function ejecutar(){
    historial.push(userInput.value);
    userInput.value=eval(String(userInput.value));
    historial.push(userInput.value);

}

function clear(){
    currentResult=0;
    userInput.value="";
}
function hist(){
    alert(historial);
}
function visscroll(){
    window.sizeToContent();
}
addBtn.addEventListener('click',function(){calcular('+')});
subtractBtn.addEventListener('click',function(){calcular('-')});
multiplyBtn.addEventListener('click',function(){calcular('*')});
divideBtn.addEventListener('click',function(){calcular('/')});
clearBtn.addEventListener('click',clear);
histBtn.addEventListener('click',hist);
equalBtn.addEventListener('click',ejecutar);
scrollBtn.addEventListener('click',visscroll);
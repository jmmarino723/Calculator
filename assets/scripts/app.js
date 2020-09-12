const defaultResult=0;
let currentResult=defaultResult;
let historial=[];
let operacion={};
let result='';
let cient=false;

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
function cientifica(){
    let textCient = ['%','^','pi','(','sqr','log','ln',')'];
    let contenedor='calc-actions';
    if (cient===false){
        for (let i=0; i<textCient.length; i++){
            let boton = document.createElement('button');
            let aux=i+1;
            if (i<=3){
                contenedor=contenedor+aux;
            }
            else if (i>3){
                aux-=4;
                contenedor=contenedor+aux;
            }
            const par1 = document.getElementById(contenedor);
            boton.innerText=textCient[i];
            par1.appendChild(boton);
            boton.addEventListener('click',function(){
                digitar(boton.innerText);
            })
            contenedor='calc-actions';
        }
        cient=true;
    }
    
}

scrollBtn.addEventListener('click',cientifica);
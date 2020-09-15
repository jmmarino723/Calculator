const defaultResult=0;
let currentResult=defaultResult;
let historial=[];
let operacion={};
let result='';
let cient=false;

function ejecutar(){
    result=historyInput.value+'=';
    userInput.value=eval(String(historyInput.value));
    result+=userInput.value;
    historial.push(result);
    let newHistory=document.createElement("LI");
    const totalHistory=document.getElementById("groupHistory");
    newHistory.className="list-group-item";
    newHistory.innerText=result;
    totalHistory.append(newHistory);
}

function clear(){
    currentResult=0;
    historyInput.value="";
    userInput.value="";
}
function hist(){
    alert(historial);
}
function cientifica(){
    let textCient = ['sin','cos','tan','(','sqr','log','ln',')'];
    let contenedor='calc-actions';
    let contenedor2='btn';
    if (cient===false){
        for (let i=0; i<textCient.length; i++){
            let boton = document.createElement('button');
            boton.className="btn btn-dark";
            contenedor2=contenedor2+textCient[i];
            boton.id=contenedor2;
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
            contenedor2='btn';
        }
        cient=true;
    }
    
}

function standar(){
    let textCient = ['sin','cos','tan','(','sqr','log','ln',')'];
    let contenedor2='btn';
    if (cient===true){
        for (let i=0; i<textCient.length; i++){
            contenedor2=contenedor2+textCient[i];
            const par1 = document.getElementById(contenedor2);
            let father=par1.parentNode;
            father.removeChild(par1);
            contenedor2='btn';
        }
        cient=false;
    }
}

scrollBtn.addEventListener('click',cientifica);
standBtn.addEventListener('click',standar);
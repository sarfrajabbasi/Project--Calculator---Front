// Element select by id:--
const calculator = document.getElementById("calculator");
const history = document.getElementById("history-value");
const output = document.getElementById("output-value");
const numbers = ["0","1","2","3","4","5","6","7","8","9"]
const operators = ["%","*","/","+","-",]

// use addEventListener:-----

calculator.addEventListener("click",performClickEvent);

// addEventListener functions:----

function performClickEvent(event){
    const input = event.target.innerText;
    const isNum = numbers.includes(input);
    const  isoperat = operators.includes(input);

    if(isNum){
        numhand(input);
    }else if(isoperat){
        operatorVal(input);
    }else if(input ==="C"){
        clear()
    }else if(input ==="="){
        outputVal();
    }
    
}

// functions :--------

const numhand = num =>output.innerText += num;

function operatorVal(inputs){
    const lastOut = output.innerText;
    const lastEl = lastOut[lastOut.length-1];
    if(!operators.includes(lastEl)){
        output.innerText += inputs;
    }
}

function outputVal(){
    const lastOut = output.innerText;
    const outEl = lastOut[lastOut.length-1];
    if(!operators.includes(outEl)){
        const finalR = eval(lastOut);
        output.innerText = finalR;
        history.innerText = finalR;
    }
}

function clear(){
    history.innerText = ''
    output.innerText = ''
}
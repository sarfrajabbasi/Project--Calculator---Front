let outputscr = document.getElementById("output-screen");
 
function display(num){
    outputscr.value += num;
    
}

function Calculate(){
    let lastOut = outputscr.value
    if(!"%+-/.*".includes(lastOut[lastOut.length-1])){

        outputscr.value = eval(outputscr.value)
    }
}

function Clear(){
    outputscr.value = "";
}

function del(){
    outputscr.value =  outputscr.value.slice(0,-1)
}
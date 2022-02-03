const adc = document.getElementById("add");
const sub = document.getElementById("sub");
var currentNumber = document.getElementById("currentNumber").innerHTML;

adc.addEventListener("click", increment);
sub.addEventListener("click", decrement);

function increment() {
    if (currentNumber < 10){
        document.getElementById("currentNumber").innerHTML++;
        currentNumber = document.getElementById("currentNumber").innerHTML
    }

    if (currentNumber > 0) {
        document.getElementById("currentNumber").style.color = "Green";
    }
    
    if (currentNumber == 0) {
        document.getElementById("currentNumber").style.color = "Black";
    }
    
}

function decrement() {
    if (currentNumber > -10){
        document.getElementById("currentNumber").innerHTML--;
        currentNumber = document.getElementById("currentNumber").innerHTML
    }

    if (currentNumber < 0) {
        document.getElementById("currentNumber").style.color = "red";
    }
    
    if (currentNumber == 0) {
        document.getElementById("currentNumber").style.color = "Black";
    }
}
  




/*

 v1.0
var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
}

//onclick="decrement()"
//onclick="increment()"

*/
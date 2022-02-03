const adc = document.getElementById("add");
const sub = document.getElementById("sub");

add.addEventListener("click", increment);
sub.addEventListener("click", decrement);

function increment() {
  document.getElementById("currentNumber").innerHTML++;
}

function decrement() {
    document.getElementById("currentNumber").innerHTML--;
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
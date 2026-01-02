const decrease = document.getElementById("decreaseBtn");
const increase = document.getElementById("increaseBtn");
const reset = document.getElementById("resetBtn");

let counter = document.getElementById("counter");
let count = 0;

decrease.onclick = function(){
    count --;
    counter.innerText = count;
}
reset.onclick = function(){
    count = 0;
    counter.innerText = count;
}
increase.onclick = function(){
    count ++;
    counter.innerText = count;
}
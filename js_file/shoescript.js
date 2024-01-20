const btn1 = document.querySelector(".circle1");
const btn2 = document.querySelector(".circle2");

const shoe1 = document.querySelector('.box1');
const shoe2 = document.querySelector('.box2');

btn1.addEventListener("click",()=>{
    shoe1.classList.remove("wrpbox1")
    shoe2.classList.add("wrpbox2")
    btn1.style.border="1px solid black"
    btn2.style.border= "0px solid black"
})
btn2.addEventListener("click",()=>{
    shoe2.classList.remove("wrpbox2")
    shoe1.classList.add("wrpbox1")
    btn2.style.border="1px solid black"
    btn1.style.border= "0px solid black"
})

const sub = document.querySelector(".sub");
const add = document.querySelector(".add");

let numcount = 0;

function updatecount(){
     document.querySelector(".numcount").textContent =  numcount;
}

add.addEventListener("click",()=>{
   numcount ++;
   updatecount()
})
sub.addEventListener("click",()=>{
    if (numcount>0){
   numcount --;
   updatecount()}
   
})


const cart = document.querySelector(".btn button")

cart.addEventListener('click',()=>{
    if(numcount>0){
    alert(` ${numcount} taken`)
    }
    else{
        alert(`pleace make sure your number of count`)
    }
})
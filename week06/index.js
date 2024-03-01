
// const a = document.getElementById("h1")
// console.log(a)

// a.style.color = "red";
// a.style.background="blue";

// const b1=document.getElementById("b1")
// b1.style.color = "red";
// function buttonpressesd(){
//     // alert("Hey there i am buton");
//     const container = document.getElementById("container")
//     const ball = document.createElement('div')
//     ball.className= "ball"
//     container.appendChild(ball)
// }
const plus=document.getElementById("button1")
function buttonPressed1(){
    // alert("I am the button");
    const container =document.getElementById("container1")
     const column = document.createElement('div')
     column.className="column"
     container.appendChild(column)
 }
 plus.onclick= buttonPressed1
// b1.onclick=buttonpressesd
changeColor = document.getElementById("changeColor")
function getRandomColor(){
    const red = math.floor(Math.random()*256)
    const green = math.floor(Math.random()*256)
    const blue = math.floor(Math.random()*256)
}

changeColor.onclick=getRandomColor
const arr = document.getElementsByClassName("column")
arr.array.forEach(element => {
    element.style.background=getRandomColor();
    
});

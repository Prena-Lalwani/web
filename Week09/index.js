// const obj={
//     name: "Prena",
//     password: "0123",
//     secret: "Blah",
//     passkey:"7338",
//     email:"prena@gmail.com"
// }
// // const{password, secret, passkey, ...restofObj} = obj;

// // console.log(restofObj);

// const another = obj;

// obj.name = "Koyal";

// console.log(another.name)

// function getData() {
//     return new Promise((resolve, reject) => {
//     // Simulating an asynchronous operation (e.g., fetching data from an API)
//     setTimeout(() => {
//     const data = [1, 2, 3, 4, 5];
//     // Simulating successful completion
//     resolve(data);
//     // Simulating failure
//     // reject(new Error('Failed to fetch data'));
//     }, 2000); // Simulating a delay of 2 seconds
//     });
//     }
//     // Consuming the Promise
//     getData()
//     .then(data => {
//     console.log('Data received:', data);
//     })
//     .catch(error => {
//     console.error('Error:', error.message);
//     });



// console.log('Starting setTimeout example...');
// setTimeout(() => {
//     console.log('This message will be displayed after 2 seconds.');
// }, 2000); // 2000 milliseconds = 2 seconds
// console.log('setTimeout example scheduled.');





//addition and subtraction code
const counterElement = document.getElementById('counter');
const addButton = document.getElementById('addButton');
const subtractButton = document.getElementById('subtractButton');

let count = 0;

addButton.addEventListener('click', () => {
    // count++;
    // updateCounter();
    alert(count)
});

subtractButton.addEventListener('click', () => {
    count--;
    updateCounter();
    alert(count)
});

function updateCounter() {
    counterElement.innerText = count;
    
}
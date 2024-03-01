/*let numbers = [1,2,3,4,5]
console.log(numbers.length)
numbers.push(6)
console.log(numbers)
numbers.pop(6)
console.log(numbers)
let newLength = numbers.unshift(9);
console.log("Array after pushing elements:", numbers);
console.log("New length of the array:", newLength);

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let newArray = array1.concat(array2, array3);

console.log("Original arrays:", array1, array2, array3);
console.log("Concatenated array:", newArray);
let abc = numbers.slice(0,4)
console.log(numbers)

let eabc = numbers.splice(0,4, 4,3,2,3)
console.log(numbers)




let obj = { a: 1, b: 2, c: 3 };
let keys = Object.keys(obj);
console.log(keys); // ['a', 'b', 'c']
let values = Object.values(obj);
console.log(values); // ['a', 'b', 'c']
let ent = Object.entries(obj);
console.log(ent);

let target = { a: 1, b: 2 };
let source1 = { b: 3, c: 4 };
let source2 = { d: 5 };

Object.assign(target, source1, source2);

console.log(target); // { a: 1, b: 3, c: 4, d: 5 }


let obj = { a: 1, b: 2 };
Object.defineProperty(obj, 'c', {
    value: 3,
    enumerable: false // 'c' is not enumerable
});

let properties = Object.getOwnPropertyNames(obj);
console.log(properties); // ['a', 'b', 'c']



function add(a,b){
    return a+b;
}

function double(arr,n){
    numers=[]
    for(var i=0; i<arr.length; i++)
    numers[i]= n*arr[i]
    return numers;
}

num1 =[1,2,3,4,5,6,7,8,9,10];
console.log(double(num1, 4));
*/



const a= [1,2,3,4,5,6].reduce((total,item)=>
{
    return total+item;},0);
    console.log(a);
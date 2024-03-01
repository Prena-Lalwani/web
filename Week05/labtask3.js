// function applyFunction(arr,func){
//  return arr.map(element => func(element));   
// }

// num =[1,2,3,4]
// result = applyFunction(num, x => x*2);
// console.log(result);


function Filter(array, callback) {
    var newArray = []; // Create a new array to store the mapped values
    for (var i = 0; i < array.length; i++) {
    // Call the callback function for each element and push the result to the new array
    if(array[i]%2 ==0)
    newArray.push(callback(array[i], i, array));
    }
    return newArray; // Return the new array
    }
    // Example usage:
    var numbers = [1, 2, 3, 4]
    var doubledNumbers = customMap(numbers, function(num) {
        return num * 2;
        });
        console.log(doubledNumbers); 
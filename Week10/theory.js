// const sos = function(...arg){
//     let total =0;
//     for (let a of arg){
//         total+=arg;
//     }
//     return total;
// }
// let arr =[0,1,2,3,4];
// console .log(sos(arr));


const sos = function(...arg){
    let total =0;
    for (let a of arg){
        total+=a;
    }
    return total;
}
let arr =[0,1,2,3,4];
console .log(sos(...arr));
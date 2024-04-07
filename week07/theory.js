const number=[5000, 9000, 20000, 15000, 100000]


function myF(number, index){
    var increment;
    if(number>0 & number<= 15000){
       number = number+(number*0.10);
    }
    else if(number>15000 & number<= 50000){
        number = number+(number*0.08);
    }
    else if(number>50000)
    {
        number = number+(number*0.05);
    }
}
console.log( myF(number));
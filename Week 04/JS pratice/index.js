console.log("Hey there its me")
console.error("Warning")
console.warn("OOOOOOOOO")



var colors = ["red", "green", "blue"];
for (var i = 0; i < 3; i++) {
    console.log(colors[i] );
    }

    console.log(colors );



    let myobj={
        name:"Prena",
        cms:"021-21-0066",
        address:{
            street_no:"2",
            city:"Rohri"
        }
    }

    console.log(Object.keys(myobj))
var keys= Object.keys(myobj)


for(var i=0; i<keys.length; i++){
    console.log(keys[i])
}

    //to find total methods
    //Object.key()
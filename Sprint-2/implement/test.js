let a = {x : 10, y : 20}; //to {"10": "x", "20": "y"}

let b = Object.entries(a);
console.log(b);
console.log(typeof(a));
console.log(typeof(b));
function invertObject(argument){
    let x = Object.entries(argument)
    return x.reduce((a,b)=>{
        a[b[1]] = b[0];
        return a;
    } ,{})
}
console.log(invertObject(a));

//map version
let m = {x : 10, y : 20};
function invertObject2(argument){
    let x = [argument];
    let newX = [];
     return x.map(item =>{
       let test = item.x; //10
       let test2 = item.y; //20
       return newX.push(test,test2);
    })
}


console.log(invertObject2(m));

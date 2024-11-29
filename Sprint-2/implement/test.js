let a = [1,3,"2",3,3,3,3,1,1,null];
function modeCalc(argument){
    let frequency = 0;
    let filtered = argument.filter(item => typeof item === "number");
    let sorted = filtered.toSorted((a,b)=> b-a);
    let frequents = sorted.reduce((a,b)=>{
        if(a[b]){
            frequency++;
            a[b]=frequency;
            return a;
        }
        else{
            frequency = 1;
            a[b]=frequency;
            return a;
        }
    },{});
    let frequentsToArray = Object.entries(frequents);
    let max = frequentsToArray[0];
    for (const item of frequentsToArray){
        if (item[1] > max[1]){
            max = item[0];
        }
    }
    return  max;
}
console.log(modeCalc(a));
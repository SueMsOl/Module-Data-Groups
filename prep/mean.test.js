// line 2 to 18 belongs to calculateMean() :
const LIST = [7,3,50];
function calculateMean(arg){
    arg = LIST;
    total = 0;
    for (let item of arg){
        total += item;
    }
    let meanCalc = total/arg.length
    return meanCalc;
}
//console.log(calculateMean(LIST));
test ("expected output is 20", ()=> {
    const CURRENT_OUTPUT = calculateMean(LIST);
    const TARGET_OUTPUT = 20;
    expect(CURRENT_OUTPUT).toBe(TARGET_OUTPUT);
})
// line 18 to 39 belongs to calculateMedian() longer version:
function calculateMedian(medianArg_V1){               // LIST jaye medianArg_v1 Mishine :)
    let sortedArgument = medianArg_V1.sort((a,b)=> a-b);
    if (sortedArgument.length%2 == 1){
        let x = ((sortedArgument.length/2)-0.5)+1;
        let y = x - 1;
        let w = sortedArgument[y];
        return w;
    } 
    else {
        let x1 = ((sortedArgument.length/2)-1);
        let y1 = (sortedArgument.length/2);
        let w1 = (sortedArgument[x1]+sortedArgument[y1])/2
        return w1;
    }
}
//console.log(calculateMedian(LIST));
 test ("output expect: 7", () =>{
    expect(calculateMedian(LIST)).toBe(7);
})
// line 38 to calculateMedian() faster version:
function calculateMedian2(medianArg_V2) {
    // Sort the array
    let sortedArgument = medianArg_V2.sort((a, b) => a - b);

    // Find the middle index
    let midIndex = Math.floor(sortedArgument.length / 2);

    // Check if the array has an odd or even number of elements
    if (sortedArgument.length % 2 === 1) {
        // If odd, return the middle element
        return sortedArgument[midIndex];
    } else {
        // If even, return the average of the two middle elements
        return (sortedArgument[midIndex - 1] + sortedArgument[midIndex]) / 2;
    }
}
test ("expected output : 7", () => {
    expect(calculateMedian2(LIST)).toBe(7);
})
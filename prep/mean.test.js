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
    const LIST = [7,3,50];
    const CURRENT_OUTPUT = calculateMean(LIST);
    const TARGET_OUTPUT = 20;
    expect(CURRENT_OUTPUT).toBe(TARGET_OUTPUT);
})
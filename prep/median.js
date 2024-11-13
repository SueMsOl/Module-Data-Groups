LIST = [2,9,39,5,61,18];
function calculateMedian3 (medianArg_v3){
    const SORTED_ARGUMENT = medianArg_v3.sort((a,b) => a-b);
    const MIDDLE_INDEX = SORTED_ARGUMENT.length/2;
    if (SORTED_ARGUMENT.length%2 == 1){
        let middleIndexOfOdd = Math.trunc(MIDDLE_INDEX);
        let medianOfList = SORTED_ARGUMENT.splice(middleIndexOfOdd,1)[0];
        return medianOfList;
    }
    else{
        let y = MIDDLE_INDEX - 1;
        let x = (SORTED_ARGUMENT[MIDDLE_INDEX]+SORTED_ARGUMENT[y])/2;
        return x;
    }
}
console.log(calculateMedian3(LIST));
//const ITEMS = ["a","b","c"];
function findMax(elements) {
    let numericItems = elements.filter(value => typeof value === 'number');
    return numericItems.length > 0 ? Math.max(...numericItems) : -Infinity;
}
//console.log(findMax(ITEMS));
module.exports = findMax;

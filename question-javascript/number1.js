/**
 * Direction:
 * Find the higher value from the array bellow
 *
 * Expected Result:
 * 8
 */
let numbers = [3, 1, 2, 3, 7, 5, 6, 8, 2, 1];

function result(numbers) {
    var sort = numbers.sort();
    let length = numbers.length-1;
    //atau
    // var max = Math.max.apply(null, numbers)
    // console.log(numbers.length);
    return sort[length];
}

console.log(result(numbers));
// Question
// Given a object data, return the data multiple by 3 and sort the data.
// Expected output : { j: 0, k: 9, i: 18, l: 36 }

const data = { i: 6, j: null, k: 3, l: 12 };

function result(data) {
    let arrData = [];
    for (var keys in data) {
        var val = data[keys] * 3;
        arrData.push([keys, val])
    }
    arrData.sort(function (a, b) {
        return a[1] - b[1];
    });
    return arrData
}

console.log(result(data));
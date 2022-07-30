/**
 * Direction
 * Divide students to all of groups & students must sorted by first name
 * 
 * Expected Result
 * [
 *   [
 *     { "firstName": "Belle", "lastName": "Norton" },
 *     { "firstName": "Finnley", "lastName": "Rennie" }
 *   ],
 *   [
 *     { "firstName": "Kai", "lastName": "Lyons" },
 *     { "firstName": "Peyton", "lastName": "Gardner" }
 *   ],
 *   [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
 * ]
 */
const students = [
    { firstName: 'Kai', lastName: 'Lyons' },
    { firstName: 'Belle', lastName: 'Norton' },
    { firstName: 'Finnley', lastName: 'Rennie' },
    { firstName: 'Tatiana', lastName: 'Dickerson' },
    { firstName: 'Peyton', lastName: 'Gardner' }
];
const groups = 3;

function result(students, groups) {
    const eachGroupsLength = Math.round(students.length / groups)
    let arrData = [];
    //sorting value by firstName
    students.sort(function (a, b) {
        var keyA = a.firstName.toUpperCase(),
            keyB = b.firstName.toUpperCase();
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    });
    //pushing each value into array
    for (var keys in students) {
        arrData.push(students[keys]);
    }
    const chunkSize = eachGroupsLength;
    let newArr = [];
    //dividing array into group
    for (let i = 0; i < arrData.length; i += chunkSize) {
        const chunk = arrData.slice(i, i + chunkSize);
        newArr.push(chunk);
    }
    return newArr;
}
console.log(result(students, groups));
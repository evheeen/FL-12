//Task 1
function convert(String) {
    let converted = [];
    for (let i = 0; i < String.length; i++) {
        if (typeof String[i] === `string`){
            converted.push(+String[i]);
        } else {
            converted.push(String[i].toString());
        }
    }
    return String;
}
convert('1', 2, 3, '4'); // [1, '2', '3', 4]

//Task 2
function executeforEach(arguments, items) {
    arguments.forEach((item) => {
        items(item);
    })
}
executeforEach([1,2,3], function(el) {
    console.log(el * 2)
}); // logs 2 4 6

//Tack 3
function mapArray(arguments, items) {
    const transformed = [];
    executeforEach(arguments, (item) => transformed.push(items(+item)));
    return transformed;
}
mapArray([2, '5', 8], function(el) {
    return el + 3
}); // returns [5, 8, 11]

//Task 4
function filterArray(arguments, items) {
    const filtred = [];
    executeforEach(arguments, (item) => filtred.push(items(item)));
    return filtred
}
filterArray([2, 5, 8], function(el) {
    return el % 2 === 0
}); // returns [2, 8]

//Task 5
function flipOver(String) {
    let flipped = [];
    for (let i = String.length; i >= 0; i--) {
        flipped.push(String[i]);
    }
    return flipped
}
flipOver(`hello world`);

//Task 6
function makeListFromRange(arguments) {
    let made = [];
    for (let i = arguments[0]; i <= arguments[1] ; i++) {
        made.push(i);
    }
}
makeListFromRange([2, 7]); // [2, 3, 4, 5, 6, 7]

//Task 7
function getArrayOfKeys(arguments, items){
    const got = [];
    executeforEach(arguments, (item) => got.push(item[items]));
    return got;
}
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];
getArrayOfKeys(actors, `name`); // [‘tommy’, ‘lee’]

//Task 8
function substitute(arguments) {
    let substituted = [];
    mapArray(arguments, function(item){
        if (item < 30){
            substituted.push(`*`);
        }else{
            substituted.push(item);
        }
    });
    return substituted;
}
substitute([58, 14, 48, 2, 31, 29]); // [58, '*', 48, '*', 31, '*']

//Task 9
function getPastDay(date, value) {
    let sourceDate = new Date(date);
    sourceDate.setDate(date.getDate() - value);
    return sourceDate.getDate;
}
const date = new Date(2019, 0, 2);
getPastDay(date, 1); // 1, (1 Jan 2019)
getPastDay(date, 2); // 31, (31 Dec 2018)
getPastDay(date, 365); // 2, (2 Jan 2018)


//Task10
function formatDate(date) {
    let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}`:date.getMinutes();
    let hours = date.getHours() < 10 ? `0${date.getHours()}`:date.getHours();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    return `${year}/${month}/${day} ${hours}:${minutes}`;
}
formatDate(new Date('6/15/2018 09:15:00')) // "2018/6/15 09:15"
formatDate(new Date()) // "2020/1/7 12:56" // gets current local time

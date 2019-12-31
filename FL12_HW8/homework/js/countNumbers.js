function makeNumbre(String) {
    let numbers = ``;
    for (let i = 0; i < String.length; i++) {
        if (String[i] >= 0 || String[i] <=9){
            numbers += String[i];
        }
    }
    return numbers;
}
function countNumbers(String) {
    let count =  {};
    let numbers = makeNumbre(String).split(``);
    for (let i of numbers) {
        if (count[i] === undefined) {
            count[i] = 1;
        } else {
            count[i]++;
        }
    }
    return count;
}
countNumbers(`erer384jj4444666888jfd123`);
countNumbers(`jdjjka000466588kkkfs662555`);
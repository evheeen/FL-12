function addOne(x) {
    return x + 1;
}
function pipe(number) {
    for (let i = 1; i < arguments.length; i++) {
        number = addOne(number);
    }
    return number;
}
pipe(1, addOne, addOne);
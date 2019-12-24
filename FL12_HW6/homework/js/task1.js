let a = parseInt(prompt("Input your value for a"));
let b = parseInt(prompt("Input your value for b"));
let c = parseInt(prompt("Input your value for c"));
if(isNaN(a)||isNaN(b)||isNaN(c)){
    alert("Invalid input data");
}else{
    let D = Math.pow(b, 2) - 4 * a * c;
    if (D > 0){
        console.log("The equation has two value");
        let x1 = (-b + Math.sqrt(D)) / 2 * a;
        let x2 = (-b + Math.sqrt(D)) / 2 * a;
        console.log("x1 = " + x1 + ";  and x2 = "+x2);
    }else if(D < 0){
        console.log("The equation has not solution");
    }else if(D === 0){
        console.log("The equation has one value");
        let x = -b / 2 * a;
        console.log("x = " + x);
    }else if (b === 0 && c === 0){
        console.log("x = 0");
    }
}
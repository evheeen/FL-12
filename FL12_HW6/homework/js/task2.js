let a = parseInt(prompt("Input your value for side’s a length", ""));
let b = parseInt(prompt("Input your value for side’s b length", ""));
let c = parseInt(prompt("Input your value for side’s c length", ""));

if(isNaN(a)||isNaN(b)||isNaN(c)||a === undefined||b === undefined||c === undefined){
    alert("Input values should be ONLY numbers");
}
if(a === 0||b === 0||c === 0){
    alert("A triangle must have 3 sides with a positive definite length");
}else{
    if(a + b > c && a + c > b && b + c > a){
        if(a === b && b === c){
            console.log("Equivalent triangle");
        }else if(a === b || b === c || a === c){
            console.log("Isosceles triangle");
        }else{
            console.log("Scalene triangle");
        }
    }else{
        console.log("Triangle doesn’t exist")
    }
}
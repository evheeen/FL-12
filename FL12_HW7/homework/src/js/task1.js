const email = prompt("Enter your email");
let pass;
let enterPass = false;
let changePass = false;
if(email){
    if (email.length > 5){
        if (email==="user@gmail.com"||email==="admin@gmail.com"){
            enterPass = true;
        } else {
            alert("I don’t know you");
        }
    } else {
        alert("I don’t know any emails having name length less than 5 symbols")
    }
}else{
    alert("Canceled");
}
if (enterPass){
    pass = prompt("Enter your password");
    if (pass){
        if (email==="user@gmail.com"&&pass==="UserPass"){
            changePass = true;
        } else if (email==="admin@gmai.com"&&pass==="AdminPass"){
            changePass = true;
        } else {
            alert("Wrong password");
        }
    } else {
        alert("Canceled");
    }
}
if (changePass){
    changePass = confirm("Do you want to change your password?");
    if (changePass){
        const oldPass = prompt("Enter the old password");
        if (pass = oldPass){
            const newPass = prompt("Enter the mew password");
            if (newPass.length > 6){
                const passConfirm = prompt("Enter a new password again");
                if (newPass === passConfirm){
                    alert("You have successfully changed your password");
                    pass = newPass;
                } else {
                    alert("You wrote the wrong password");
                }
            } else {
                alert("It’s too short password. Sorry");
            }
        } else {
            alert("Wrong password");
        }
    } else {
        alert("You have failed the change");
    }
}
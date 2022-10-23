console.log("Password Exercise")

const password = prompt("New Password")

if (password.length >= 6) {
    if (password.indexOf(" ") === -1) {
        console.log(alert("Thank You"));
    }
    else {
        console.log(alert("Password cannot contain spaces"));
    }
}
else {
    console.log(alert("Password not long enough"));
}

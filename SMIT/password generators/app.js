

document.write("<h1>PASSWORD GENERATE ! </h1>");

var num = "0123456789";
var alpha = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%&*";
var final = num + alpha + specialChar;
var pass = "";


var length = +prompt("Enter password length (minimum 6): ", "8");


if (isNaN(length) || length < 6) {
    length = 8;
}

for (var i = 0; i < length; i++) {
    pass += final[Math.floor(Math.random() * final.length)];
}

document.write("<b>1) Password: </b>" + pass + "<br><br><br>");



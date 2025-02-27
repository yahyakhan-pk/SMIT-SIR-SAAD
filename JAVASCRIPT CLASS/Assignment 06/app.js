


// Q1 Write a program that takes two user inputs for first and last name using prompt and merge them in a variable titled fullName. Greet the user using his full name.

// var fristName = "Muhammad";
// var secondName = "Ali";

// var fullName = fristName + " " + secondName;

// document.write(`${fullName} Welcome to our Company!`);


// Q2 Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.

// var mobile = prompt('Enter your Favorite mobile model!');

// document.write(`My Favorite mobile phone model is : ${mobile}`);


// Q3 Write a program to find the index of letter "n" in the word "pakistani" and display the result in your browser.

// var country = "pakistani";
// var name = country.indexOf('n');

// document.write(`the index of the country "pakistani" is = ${name}`);

// Q4 Write a program to find the last index of letter "l" in the word "Hello World" and display the result in your browser.

// var word = "Hello World";
// var text = word.lastIndexOf('l');

// document.write(`Last index of 'l': ${text}`);


// Q5 Write a program to find the character at 3rd index in the word "Pakistani" and display the result in your browser.

// var country = "Pakistani";
// var name = country.charAt('3');

// document.write(`Character at index 3: ${name}`);

// Q6 Repeat Q1 using string contact() method.

// var fristName = "Yahya";
// var lastName = "Khan";

// var fullName = fristName.concat(" ", lastName);

// document.write(fullName);


// Q7 Write a program to replace the "Hyder" to "Islam" in the world "Hyderabad" and display the result in your browser,

// var city = "Hyderabad";

// var newCity = city.replace("Hyder", "islam");
// document.write(`After replacement: ${newCity}`);


// Q8 Write a program to replace all occurrences of "and" in the string with "&" and display the result in your browser.

// var Message = "Ali and Sami are best friends. They play circket and football together.";

// var newMessage = Message.replaceAll("and", "&");

// document.write(newMessage);


// Q9 Write a program that converts a string "472" to a number 472. Display the values & types in your browser.

// let str = "472";
        
// var num = Number(str);

// document.write("<b>value</b> : " + str + "<br> <b>type</b> : " + typeof str + "<br>");
// document.write("<b>value</b> : " + num + "<br> <b>type</b> : " + typeof num);


// Q10 Write a program that take a URL as user input in the followring formate: (www.facebook.com / www.yahoo.com). Extract the domain name & show in your browser.

// var url = prompt("Enter URL (e.g. www.example.com)");
// var domain = url.replace("www.", "");

// document.write("Domain Name: " + domain);


// Q11 Write a program that takes user input. Convert and show the input in capital letters.

// var userInp = prompt('Enter your name');

// var capitalizedInp = userInp.toUpperCase();

// document.write(capitalizedInp);


// Q12 Write a program that takes user input. Convert and show the input in small letters.

// var userInp = prompt("Enter any words!");

// var lowerCase = userInp.toLowerCase();

// document.write(lowerCase);


// Q13 Write a program that takes user input. Convert and show the input in title case.

// var userInp = prompt("Enter the javascript!");
// var newUser = userInp.charAt(0).toUpperCase() + userInp.slice(1).toLowerCase();

// document.write(newUser);



// Q14 Write a program that converts the variabla num to string.  var num = 35.36    Remove the dot to display "3536" display in your browser.

    // var num = +prompt('Enter the your number (e.g. 35.36)');

    // var str = num.toString().replace(".", "");

    // document.write(`Result ${str}`);


// Q15 Write a program to display the value of x in your browser if a="3" and b="3"?


// var a = "3";
// var b = "3";

// var x = a + b;
// document.write(x);



// Q16 Write a program to display the value of y in your browser if a="3" and b="3"  then y = a - b?

// var a = "3";
// var b = "3";
// var y = a - b;
// document.write(y);


// Q17 Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid suername. For character codes of [@ . , !], refer to ASCII  table at the end of this document.
//Note:
//ASCII code of ! is 33
//ASCII code of , is 44
//ASCII code of . is 46
//ASCII code of @ is 64

// var username = prompt("Enter a valid username:");
// var invalidChars = ['@', '.', ',', '!'];

// var isValid = true;
// for (var i = 0; i < username.length; i++) {
//     if (invalidChars.includes(username[i])) {
//         isValid = false;
//         break;
//     }
// }

// if (isValid) {
//     document.write("Valid username entered: " + username);
// } else {
//     document.write("Invalid username! Please avoid using @ . , or !");
// }



// Q18 You have an array A = ["cake", "apple pie", "cookie", "chips", "patties"]  Write a program to enable "search by user input" in an array". After searching, prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOKIE, program should inform about its availablity. Example:

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInp = prompt("Enter an item to search:");
// if (userInp) {
//     var lowerCaseInp = userInp.toLowerCase();
//     var index = A.map(item => item.toLowerCase()).indexOf(lowerCaseInp);

//     if (index !== -1) {
//         document.write(`${userInp} is available at index ${index} in the list.`);
//     } else {
//         document.write(`${userInp} is not available in the list.`);
//     }
// } 

// else {
//     document.write("Please enter a valid item.");
// }



// Q19 Write a program to take tow input strings. Using string comparison, tell which string is greater than other if they both are equal.
// Take two input strings from the user

// var str1 = prompt("Enter first string: ");
// var str2 = prompt("Enter second string: ");


// if (str1 > str2) {
//     document.write(`"${str1}" is greater than "${str2}"`);
// } else if (str1 < str2) {
//     document.write(`"${str1}" is smaller than "${str2}"`);
// } 
// else {
//     document.write("Both strings are equal");
// }


// Q20 Write a program to take password as an input from user. The  password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password.For character code of a-z, A-Z & 0-9, refer to ASCII table at the end of this documents.


// let password = prompt("Enter your password");

// if(password.length < 6) {
//     document.write("Password must contain at least 6 characters");
// }else if(!isNaN(password[0])) {
//     document.write("Password does not start with a number");
// }else if(!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
//     document.write("Invalid password: Must contain both letters and numbers");
// }
// else {
//     document.write(`Valid password = ${password}`);
// }


// Q21 Write a program to convert the followring string to an array using string split mehtod.  var university = "University of Karachi";   Display the elements of array in your browser.

// var university = prompt("Enter the university of karachi!");

// document.write(university.split("").join("<br>"));


// Q22 Write a program to display the last character of user input.

// var userInp = prompt("Enter your university");
// var lastletters = " ";
// var length = userInp.length;

// for(var i = 0; i < length; i++){
//     if(userInp[i] !== " " && (i === length - 1 || userInp[i + 1] === " ")) {
//         lastletters += userInp[i];
//     }
// }

// document.write(`Last letters: ${lastletters}`);


// Q23 You have a string "The quick brown fox jumps over the lazy dog". Write a program to count numbers of occurrences of word "the" in the given string.

var text = prompt("Enter this sentence: The quick brown fox jumps over the dog!");

var lowerText = text.toLowerCase();
var matches = lowerText.match(/\bthe\b/g);

var
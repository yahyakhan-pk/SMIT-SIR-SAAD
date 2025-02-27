//1  whether programm

// var whether = +prompt('Enter a number check divisible by 3')

// if(whether % 3 === 0){
//     document.write(`The number is ${whether} by 3 its remainder is 0`)
// }

// else{
//     document.write(`The number is not divisible by ${whether}`)
// }


//2 Programm whether is even or odd check
//  var number = +prompt(`Enter number to  check it is even or odd`)
 
//  if(number % 2 === 0){
//     document.write(`The number ${number} is even`)
//  }
//  else{
//     document.write(`The number ${number} is odd`)
//  }


//3 for age
//   var age = +prompt(`Enter your age`)

//   if(age > 18){
//     document.write(`Old Enough!`)
//   }
//   else{
//     document.write(`Too young`)
//   }


//4 
//   var myName = "Yahya Khan"

//   var userName = prompt(`What is your name`)

//   if(myName === userName){
//     document.write(`Hello ${myName}! Welcome to my site!`)
//   }

//5 switch case

// var num = +prompt(`Enter the number:`)

// switch (num % 3){
//     case 0:
//         // alert(`The number is divisible by ${num}`)
//         document.write(`The number is divisible by ${num}`)
//         break;

//     default:
//         // alert(`The number is not divisible by ${num}`)
//         document.write(`The number is not divisible by ${num}`)
//         break;
// }


//6
// var input = prompt("Enter a character:");

// var charCode = input.charCodeAt(0);

// if (charCode >= 48 && charCode <= 57) {
//     document.write("The input is a number.");
// }

// else if (charCode >= 65 && charCode <= 90) {
//     document.write("The input is an UPPERCASE letter.");
// }

// else if (charCode >= 97 && charCode <= 122) {
//     document.write("The input is a lowercase letter.");
// }
// else {
//     document.write("The input is a character.");
// }


//7


// Prompt the user for inputs
// var number1 = parseFloat(prompt("Enter the first number:"));
// var number2 = parseFloat(prompt("Enter the second number:"));
// var operator = prompt("Enter an operator (+, -, *, /, %):");

// // Variable to store the result
// var result;

// // Perform calculations using a switch statement
// switch (operator) {
//   case "+":
//     result = number1 + number2;
//     break;
//   case "-":
//     result = number1 - number2;
//     break;
//   case "*":
//     result = number1 * number2;
//     break;
//   case "/":
//     if (number2 !== 0) {
//       result = number1 / number2;
//     } else {
//       result = "Error: Division by zero!";
//     }
//     break;
//   case "%":
//     if (number2 !== 0) {
//       result = number1 % number2;
//     } else {
//       result = "Error: Division by zero!";
//     }
//     break;
//   default:
//     result = "Error: Invalid operator!";
// }

// // Display the result using document.write()
// document.write("<h3>Calculator Result</h3>");
// document.write("Result: " + result);


//7 
// var num1 = +prompt(`Enter your first number`)
// var num2 = +prompt(`Enter your second number`)
// var operator = prompt(`Enter an operator (+, -, /, *, %)`)

// var result;

// switch(operator){
//     case "+":
//         result = num1 + num2;
//     break;

//     case "-":
//         result = num1 - num2;
//     break;

//     case "*":
//         result = num1 * num2;
//     break;

//     case "/":
//         if(num2 !== 0){
//             result = num1 / num2;
//         }
//         else{
//             result = "Error: Division by Zero";
//         }
//     break;
    
//     case "%":
//         if(num2 !== 0){
//             result = num1 % num2;
//         }
//         else{
//             result = "Error: Division by Zero"
//         }
//     break;

//     default:
//         result = "Error: Invalid number or Operator!"
// }

// document.write(`<h2>Calculte Result:</h2>`)
// document.write(`Result : ${result}`)


//8

// var clock = prompt("Enter your time in 24-hour format (e.g., 1900):");

// // Convert user input to a number and validate
// var time = parseInt(clock);

//  if (time >= 0 && time < 1200) {
//     document.write("Good Morning!");
// }
//  else if (time >= 1200 && time < 1700) {
//     document.write("Good Afternoon!");
// }
//  else if (time >= 1700 && time < 2100) {
//     document.write("Good Evening!");
// }
//  else if (time >= 2100 && time <= 2359) {
//     document.write("Good Night!");
// } else {
//     document.write("Invalid time entered. please enter a valid time in 24-hour formate.");
// }


//9

// var year = +prompt(`Enter any year and check the leap year`);  

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     document.write(year + " is a leap year.");
// } else {
//     document.write(year + " is not a leap year.");
// }


//10

// var mypassword = "skd1016";

// var userpassword = prompt("Please Enter your password:");

// if(userpassword === ""){
//     alert("Please enter your password");
// }
// else if(userpassword === mypassword){
//     alert("corrected: The password you entered matches the original password");
// }
// else{
//     alert("Incorrect password");
// }


//11
  
// var firstName = "Ali";
// var userInput = prompt("Please Enter Your Name:");

// if(userInput === firstName){
//     document.write(firstName)
// }
// else if(userInput === "Fahad"){
//     document.write("Hello Fahad!")
// }
// else{
//     document.write("you are not Fahad or Ali")
// }


//12

// var greeting;
// var hour = prompt("Enter the any number");

// if(hour < 18){
//     greeting = "Good day";
// }
// else{
//     greeting = "Good evening";
// }

// alert(greeting);

//13
// var num1 = +prompt(`Enter the first integer:`);
// var num2 = +prompt(`Enter the  second integer:`)


// if(num1 > num2){
//     document.write(`${num1} is larger than ${num2}`);
// }
// else if(num1 < num2){
//     document.write(`${num2} is larger than ${num1}`);
// }
// else{
//     document.write(`Both numbers are equals: ${num1} = ${num2}`);
// }

//14
//  var number = prompt(`Enter a number:`);

//  if(number> 0){
//     document.write(`The number is positive`);
//  }
//  else if(number < 0){
//     document.write(`The number is negative`);
//  }
//  else{
//     document.write(`The number is zero`);
//  }

//15
//    var currentHours = +prompt(`Enter the current  hour in 24-hour formate (e.g., 18 for 2pm)`);
//    if(currentHours >= 6 && currentHours < 9){
//     document.write(`Breakfast is served.`);
//    }
//    else if(currentHours >= 11 && currentHours < 13){
//     document.write(`For lunch time.`);
//    }
//    else if(currentHours >= 18 && currentHours < 22){
//     document.write(`It's dinner time.`);
//    }
//    else{
//     document.write(`Sorry, you'll have to wait`);
//    }


//16


// var input = prompt("Enter a value (number, string, boolean, or leave empty for undefined):");


// var variableType;


// if (input === null || input === "") {
//     variableType = "undefined"; 
// }
//  else if (!isNaN(input) && input.trim() !== "") {
//     variableType = "number"; 
//     input = Number(input); 
// }
//  else if (input.toLowerCase() === "true" || input.toLowerCase() === "false") {
//     variableType = "boolean"; 
//     input = input.toLowerCase() === "true"; 
// }
//  else {
//     variableType = "string"; 
// }

// // Display the type of the variable using document.write
// document.write("The variable type is: " + variableType + "<br>");
// document.write("The variable value is: " + input);


//17
// Get input from the user
// var char = prompt("Enter a single character:");

// if (char.length === 1) {
    
//     var vowels = "aeiouAEIOU";
    
    
//     if (vowels.indexOf(char) !== -1) {
//         document.write("True - " + char + " is a vowel.");
//     } else {
//         document.write("False - " + char + " is not a vowel.");
//     }
// } else {
//     document.write("Please enter only one character.");
// }


//18
// var number1 = +prompt("Enter the first number:");
// var number2 = +prompt("Enter the second number:");

// if(number1 != number2){
//     document.write(`${number1} Is Not Equal to ${number2} <br>`);
// }
// else{
//     document.write(`${number1} Is Equal to ${number2}`);
// }


//19

// var month = prompt(`Enter the month:`);

// if(month == 1){
//     alert(`january`);
// }
// else if(month == 2){
//     alert(`February`);
// }
// else if(month == 3){
//     alert(`March`);
// }
// else if(month == 4){
//     alert(`April`);
// }
// else if(month == 5){
//     alert(`May`);
// }
// else if(month == 6){
//     alert(`June`);
// }
// else if(month == 7){
//     alert(`July`);
// }
// else if(month == 8){
//     alert(`Agust`);
// }
// else if(month == 9){
//     alert(`September`);
// }
// else if(month == 10){
//     alert(`October`);
// }
// else if(month == 11){
//     alert(`November`);
// }
// else if(month == 12){
//     alert(`December`);
// }
// else{
//     alert(`Invalid month!`);
// }


//20
// var age = prompt(`Enter your age:`);

// var voteable;

// if(age < 18){
//     voteable = `Too young`;
// }
// else{
//     voteable = `Old enough`;
// }

// document.write(voteable);





/// page # 02

//Q1:
    // var name = prompt(`Please enter your name:`);

    // alert(`Hi, ${name}`);

//Q2:

// var number = prompt(`Enter a number multiplication table`);

// if(number === "" || number === "null"){
//     number = 5;
// }

// document.write(`<h2>Multiplication number of ${number}</h2>`);

// document.write(`${number} * 1 = ${number * 1}<br>`);
// document.write(`${number} * 2 = ${number *2} <br>`);
// document.write(`${number} * 3 = ${number *3} <br>`);
// document.write(`${number} * 4 = ${number *4} <br>`);
// document.write(`${number} * 5 = ${number *5} <br>`);
// document.write(`${number} * 6 = ${number *6} <br>`);
// document.write(`${number} * 7 = ${number *7} <br>`);
// document.write(`${number} * 8 = ${number *8} <br>`);
// document.write(`${number} * 9 = ${number *9} <br>`);
// document.write(`${number} * 10 = ${number *10} <br>`);

//Q3

// var city = prompt(`Enter your city name:`);

// if(city === "Karachi"){
//     alert(`Welcome to city of lights!`);
// }
// else{
//     alert(`Welcome to ${city}`);
// }


//Q4

// var gender = prompt("Enter your gender (male/female):");

// if (gender === "male") {
//   alert("Good Morning Sir");  
// } 
// else if (gender === "female") {
//   alert("Good Morning Ma’am");  
// }
//  else {
//   alert("Invalid input. Please enter 'male' or 'female'."); 
// }


//Q5
// var signalColor = prompt(`Enter a traffic signal color (red, yellow, green):`);

// if(signalColor === `red`){
//     alert(`Vehicals must stop!`);
// }
// else if(signalColor === `yellow`){
//     alert(`Vehiclas should get ready to move`);
// }
// else if(signalColor === `green`){
//     alert(`Vehicals can move now`);
// }
// else{
//     alert(`Invalid color!`);
// }

//Q6
//   var maxAge = +prompt(`Enter your maximum age:`);
//   var currentAge = +prompt(`Enter your current age:`);

//   if(currentAge <= maxAge){
//     alert(`you are welcome`);
//   }
//   else{
//     alert(`you are not welcome`);
//   }


//Q7

// var fuel = parseFloat(prompt(`Enter the remaining fuel in your car!`));

// if(fuel < 0.25){
//     alert(`Please refill the fuel in your car`);
// }
// else{
//     alert(`You have enough fuel in your car`);
// }


//Q9

// var username = prompt("Enter your name");
// var maths = +prompt("Enter maths marks");
// var eng = +prompt("Enter English marks");
// var urdu = +prompt("Enter Urdu marks");
// var bio = +prompt("Enter Bio marks");
// var cs = +prompt("Enter Computer marks");
// var marksObtained = maths + eng + urdu + bio + cs;
// var perc = (marksObtained / 500) * 100;
// var grade;

// if(perc >= 80){
//     grade = "A+"
// }
// else if(perc >= 70){
//     grade = "A"
// }
// else if(perc >= 60){
//     grade = "B"
// }
// else if(perc >= 50){
//     grade = "C"
// }
// else if(perc >= 40){
//     grade = "D"
// }
// else{
//     grade = "Fail"
// }



// document.write(
//     `<table border='2px'> 
//     <tr> 
//     <th> NAME </th>
//     <th> MATHS </th>
//     <th> ENGLISH </th>
//     <th> URDU </th>
//     <th> BIO </th>
//     <th> CS </th>
//     <th> Obtained Marks </th>
//     <th> PERCENTAGE </th>
//     <th> GRADE </th>
//     </tr>

//     <tr> 
//     <td> ${username} </td>
//     <td> ${maths} </td>
//     <td> ${eng} </td>
//     <td> ${urdu} </td>
//     <td> ${bio} </td>
//     <td> ${cs} </td>
//     <td> ${marksObtained} / 500 </td>
//     <td> ${perc.toFixed(2)} </td>
//     <td> ${grade} </td>
//     </tr>
//     </table>`
// )



//Q10

// var item1 =  prompt("what is your first item")
// var item1Price = +(prompt("Enter your price"));
// var item1Quantity = +(prompt("Enter your Qauntity"));

// var item2 =  prompt("what is your second item")
// var item2Price = +(prompt("Enter your second items price"));
// var item2Quantity = +(prompt("Enter your items 2 Qauntity"));



// var item3 =  prompt("what is your third item")
// var item3Price = +(prompt("Enter your third items price"));
// var item3Quantity = +(prompt("Enter your items 3 Qauntity"));


// var item4 =  prompt("what is your fourth item")
// var item4Price = +(prompt("Enter your fourth items price"));
// var item4Quantity = +(prompt("Enter your items 4 Qauntity"));

// var dis;
// var total = item1Price + item2Price + item3Price + item4Price;
// var discount;


// if(total >= 10000){
//     discount = total * 10 / 100;
//     dis = ( `discount 10%`)
// }

// else if(total >= 9000){
//     discount = total * 9 / 100;
//     dis = ( `discount 9%`)
// }

// else if(total >= 8000){
//     discount = total * 8 / 100;
//     dis = ( `discount 8%`)
// }


// else if(total >= 7000){
//     discount = total * 7 / 100;
//     dis = (`discount 7%`)
// }

// else if(total >= 6000){
//     discount = total * 6 / 100;
//     dis = ( `discount 6%`)
// }


// else if(total >= 5000){
//     discount = total * 5 / 100;
//     dis = ( `discount 5%`)
// }

// else if(total >= 4000){
//     discount = total * 4 / 100;
//     dis = ( `discount 4%`)
// }

// else if(total >= 3000){
//     discount = total * 3 / 100;
//     dis = ( `discount 3%`)
// }

// else{
//     discount = total;
//     dis = ( `NO Discount`)
// }

// var payable = total -discount;
// var charged = +prompt(`Enter recived amount`);
// var baqiya = charged -  payable;

// document.write(

    
//     `<center>   <table border="3">

//         <tr>
//             <th>${item1}</th>
//             <th>${item2}</th>
//             <th>${item3}</th>
//             <th>${item4}</th>
//             <th>item1Quantity</th>
//             <th>item2Quantity</th>
//             <th>item3Quantity</th>
//             <th>item4Quantity</th>
//             <th>Total Amount</th>
//             <th>Discount</th>
//             <th>payable Amount</th>
//             <th>charged Amount</th>
//             <th>Return Amount</th>
//         </tr>

//         <tr>
//             <th>${item1Price}</th>
//             <th>${item2Price}</th>
//             <th>${item3Price}</th>
//             <th>${item4Price}</th>
//             <th>${item1Quantity}</th>
//             <th>${item2Quantity}</th>
//             <th>${item3Quantity}</th>
//             <th>${item4Quantity}</th>
//             <th>${total}</th>
//             <th>${discount}</th>
//             <th>${payable}</th>
//             <th>${charged}</th>
//             <th>${baqiya}</th>
//         </tr>


//     </table>  </center>`
// )


//Q11

// var secretNumber = 6;

// var userGuess = +prompt(`Guess the secret number (between 1 and 10)`);

// if (userGuess === secretNumber){
//     alert(`You are win! Correct answer`);
// }
// else{
//     alert(`Try Again!`);
// }


//Q12
//  var number = +prompt(`Enter a number`);


//  if(number % 3 === 0){
//     alert(`The number ${number} is divisible by 3.`);
//  }
//  else{
//     alert(`The number ${number} is not divisible by 3.`);
//  }


//Q13

// var teamA = prompt(`Enter the name of team A`);
// var teamAscore = +prompt(`Enter the total score of ${teamA}`);

// var teamB = prompt(`Enter the name of team B`);
// var teamBscore = prompt(`Enter the total score of ${teamB}`);

// if(teamAscore > teamBscore){
//     alert(`${teamA} wins the match!`);
// }
// else if(teamBscore > teamAscore){
//     alert(`${teamB} wins the match!`);
// }
// else{
//     alert(`It's a tie!`);
// }


//Q14

// Declare variables
// var str = prompt("Enter a string:");
// var num = parseInt(prompt("Enter a number:"));
// var bool = prompt("Enter a Boolean value (true/false):");

// bool = (bool.toLowerCase() === 'true');

// if (typeof str === 'string') {
//   alert("The variable 'str' is of type: " + typeof str);
// }

// if (typeof num === 'number') {
//   alert("The variable 'num' is of type: " + typeof num);
// }

// if (typeof bool === 'boolean') {
//   alert("The variable 'bool' is of type: " + typeof bool);
// }

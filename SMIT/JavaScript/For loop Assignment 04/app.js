//1. Write a proggram to display the message "Hello World" 5 times in your browser using for loop

// var message = ['Hello World'];

// for(var i = 0; i <= 4; i++){
//     document.write(message + " " + "<br>");
// }

//2. Write a program to print numeric counting from 1 to 10.

// for(var i = 1; i <=10; i++){
//     document.write(i + " " + "<br>");
// }

//3.Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

// var userinput = +prompt('Enter the number for the multiplication table.');
// var length = +prompt('Enter the length of the table.');

// for (var i = 1; i <= length; i++){
//     document.write(`${userinput} X ${i} = ${userinput * i} <br>`);
// }


//4. You have an array, A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"] write each element on new line with the help of for loop.

//   var array = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei'];

//   for (var i = 0; i < 5; i++){
//     document.write(array[i] + "<br>");
//   }

//5. Write a program to print items of the following array using for loop: fruits = ["apple", "banana", "mango", "orange", "strawberry"].

// var fruits = ['apple', 'banana', 'orange', 'mango', 'strawberry'];

// for(var i = 0; i <= 4; i++){
//     document.write("Elements at index" + i + " is " + fruits[i] + "<br>");
// }


//6.Write a program to  intialize an array of N items by using prompt. Where N is number of items as entered by the user.

// Ask the user for the number of items
// var N = +prompt("Enter the number of items:");

// // Create an empty array to store the items
// var array = [];

// for (var i = 0; i < N; i++) {
//     var item = prompt(`Enter item ${i + 1}:`);
//     array.push(item); // Add the item to the array
    
// }


// document.write("Initialized array:", array);


//7. Generate the following series in your browser. See  example output.

// a. Counting: 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
// for(var i = 1; i <= 15; i++){
//     document.write(i + "<br>");
// }

// b. Reverse counting: 10,9,8,7,6,5,4,3,2,1
// for(var i = 10; i > 0; i--){
//     document.write(i + "<br>");
// }

// c. Even: 0,2,4,6,8,10
// for(var i = 0; i <= 10; i = i+2){
//     document.write(i + "<br>");
// }

// d. Odd: 1,3,5,7,9,11,13,15
// for(var i = 1; i <=15; i = i+2){
//     document.write(i + "<br>");
// }

// e. Series: 2k,4k,6k,8k,10k,12k,14k,16k,18k,20k
// for(var i = 2; i <= 20; i = i+2){
//     document.write(i + " " + "K" + "<br>");
// }


//8.You have an array, A = ["cake", "apple pie", "cookie", "chips", "patties"] Write a program to enable "Search by user input" in an array. After searching, prompt the user whether the given item is found in the list or not. Example:


// var userinput = prompt("Wlecome to Kabjees Bakery. What do you want to order sir/ma'am?");

// var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];


// for(var i = 0; i < A.length; i++){

//     if(userinput === A[i]){
//         document.write(userinput + " is available in our bakery. ")

//         break;
//     }
// }

// if(i === A.length){
//     document.write("We are sorry! " + userinput + "is not available in our bakery. ");
// }


//9. Write a program to identitfy the largest number in the given array. A= [24, 53, 78, 91, 12]

// var A = [24, 53, 78, 91, 12];

// var largest = A[0];

// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];  
//     }
// }

// document.write(`Array: [${A}]<br>Largest number: ${largest}`);


//10. Write a program to identitfy the smallest number in the given array: A = [24. 53, 78, 91,12]

// var A = [24, 53, 78, 91, 12];

// var smallest = A[0];

// for(var i = 1; i < A.length; i++){
//     if(A[i] < smallest){
//         smallest = A[i];
//     }
// }

// document.write(`Array: [${A}]<br>Smallest number: ${smallest}`);


//11. Write a program to identitfy the  largest & the smallest number in the given array. A[24, 53, 78, 91. 12]

// var A = [24, 53, 78, 91, 12];

// var largest = A[0];
// var smallest = A[0];

// for(var i = 1; i < A.length; i++){
//     if(A[i] > largest){
//         largest = A[i];
//     }

//     if(A[i] < smallest){
//         smallest = A[i];
//     }
// }

// document.write(`Array: [${A}]<br>Largest number: ${largest}<br>Smallest number: ${smallest}`);


//12.Write a program to print multiples of 5 ranging 1 to 100 . 5,10,15,20 .... 100;

// for(var i =5; i <= 100; i = i+5){
//     document.write(i + " " + "<br>");
// }

//13. You have given the following arrays: var students = ["Ali", "Sami", "Taha", "Inam"]; Var scores= [58, 73, 89, 90]

// var students = ['Ali', 'Sami', 'Taha', 'Inam'];
// var scores = ['58', '73', '89', '90'];

// document.write(`
//     <table border="1">
//         <tr>
//             <th>Student Name</th>
//             <th>Score</th>
//         </tr>
// `);

// for (var i = 0; i < students.length; i++) {
//     document.write(`
//         <tr>
//             <td>${students[i]}</td>
//             <td>${scores[i]}</td>
//         </tr>
//     `);
// }


// document.write(`</table>`);

// var students = ['Ali', 'Sami', 'Taha', 'Inam'];
// var scores = [58, 73, 89, 90];

// document.write(`
//     <table border = "1">
//         <tr>
//             <th>Students Name</th>
//             <th>Scores</th>
//         </tr>`
// );

// for(var i = 0; i < students.length; i++){
//     document.write(`
//         <tr>
//             <td>${students[i]}</td>
//             <td>${scores[i]}</td>
//         </tr>`
//     )
// }

// document.write(`</table>`);


//14. Write a program that prints number from start of the array
// to desired stop value. Given array:
// var scores = [12, 45, 3, 22, 34, 50];
// (Hint: take stop value from user)
// E.g. if user gives 3 as input value print 12, 45, 3
// if user gives 34 as input value print 12, 45, 3, 22, 34


// var scores = [12, 45, 3, 22, 34, 50];

// var stopValue = parseInt(prompt("Enter a stop value:"));

// for (var i = 0; i < scores.length; i++) {
//     document.write(scores[i] + " "); 

//     if (scores[i] === stopValue) {
//         break; 
//     }
// }


//15. you have an array
//A = [[1,2,3] , [4,5,6] , [7,8,9]]
//Write each elements on new line with the help of nested for loops.

// var A = [
//           [1,2,3],
//           [4,5,6],
//           [7,8,9]
//         ];

// for(var i = 0; i < A.length; i++){
//     for(var j = 0; j < A[i].length; j++){
//         document.write(A[i][j] + " ");
//     }

//     document.write("<br>");
// }


//16.Write a program to repeatedly print the value of the variable num which is input by user: Value should be decreasing by 0.5 each time, as long as x Value remains positive.

// var num = 0;
 
// for(var i = num; i <= 5; i = i+0.5){
//     document.write(i);
//     for(var j = i; j <= 5; j = j+0.5){
//         document.write(" , ");
//         break;
//     }

// }


//17. The Even/Odd reporter
//Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even");


// for(var i = 0; i <= 20; i++){
//     for(var j = 0; j < 1; j++){
//         if (i %2 === 0){
//            document.write(`${i} is even <br>`);
//         }
//         else{
//             document.write(`${i} is odd <br>`);
//         }
//     }
// }


//18.Write a program to calculate the product of the odd integers from 1 to 7.





//19.Write a program that will write out a wedge of stars. The use will enter the initial number of stars, and the program will write outlines of star where each line has one few star than the previous line. Initial number of stars:7

// var initialStars = 7;

// for(var i = initialStars; i > 0; i-- ){
//     for (var j = 0; j < i; j++){
//         document.write('*');
//     }

//     document.write("<br>");
// }


//20.Write a program to create the following patterns in your browser. Take number of lines as an input.
// a.
// **** 
// **** 
// **** 
// **** 

// for (var i = 0; i < 4; i++){

//     for(var j = 0; j < 5; j++){
//         document.write('*');
//     }

//     document.write("<br>");
// }

// b.
// *
// **
// ***
// ****
// *****

// for(var i = 1; i <= 5; i++){

//     for(var j = 1; j <= i; j++){
//         document.write('*');
//     }

//     document.write("<br>");
// }

// c.
// *****
// ****
// ***
// **
// *

// for(var i = 5; i > 0; i--){

//     for(var j = 1; j <= i; j++){
//         document.write('*');
//     }

//     document.write("<br>");
// }

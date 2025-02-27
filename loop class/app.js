 // there are three basic loops
     //1 for loop  there are three stages:
    // 1. declear and intialization of variables
    // 2. condtion
    //  3. increament/decreament
    // 2 while loop
    // 3 do while loop


// for (var i = 1; i <= 20; i++){
//     document.write(`${i} <br>`);
// }     

// how to find the even number by the loop

// for (var i = 0; i <= 30; i += 2){
//     document.write(`${i} <br>`);
// }

// the even number is reverse by the loop
// for (var i = 30; i >= 0; i -= 2){
//     document.write(`${i} <br>`);
// }


// how to find the odd number by the for loop
// for (var i = 1; i <= 30; i += 2){
//     document.write(`${i} <br>`);
// }

// the even number is reverse by the for loop
// for(var i = 29; i >= 0; i -= 2){
//     document.write(`${i} <br>`);
// }

// for (var i = 1; i <= 30; i++ ){
//     document.write(`${i}.  Ali <br> `);
// }


var name = ["Ali", "Ahmed", "Javed", "Fareed", "Zia", "Abrar", "Abdu Rafay"];

for(var i = 0; i < name.length; i++){
    document.write(`${name} [i] <br>`);
}
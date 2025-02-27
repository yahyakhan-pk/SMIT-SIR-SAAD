// Q1
        //   var studentName = [ ];


// Q2
        //   var studentName = new Array();



// Q3 String Array:
        //   var fruits = [`Apple`, `Banana`, `Mango`, `Malta`, `Grapes`]
    
        //   console.log(fruits);



// Q4 Number Array:
        //   var numberArray = [5, 10, 15, 20, 25, 30];

        //   console.log(numberArray);



// Q5 Boolean Array:
       //     var booleanArray = [true, false, true, false];

       //     console.log(booleanArray);



// Q6 Mixed Array:
        //    var mixedArray = [`Ali`, 15, true, null];

        //    console.log(mixedArray);


// Q7
        //    var mobileNetwork = [`telenor`, `zong`, `jazz`, `ufone`, `scom`];

        //    console.log(`All network are available in pakistan : ${mobileNetwork}`);


// Q8
        // var education = [`SSC`, `HSC`, `BSC`, `BCOM`, `MS`,`M. Phil`, `PhD`];

        //  document.write(
        //    `
        //    <h3>Qualifications:</h3>

        //    <ol>
        //    <li>SSC</li>
        //    <li>HSC</li>
        //    <li>BSC</li>
        //    <li>BCOM</li>
        //    <li>MS</li>
        //    <li>M. Phil</li>
        //    <li>PhD</li>
        //    </ol>
        //    `
        //  )


// Q9
    //   var movies = [`Avengers: Age of Ultron`, `Spectre`, `Jurassic World`, `Inside Out`];
        
    //   document.write(
    //     `<h3>Top Movies In 2015:</h3>

    //     <ol>
    //         <li>Avengers: Age of Ultron</li>
    //         <li>Spectre</li>
    //         <li>Jurassic World</li>
    //         <li>Inside Out</li>
    //     </ol>
        
        
    //     <h3>Length of the array : ${movies.length}</h3>
    //     `
    //   )


// Q10 
        // var cars = [`Audi`, `Lexus`, `Volvo`, `Ford`];

        // document.write(
        //     `<h3>Favorite Cars</h3>
        //       <h4>${cars}</h4>

        //     <p>First index of the array : 0</p>
        //     <p>Car at first index of the array :${cars[0]}</p>
        //     <p>Last index of the array: 3</p>
        //     <p>Car at last index of the array: ${cars[3]}</p>

        //     `
        // )


// Q11
    //   var studentNames = [`Ali`, `Jamal`, `Raffay`];
    //   var studentScores = [480, 320, 230];


    //   var totalMarks = 500;

    //   document.write(
    //     `<p>Score of ${studentNames[0]} ${studentScores[0]}. Percentage: 96%</p>
    //     <p>Score of ${studentNames[1]} ${studentScores[1]}. Percentage: 64%</p>
    //     <p>Score of ${studentNames[2]}. ${studentScores[1]}. Percentage: 46%</p>`
    //   )


// Q12
    //   var colors = [`red`, `blue`, `green`, `black`, `purple`,`yellow`, `white`];

    //   document.write(`Initial colors of array: ${colors}<br>`);

    //a Add a color add the beginning of the array
    // var userinput = prompt(`What color would you like to add to the beginning?`);
    //   colors.unshift(userinput);
    //   document.write(`Updated Colors after adding to the begginnig: ${colors}`)

    //b Add a color add the end of the array
    // var userinput = prompt(`What color would you like to add to the end?`)
    // colors.push(userinput);
    // document.write(`Updated Colors after adding to the end: ${colors}`);

    //c Add two colors to the begginning to the array
    // var color1 = prompt(`Add to first color to the beginning:`);
    // var color2 = prompt(`Add to second color to the beginning:`);

    // colors.unshift(color1, color2);
    // document.write(`Updated Colors after adding two colors to the begginning: ${colors}`)

    //d Delete the first color in the array
    // colors.shift();
    // document.write(`Updated Colors after deleting the first color: ${colors}`);

    //e Delete the last color in the array
    // colors.pop();
    // document.write(`Updated Colors after deleting the last color: ${colors}`);

    //f Ask the user where to add a color and add it
    // var indexToAdd = prompt(`At which index would you like to add a color?`);
    // var colorToAdd = prompt(`What color would you like to add at index`);
    // colors.splice(indexToAdd, 0, colorToAdd);
    // document.write(`Updated Colors after adding at index: ${indexToAdd},${colors}`);

    //g Ask the user where to delete colors from and how many to delete from the array
    // var indexToDelete = prompt(`At which index would you like to delete colors?`);
    // var colorsToDelete = prompt(`How many colors would you like to delete?`);
    // colors.splice(indexToDelete, colorsToDelete);
    // document.write(`Updated Colors after deleting: ${colorsToDelete} colors from index ${indexToDelete}: ${colors}`);


//Q13 Array of student scores
    // var studentScores = [90, 46, 77, 45, 87, 56, 95, 34];

    // studentScores.sort((a, b) => a - b);
    // document.write(`Sorted student scores in ascending order: ${studentScores}`); 


//Q14
    // var fruits = [`strawberry`, `apple`, `orange`, `banana`];

    // // fruits.sort();
    // document.write(
    //     `<h3>Fruits List:</h3>
    //     <p>${fruits}</p>


    //     <h3>Ordered Fruits List:</h3>
    //     <p>${fruits.sort()}</p>`
    // )


//Q15 
    // var cities = [`Pakistan`, `India`, `London`, `United State`, `United Kingdom`, `Suadi Arabia`];

    // var selectedCities = [];

    // selectedCities = cities.slice(1, 4);
    // // document.write(`Selected Cities: ${selectedCities}`);

    // document.write(
    //     `
    //     <h3>Cities list:</h3>
    //     <p>${cities}</p>


    //     <h3>Selected Cities list:</h3>
    //     <p>${selectedCities}</p>
    //     `
    // )


//Q16
    //  var arr = [`This, is, my, cat`];
    //  var res = arr.join(",");

    // document.write(

    //    `<h3>Array:</h3>
    //     <p>${arr}</p>


    //     <h3>String:</h3>
    //     <p>${res}</p>`
    // )


//Q17
//      var fifoArray = [];

//      fifoArray.push ("keyboard");
//      fifoArray.push ("mouse");
//      fifoArray.push ("printer");
//      fifoArray.push ("monitor");

//      document.write(
//        ` <h3>Devices</h3>
//         <h4>${fifoArray}</h4>

//         <p>Out: <br> ${fifoArray[0]}</p>
//         <p>Out: <br> ${fifoArray[1]}</p>
//         <p>Out: <br> ${fifoArray[2]}</p>
//         <p>Out: <br> ${fifoArray[3]}</p>
//         `
//      )



//Q18
//      var fifoArray = [];

//      fifoArray.push("keyboard");
//      fifoArray.push("mouse");
//      fifoArray.push("printer");
//      fifoArray.push("monitor");

//      document.write(
//        ` <h3>Devices</h3>
//         <h4>${fifoArray}</h4>

//         <p>Out: <br> ${fifoArray[3]}</p>
//         <p>Out: <br> ${fifoArray[2]}</p>
//         <p>Out: <br> ${fifoArray[1]}</p>
//         <p>Out: <br> ${fifoArray[0]}</p>
//         `
//      )


//Q19
//    var phone = [`Apple, Samsung, Motrola, Nokia, Sony & Haier`];
   
//    document.write(
//         `
//         <select>
//                 <option>Apple</option>
//         </select>
        
        
//         <select>
//                 <option>Apple</option>
//                 <option>Samsung</option>
//                 <option>Motrola</option>
//                 <option>Nokia</option>
//                 <option>Sony</option>
//         </select>
//         `
        
//    )


//Q20
//      var multiArray = [
//         []
//      ];

//Q21
// var multiArray = [
//         [0, 1, 2, 3],
//         [1, 0, 1, 2], 
//         [2, 1, 0, 1] 
//     ];
    
//     document.write(multiArray[0].join(' ') + '<br>');
//     document.write(multiArray[1].join(' ') + '<br>');
//     document.write(multiArray[2].join(' ') + '<br>');
    
//     var multiArray = [
//         [0, 1, 2, 3],
//         [1, 0, 1, 2],
//         [2, 1, 0, 1]
//     ];

//     document.write(`${multiArray[0].join(` `)} <br>`);
//     document.write(`${multiArray[1].join(` `)} <br>`);
//     document.write(`${multiArray[2].join(` `)} <br>`);
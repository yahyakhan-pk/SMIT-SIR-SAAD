            // Q11.	Write a program that takes a positive integer from user & display the following in your browser. 
            //a.	number 
            //b.	round off value of the number 
            //c.	floor value of the number 
            
            // let number = +prompt("Enter a positvie integer number");

            // if(number > 0) {
            //     document.write(`<h4>Number: ${number}</h4>`);
            //     document.write(`<h4>Round off Value: ${Math.round(number)}</h4>`)
            //     document.write(`<h4>Floor Value: ${Math.floor(number)}</h4>`);
            // }
            // else{
            //     document.write(`<h4>Please enter a valid integers number</h4>`);
            // }


            // Q22.	Write a program that takes a negative integer from user & display the following in your browser. 
            //a.	number 
            //b.	round off value of the number 
            //c.	floor value of the number 

            // let number = +prompt("Enter a negative integers number")

            // if(!isNaN(number)) {
            //     document.write(`<h4>Number: ${number}</h4>`)
            //     document.write(`<h4>Round off Value: ${Math.round(number)}</h4>`)
            //     document.write(`<h4>Floor Value: ${Math.floor(number)}</h4>`);
            // }
            // else{
            //    document.write(`<h4>Please enter a valid integers number</h4>`);
            //  }
 

            // Q3.	Write a program that takes a positive floating point number from user & display the following in your browser. 
            //a.	number 
            //b.	round off value of the number 
            //c.    floor value of the number
            //d.    ceil value of the number

            // let userInp = +prompt("Enter a pasitive floating-point number:")

            // if(!isNaN(userInp) && userInp > 0) {
            //     document.write(`<h4>Number: ${userInp}</h4>`)
            //     document.write(`<h4>Round off Value: ${Math.round(userInp)}</h4>`)
            //     document.write(`<h4>Floor Value: ${Math.floor(userInp)}</h4>`)
            //     document.write(`<h4>Ceil Value: ${Math.floor(userInp)}</h4>`)
            // }
            // else{
            //     alert("Please enter a valid postive floating-point number.")
            // }
 


            // Q4.	Write a program that takes a positive floating point number from user & display the following in your browser. 
            //a.	number 
            //b.	round off value of the number 
            //c.    floor value of the number
            //d.    ceil value of the number

            // let userInp = +prompt("Enter a pasitive floating-point number:")

            // if(!isNaN(userInp)) {
            //     document.write(`<h4>Number: ${userInp}</h4>`)
            //     document.write(`<h4>Round off Value: ${Math.round(userInp)}</h4>`)
            //     document.write(`<h4>Floor Value: ${Math.floor(userInp)}</h4>`)
            //     document.write(`<h4>Ceil Value: ${Math.floor(userInp)}</h4>`)
            // }
            // else{
            //     alert("Please enter a valid postive floating-point number.")
            // }
 

            // Q5.	Write a program that displays the absolute value of a number. 
            //E.g. absolute value of -4 is 4 & absolute value of 5 is 5
            
            // let number = +prompt("Enter any number")

            // let absValue = +prompt(Math.abs(number))

            // document.write(`<h4>The absolute value of ${number} is ${absValue}</h4>`)
  

            // Q6. 	Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser. 

            // let diceValue = Math.floor(Math.random() * 6) + 1;
            // let userInp = prompt("Press OK to roll the dice")

            // document.write(`Random dice value: ${diceValue}`)

            
            // Q7.	Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser. 

            // let userInp = prompt("Enter any key to toss the coin")

            // if(userInp !== null) {
            //     let toss = Math.random() < 0.5 ? "Heads" : "Tails"
            //     document.write(`Random coin value: ${toss}`)
            // }
            // else{
            //     doucment.write(`Please enter a valid key!`)
            // }


            // Q8.	Write a program that shows a random number between 1 and 100 in your browser. 

            // let userInp = +prompt("Create a random number between 1 to 100!")

            // if(userInp > 100) {
            //     document.write(`your number is greater than 100!`)
            // }
            // else{
            //     for (let i = 0; i <= userInp; i++) {
            //         let randomNumber = Math.floor(Math.random() * 100) + 1
            //         document.write(`Random number between 1 and 100: ${i} : ${randomNumber} <br>`)
            //     }
            // }



            // Q9.	Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: 
            //a.	50 
            //b.	50kgs
            //b.	50.3kgs 
            //b.	50.3kilogram
            
            // let input = parseFloat(prompt(`Enter your weight`))

            // if(!isNaN(input)) {
            //     document.write(`The weight of user is: ${input} kg`)
            // }
            // else{
            //     document.write(`Invalid input: Please enter a valid weight`)
            // }


            // Q10.	Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user. 
 
            // let secretNumber = Math.floor(Math.random() * 10) + 1

            // let userGuess = +prompt(`Guess the number between 1 and 10`)

            // if(userGuess === secretNumber) {
            //     document.write(`Congratulations! You guessed the correct number.`)
            // }
            // else{
            //     alert(`Sorry! the correct number was ${secretNumber}, try again!`)
            // }


            // Q 11. Write a program that displays current date and time in your browser.
            
            // let currentDateTime = new Date()
            // document.write(currentDateTime)


            // Q12.	Write a program that alerts the current month in words. For example December. 

            //   let months = ['January', 'Februray', 'March', 'April', 'May', 'June', 'July', 'Agust',          'September', 'October', 'November', 'December']

            //   let currentMonth = new Date().getMonth();
            //   alert(`Month: ${months[currentMonth]}`)
              

            // Q13. Write a program that alerts the first 3 letters of the current day, for example if today is sunday then alert will shown sun.

            // let days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
            // let today = new Date().getDay()

            // document.write(days[today])


            // Q14. Write a program that displays a message "It's Fun day" if its Saturday or Sunday today.

            //    let today = new Date().getDay()

            //    if(today === 0 || today === 1){
            //         document.write("It's Fun day")
            //     }
            //    else{
            //         document.write("It's not a Fun day")
            //     }


            // Q15. Write a program that shows the message "First fifteen days of the month" if the date is less than 16th of the month else shows "Last days of the month"

            // let days = new Date().getDate()

            // if (days < 16) {
            //     document.write('Frist fifteen days of the month')
            // }
            // else{
            //     document.write('Last days of the month')
            // }


            // Q16. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand.Use any variable you like to represent the Date object.
            
            // let currentDate = new Date();


            // let millisecondsSinceEpoch = currentDate.getTime();


            // let minutesSinceEpoch = millisecondsSinceEpoch / (1000 * 60);


            // document.write(minutesSinceEpoch);


            // Q17.	Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 

            // let now = new Date()
            // let hours = now.getHours()

            // if(hours > 12){
            //     alert("It's AM")
            // }else{
            //     alert("It's PM")
            // }



            // Q18.	Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate 
            
            //    var laterDate = new Date(2024, 11, 31);

            //    document.write(`<b>Later Date:</b> ${laterDate}`);


            // Q19.	Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?  Note: 1st Ramadan was on June 18, 2015 

            // var ramadanStart = new Date(2015, 2, 11); 

            // var today = new Date();

            // var diffInMilliseconds = today - ramadanStart;

            // var daysPast = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
            // alert("Number of days past since 1st Ramadan 2024: " + daysPast);


            // Q 20.	Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.  

            //   let referenceDate = new Date()
            //   let startDate = new Date("2015-01-01T00:00:00")

            //   let elapsedSeconds = Math.floor((referenceDate - startDate) / 1000)
            //   document.write(`Elapsed Second from 2015-01-01 to reference date: ${elapsedSeconds}`)


            // Q21.	Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser. 

            //    let currentDate = new Date()
            //    let currentHour = currentDate.getHours()

            //    currentDate.setHours(currentHour + 1)
            //    document.write(`Updated Date and Time: ${currentDate}`)



            // Q22.	Write a program that creates a date object and show the date in an alert box that is reset to 100 years back? 

                // let currentDate = new Date();

                // currentDate.setFullYear(currentDate.getFullYear() - 100);

                // alert("Date 100 years ago: " + currentDate.toDateString());


            // Q23.	Write a program to ask the user about his age. Calculate and show his birth year in your browser. 

                // let age = prompt("Please enter your age:");
                // let currentYear = new Date().getFullYear();
                // let birthYear = currentYear - age;

                // document.write(`You were born in the year: ${birthYear}`);


























































































































































































// var color = prompt("Enter any color.")

// switch(color) {
//     case color:
//         document.body.style.backgroundColor = color
//         break

//         // not working by default see later
//     // default:
//     //     document.body.style.backgroundColor = 'black'
// }


// While loop

// var i = 1

// while(i < 11) {
//     document.write(i + "<br>")
//     i++
// }


// do while loop

// var num = 10

// do{
//     document.write(num)
//     num++
// }
// while(num < 10)

// using prompt for do while loop

// var prompt = +prompt("Enter you table!")
// var limit = +prompt("Enter your limit number!")
// var num = 1;

// do{
//     document.write(`${prompt} x ${num} = ${num * prompt} <br>`)
//     num++
// }while(num <= limit);



var myNum = 10

var userInp = +prompt("Enter any number")

if( userInp==myNum ){
    document.write(`I guess the ${myNum} and you guess the ${userInp} you are win`)
}

else if (userInp!=myNum){
    document.write(`I guess the ${myNum} and you guess the ${userInp} you are loss`)
}

else if(userInp==9){
    document.write(`I guess the ${myNum} and you guess the ${userInp} closed enough`)
}


else if(userInp==11){
    document.write(`I guess the ${myNum} and you guess the ${userInp} closed enough`)
}


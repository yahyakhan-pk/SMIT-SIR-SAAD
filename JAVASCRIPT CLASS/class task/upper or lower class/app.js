

var cars = ['audi', 'mehran', 'Bmw', 'Foxi', 'Fx', 'Corrola']

var user = prompt('Enter any car!')

// var first = user[i].slice(0,1).toUpperCase()
// var second = user[i].slice(1).toLowerCase()
// var final = first + second

var a = user.slice(0,1).toLowerCase()
var b = user.slice(1).toUpperCase()
var result = a + b

let match = false


for(var i = 0; i < cars.length; i++){
    if(result == cars[i]){
       match = true;
       document.write(result + " " + "found")
       break
    }
}

if(match == false){
    document.write(result  + " " + "not found!")
}
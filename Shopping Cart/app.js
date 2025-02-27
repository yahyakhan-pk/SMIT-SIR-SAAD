
var item1 =  prompt("what is your first item")
var item1Price = +(prompt("Enter your price"));
var item1Quantity = +(prompt("Enter your Qauntity"));

var item2 =  prompt("what is your second item")
var item2Price = +(prompt("Enter your second items price"));
var item2Quantity = +(prompt("Enter your items 2 Qauntity"));



var item3 =  prompt("what is your third item")
var item3Price = +(prompt("Enter your third items price"));
var item3Quantity = +(prompt("Enter your items 3 Qauntity"));


var item4 =  prompt("what is your fourth item")
var item4Price = +(prompt("Enter your fourth items price"));
var item4Quantity = +(prompt("Enter your items 4 Qauntity"));

var dis;
var total = item1Price + item2Price + item3Price + item4Price;
var discount;


if(total >= 10000){
    discount = total * 10 / 100;
    dis = ( `discount 10%`)
}

else if(total >= 9000){
    discount = total * 9 / 100;
    dis = ( `discount 9%`)
}

else if(total >= 8000){
    discount = total * 8 / 100;
    dis = ( `discount 8%`)
}


else if(total >= 7000){
    discount = total * 7 / 100;
    dis = (`discount 7%`)
}

else if(total >= 6000){
    discount = total * 6 / 100;
    dis = ( `discount 6%`)
}


else if(total >= 5000){
    discount = total * 5 / 100;
    dis = ( `discount 5%`)
}

else if(total >= 4000){
    discount = total * 4 / 100;
    dis = ( `discount 4%`)
}

else if(total >= 3000){
    discount = total * 3 / 100;
    dis = ( `discount 3%`)
}

else{
    discount = total;
    dis = ( `NO Discount`)
}

var payable = total -discount;
var charged = +prompt(`Enter recived amount`);
var baqiya = charged -  payable;

document.write(

    
    `<center>   <table border="3">

        <tr>
            <th>${item1}</th>
            <th>${item2}</th>
            <th>${item3}</th>
            <th>${item4}</th>
            <th>item1Quantity</th>
            <th>item2Quantity</th>
            <th>item3Quantity</th>
            <th>item4Quantity</th>
            <th>Total Amount</th>
            <th>Discount</th>
            <th>payable Amount</th>
            <th>charged Amount</th>
            <th>Return Amount</th>
        </tr>

        <tr>
            <th>${item1Price}</th>
            <th>${item2Price}</th>
            <th>${item3Price}</th>
            <th>${item4Price}</th>
            <th>${item1Quantity}</th>
            <th>${item2Quantity}</th>
            <th>${item3Quantity}</th>
            <th>${item4Quantity}</th>
            <th>${total}</th>
            <th>${discount}</th>
            <th>${payable}</th>
            <th>${charged}</th>
            <th>${baqiya}</th>
        </tr>


    </table>  </center>`
)



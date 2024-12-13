/* 2.create a program where the user enters the amount of their purchase.
[condition :
1. above Rs.100 : 20% discount
2. between 50 to 100 : 10% discount
3. below 50 : no discount] */

let price = prompt("Enter your price");
// let price = 49;

if(price > 100){
    let discount = (20/100) *price;
    let finalPrice = price - discount;
    console.log(`You will get Rs. ${discount} discount`);
    console.log(`Final price is Rs ${finalPrice}`);
}
else if(price >=50 && price < 100){
    let discount = (10/100) *price;
    let finalPrice = price - discount;
    console.log(`You will get Rs. ${discount} discount`);
    console.log(`Final price is Rs ${finalPrice}`);
}
else if(price < 50){
    console.log(`No discount under Rs.50 you have to paid whole Ammount Rs. ${price}`);
}
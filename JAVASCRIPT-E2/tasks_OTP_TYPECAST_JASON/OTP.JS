
// let otp=Math.floor(Math.random()*1000)
// alert(`your otp is ${otp}`);

// let user=prompt("enter otp here")
// if(otp==user){
//     console.log("correct otp");
// }
// else{
//     console.log("incorrect otp");
// }


//!  type casting 

// let num=123.454
// let n1=parseInt(num)
// console.log(n1);
// let n2=parseFloat(num)
// console.log(n2);
// let n3=num.toPrecision(4)
// console.log(n3);
// let n4=num.toFixed(2)
// console.log(n4);
// let n5=Number.isInteger(num)
// console.log(n5);

//!   JSON OBJECT 

// let emp={
//     name:"more",
//     age:23,
// }

// //!    stringify will convert javascript object to JSON formate
// let a=JSON.stringify(emp)
// console.log(a);

// //!   parse will convert JASON TO javascript objrct 
// let b=JSON.parse(a)
// console.log(b);


 let n1=Math.random()*10000
 let otp=Math.floor(n1);
alert(otp)
 let user=prompt("enter otp")
 if(otp==user){
    console.log("true");
 }
 else{
    console.log("false");
 }
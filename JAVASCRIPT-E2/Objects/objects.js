

//     //!         1. !Iteration way

//   let emp={
//     name:"Abdullah",
//     location:"pune",
//     pin_code:"411048"
// }

// console.log(emp);
// console.log(emp.name);
// console.log(emp.pin_code);


    // !                   object destructuring

// const {name1,location1,pin_code1}=emp;
// console.log(name1);
// console.log(pin_code1);

//!          2. Inbuilt object construction.........

// const emp1=new Object()
// emp1.name="Jspider";
// emp1.place="pune"
// console.log(emp1)


   //!          3.  !Construction function 

// function Cake(name,price,location){
//     this.name=name;
//     this.price=price;
//     this.location=location;
// }

// let c1=new Cake("IceCake",150,"Hadapser");
// console.log(c1);
// let c2=new Cake("Ice",100,"Hadapsar");
// console.log(c2);


//!               4.  using class keywork
//   introduce in es-6 version
//   before in es-5 let and const introduce


// class student{
//     constructor(name,id){
//         this.name=name;
//         this.id=id;
//     }
// }
// let s1=new student("More",101)
// console.log(s1);

// iterator way


//!....................task01........................");

// let course={
//     courseId:1,
//     courseName:"java full stack",
//     price:29999,
//     branch:["hadapsar","deccan","wakad"],
//     company:"QSpiders"
// }

// course.branch.map(branch=>{
// console.log(branch);
// })
//  object constractor


// **
// * let task=course.branch.map(task=>{
//     console.log(task);
//     })
 
//!console.log("........................................................");
//!console.log("16/07/24");
// let emp={
//     name:"Abdullah",
//     location:"pune",
//     pin_code:"411048"
// }
// let emp1={
//     name:"Abdullah",
//     location:"pune",
//     pin_code:"411048"
// }
// if (emp==emp1) {
//     console.log("same only");
// }
// else{
//     console.log("same same but differ in address");
// }

//! ........................................................");

// function Cake(name,price,location){
//     this.name=name;
//     this.price=price;
//     this.location=location;
// }
// let c1=new Cake("IceCake",150,"Hadapser");
// //! console.log(c1);
// let c2=new Cake("Ice",100,"Hadapsar");
// console.log(c2);

// Cake.prototype.quantity=("1kg");
// console.log(c1.quantity);
// console.log(c2.quantity);

// c1.prototype.quantity="1kg" ; //!   not possible
// console.log(c1.quantity);

// c1__proto__quantity="1kg";
// console.log(c2);

//!       ..........................................");

// let student={
//     first_name:"praveen",
//    " last name":"more"
// }

// console.log(student["first_name"]);
// console.log(student["last name"]);

//! ..................................task........");

// let a=10;

// let obj={
// 10:20
// }
// console.log(obj);

// function* gn(){
//     for (let a =101; a <=200; a++) {
//         yield a;
        
//     }
// }
// const res=gen();
// for (const a of gen){
//     console.log(a);
// }
   
// function* numberGenerator() {
//     for (let number = 101; number <= 200; number++) {
//       yield number;}}

//   const generator = numberGenerator();
//   for (let value of generator) {
//     console.log(value);
//   }

//!......................                            ..17/7/24  wed.................................


let prod={
    name:"raj",
    id:10
}
//! 1.print only key of object 
var a =Object.keys(prod);
console.log(a);


//! to print only values
// var a =Object.values(prod);
// console.log(a);

//!to we can't update and insert values
Object.seal(prod);

//! return true if freeze else or false 
// var b=Object.isFrozen(prod) 
// console.log(b);

//! to add new 

prod.name="black"
prod.brand="puma"

console.log(prod);

// console.log(prod);
// console.log(a);

//! seal()  we can update but not insert the new values
// Object.seal(prod)

//!return true or fales
// var a =Object.isSealed(prod)
// prod.colour="black"
// prod.brand="puma"
// console.log(prod)
// console.log(a);

// var prod={
//     brand:"Addidas",
//     price:3000,
//     type:"shoes"
// }

//! create a copy and we can make changes in that object aslso
// var prod1=Object.assign(prod);
// prod1.brand="Puma"
// console.log(prod);
// console.log(prod1);


//! ..................to cheak date and day................

// var ref=new Date();
// console.log(ref);
// var year=ref.getFullYear()
// console.log(year)
// var day=ref.getDay()
// console.log(day);
// var month=ref.getMonth()
// console.log(month);
// var date=ref.getDate()
// console.log(date);
// var hour=ref.getHours();
// console.log(hour);
// var min=ref.getMinutes()
// console.log(min);
// var mili=ref.getMilliseconds();
// console.log(mili);

//! ..........................18/07/24..........................

//! .......................maths........................... 
    

//! ..... pt value of pai
// var a=Math.PI;
// console.log(a);
// //! print hole number only 123
// var a=123.9999
// var b=Math.floor(a)
// console.log(b);  

// //! print 123 +1 if >=0.5
// var a=123.12
// var b=Math.ceil(a);
// console.log(b);

// let res=Math.random()*10000
// let otp=Math.floor(res)
//  alert(`otp is ${otp}`)
//  let user=prompt("ENTER OTP")
//  if (user==otp) {
//     alert("succeddfullt login")
//  }
//  else{
//   alert("WRONG OTP")
//  }

// //! generate random number > 1
// var a=Math.randon()
// console.log(a);
// //! to generate 4 gigit otp
// let b=Math.floor(a)
// console.log(b);

// //!print min number only
// var a=Math.min(5,4,6,7,1)
// console.log(a);

// //! print max number
// var a=Math.max(5,4,6,7,1)
// console.log(a);

// //! cube root 27 is=3
// var a =Math.cbrt(27)
// console.log(a);

// var a=Math.sqrt(4)
// console.log(a);

// var a=Math.pow(3,3)
// console.log(a);

//! .........................for in.........................

// var str="jspiders";
// for(let i in str){   //!  string
//     console.log(i);
// }

// var arr1=["more","sailesh","farhan"]   //!...Array
// for(let i in arr1){
//     console.log(i);
// }

// var emp={
//     name:"more",     //!  ..  object
//     id:102
// }
// for(let i in emp){
//     console.log(i);
// }



// //!..................for of............fw-code

// var str2="jspiders";
// for(let i of str2){   //!  string
//     console.log(i);
// }

// var arr2=["more","sailesh","farhan"]   //!...Array
// for(let i of arr2){
//     console.log(i);
// }

// var emp3={
//     name:"more",     //!  ..  object
//     id:102
// }
// for(let i of emp3){
//     console.log(i);
// }


//!.................................ForEach............................

// var str="jspiders"
// var itr=str.split();
// itr.forEach((val)=>{      //!  String 
//     console.log(val);
// })

// var arr=["html","css","js"]
// arr.forEach((val)=>{         //!  array
//     console.log(val);
// })

// var emp={
//     name:"more",
//     id:102
// }
// var a=Object.values(emp)    //!  object
// a.forEach(()=>{
//     console.log(val);
// })










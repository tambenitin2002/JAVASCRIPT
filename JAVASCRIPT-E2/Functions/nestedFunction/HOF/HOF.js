//!call back function

// function cd(add){
//     console.log(add);
// }
// addition(10,20,);

// //!  HOF
// function addition(a,b,cd){
//     var add=(a+b)
//     return cd(add)
// }
//! in HOF we can padd any variable as argument   AND  the same task will going to perform in HOF ..
                                                         //!  as the logic we pass in  CALL BACK FUNCTION.
function add(a,b){
    console.log(a*b);   
}
add(10,5)
function HOF(num1,num2,any){
    any(num1,num2)
}
HOF(20,20,add)

//! named function
// function add(a,b){
// console.log(a+b);
// }
// add(10,20)

//! Anonymus function
            // var noname= function (a,b){
           //console.log(a+b);
           // }
           // noname(10,20)

//!  arrow function                            
            //  const arrow =(a,b) =>{
            //     console.log(a+b);
            //  }
            // arrow(10,20)    
            
 //! generator function
            // function* gernF(){
            //     yield "hi"
            //     yield "hello"
            // }
            // const c1= gernF();
            // console.log(c1.next().value);
            // console.log(c1.next().value);

              

           

        
            
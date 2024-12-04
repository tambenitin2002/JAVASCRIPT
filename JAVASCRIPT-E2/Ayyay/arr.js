
//!  map method
// let arr=["html", "css", "js", "tailwind css", "react"]
// let a=arr.map((val)=>{
//     console.log(val);
// })
// console.log(arr);

    //! filter()                
// let arr=[23,45,87,90]  
// let arr1=arr.filter((val=>{
//     return val>30;
// }))
// console.log(arr);
// console.log(arr1);

//! some()
// let arr=[23,45,87,90]
// let arr1=arr.some((val=>{
//     return val>45
// }))
// console.log(arr1);

//! every()
// let arr=[12,45,87,90]
// let arr1=arr.every((val=>{
//     return val>11
// }))
// console.log(arr1);

//! indexOf()
// let arr=["html", "css", "js", "css", "tailwind css", "react", "css"]
// let arr1=arr.indexOf("css")
// console.log(arr1);

//! lastIndexOf()
// let arr=["html", "css", "js", "css", "tailwind css", "react", "css"]
// let arr1=arr.lastIndexOf("css")
// console.log(arr1);

//!
// let arr=["html", "css", "js", "css", "tailwind css", "react", "css"]
// let arr1=arr.lastIndexOf("css",5)
// console.log(arr1);

//! flat()
// let arr=["1", "4", "5", ["4","8","7"],"4"]
// let arr1=arr.flat()
// console.log(arr1);

//! reduce()
let arr=[1,2,3,4,5];
let arr1=arr.reduce((accumulator,currentValue)=>accumulator*currentValue,1)
console.log(arr1);


// let arr=[1,2,3,4,5];
// let arr1=arr.reduce((accumulator,currentValue)=>accumulator+currentValue, 0)
// console.log(arr1);

//! splice()
// let arr=["html", "css", "js", "css", "tailwind css", "react", "css"]
// arr.splice(2,1,"sql", "python");
// console.log(arr);



let  ar=["html","css","js","sql"]
console.log(ar);

//! push()   -- add to last array
ar.push("java","spring")
console.log(ar);

//! pop() -- remove last array
ar.pop()
console.log(ar);

//! shift()  -- remove 1st array
ar.shift()
console.log(ar);

//! unshift()   -- add from first array
ar.unshift("react","angular")
console.log(ar);

//! some() -- will check the array one by one and if any  one condition is true the it RETURN ---True
let num=[1,5,6,8,10]
 let res=num.some((val)=>{
return val>10          // -- here not one condition is true.. 
 })
 console.log(res);

 //! every()
 let num2=[8,5,7,8,9,6]
 let res2=num2.every((val1)=>{
    return val1 >3   //  -- condition satified
 })
 console.log(res2);

 //! filter  -- filter the array as per condition

let fil=num2.filter((val3)=>{
    return val3 >=7
})
console.log(fil);

//!  reverse()  -- reverse the array
 let num3=fil.reverse()
 console.log(num3);




 let aray=["html","css","javascript","react"]
console.log(aray);

 //! map()   = to fetch array one by one 
 let res1=aray.map((val)=>{
      console.log(val);  
 })

  //! slice(st,end) ---    st-starting(includive)  and end (excludive)
  // it will not effect the original array
 let a=["html","css","javascript","react"]
     //   0      1       2          3
 //!      -4     -3    -2         -1 

 //eg 01
 let eg1=a.slice(1)
 console.log(eg1);
 console.log(a);
 

//eg02
 let eg2=a.slice(2,3)
 console.log(eg2);

 //eg03
 let eg3=a.slice(-4,3)
 console.log(eg3);

 //eg04
 let eg4=a.slice(-3,-2)
 console.log(eg4);

 //eg05
 let eg5=a.slice(-3,2)
 console.log(eg5);

 //eg0
 let eg6=a.slice(-3,-1)
 console.log(eg6);


 //! splice(start,deleteCount, ADD Item1,item2,.......)
 console.log("👉👉👉splice ");

 let b=["html","css","javascript","react"]
 console.log(b);
 
 let s1=b.splice(1,2);  // it will remove element from 1 and 2 elements will get removed
 console.log(s1);   // it will retuen these 2 elements in console //! ["css","javascript"]
 console.log(b);    //  now the original array will contain only remaining array //!  ["html","react"]

 let c=["html","css","javascript","react"]
 let s2=c.splice(1,1,"sql","java")
 console.log(s2)
 console.log(c);

 //! same example 
 let d=["html","css","javascript","react"]
 console.log(d);

 let chatGpt=d.splice(-1,2)
 console.log(chatGpt);       
   //! ["react"]  Since "react" is the last element and there is only 1 element after the -1 index, .splice(-1, 2) will remove only "react", as there is nothing beyond it
 
   

 
 
 

 
 
 




 
 

 
 


 
 
 











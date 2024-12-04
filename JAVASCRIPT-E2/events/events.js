
//! for all ev👇🏿👇🏿👇🏿

// function info(){

//     alert("hello everyone")
// }

//! Bubbling  (child > parent> grandparent)
// in this if we click on chile then we will get outpurt as .. Child, parent, and grandparent 
// and if we click on parent then we will get output as parent and child
// let gp=document.getElementById("gp")
// let p=document.getElementById("p")
// let c=document.getElementById("c")

// gp.addEventListener("click", (e)=>{
//     // e.stopPropagation()
//     console.log("grandParent");
    
// })

// p.addEventListener("click", (e)=>{

//     //! to stop the propagation to parent only
//     e.stopPropagation()

//     console.log("Parent");
    
// })

// c.addEventListener("click", (e)=>{


//     // e.stopPropagation()
//     console.log("child");
    
// })

//! capturting (grandparent >parent > child)
// in bubbling if we click on       parent then we get output as Grandparent then parent 
// not parent > grandparent

let gp=document.getElementById("gp")
let p=document.getElementById("p")
let c=document.getElementById("c")

gp.addEventListener("click", (e)=>{
    // e.stopPropagation()
    console.log("grandParent");
    
},true)

p.addEventListener("click", (e)=>{

    //! to stop the propagation to parent only
    e.stopPropagation()

    console.log("Parent");
    
},true)

c.addEventListener("click", (e)=>{


    // e.stopPropagation()
    console.log("child");
    
},true)

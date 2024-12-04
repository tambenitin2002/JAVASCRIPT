// console.log(window.document)
// console.dir(window.document)

// let heading=document.getElementById("heading")
// console.log(heading);   //! to display the html part of  id 


//! it will change the html content or text and understand the html tags h1 content will replace
// document.getElementById("heading").innerHTML="<h1> ia am real dom</h1>"
//! t will change the html content or text but  not  understand the html tags and print html tags also if written
//document.getElementById("heading").innerText="<h1> ia am real dom</h1>";

//!  same as above But if any tag is hidden then also it will show
// document.getElementById("heading").textContent="<h1> ia am real dom</h1>"


//!    return the tage name that is use for particular id 
// let hea=document.getElementById("heading")
// console.log(hea.tagName);

//let para=document.getElementsByTagName("p")
//console.log(para);//! return htmlCollection .. means we have two paragrapgh tag .. so it will show [0,1]
//para.item(1).style.backgroundColor="red" //! we have to target index 0  or 1 it items


//! same as para we have more then one  same classname.
// let heading=document.getElementsByClassName("heading")
// console.log(heading);
// heading.item(1).style.color="red"

//! show only the fiest para tag
// let que=document.querySelector("p")
// console.log(que);
// que.style.color="red"   //! here we dont use list or items becausewe use queryselctor not queryselectorALL

//! QUERY SELECTOR WILL SELECCT ONLY ONE ELEMET I.R. FIRST ELEMENT

//! querySelector will show or target only the first class which comes first
// let querysecltor=document.querySelector(".heading")
// console.log(querysecltor);

//! querySelector will show or target all the classes having the name as heading and show in NoteList[h1.headign,h3.heading]
// let querysecltor=document.querySelectorAll(".heading")
// console.log(querysecltor);
//! only one we get
// let que=document.querySelector("#one")
// console.log(que);



//! add new elemet 
// let root=document.getElementById("root")

// let em1=document.createElement("h1")
// em1.innerText="i am append child for root"
// root.appendChild(ne1)



//!------------------------03/08/24

// let hea=document.querySelector(".heading");
// console.log(hea);
//  console.log(hea.getAttribute("id"));
// hea.setAttribute("class","hello")


let btn=document.getElementById("btn");
// console.log(btn);
btn.addEventListener("click",()=>{
    alert("hi i am event listner")
})

//! in add event listner we pass event as Click and in call back function what ever we pass it will exicute.



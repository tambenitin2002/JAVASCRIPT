


let mode ="light"
let btn=document.getElementById("btn");
btn.addEventListener("click", ()=>{

    if(mode=="light"){
        document.body.style.backgroundColor="black";
        mode="dark"
    }
    else if (mode=="dark"){
        document.body.style.backgroundColor="white"
        mode="dark";
    }
})
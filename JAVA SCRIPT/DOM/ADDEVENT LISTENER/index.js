let a = document.getElementById('btn1')
a.addEventListener('click',()=>{
    document.body.style.background="black"
    document.body.style.color="white"
})
console.log(a);
let b = document.getElementById('btn2')
b.addEventListener('dblclick',()=>{
    document.body.style.background="white"
    document.body.style.color="black"
})
console.log(b);
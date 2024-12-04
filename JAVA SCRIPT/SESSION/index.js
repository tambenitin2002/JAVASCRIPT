sessionStorage.setItem("name","vikas")
sessionStorage.setItem("place","mysore")

sessionStorage.clear()

sessionStorage.removeItem("place")

let name=sessionStorage.getItem('name')
let place=sessionStorage.getItem('place')
document.write(`My name is ${name} and place is ${place}`)

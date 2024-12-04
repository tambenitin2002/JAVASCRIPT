let emp = {
    eName: "Varun",
    eId:224,
}

//Object.freeze(emp)
Object.seal(emp)

emp.epin=56001
emp.eName="Aditya"


console.log(emp);
console.log(typeof emp);
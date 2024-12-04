// Literals

let emp={
    eName:"Vikas",
    eId:12,
}

emp.epin=560001
console.log(emp);
console.log(emp.eName);
console.table(emp)


//New Keyword

let stu = new Object()
stu.sName="Nitin"
stu.sId=123;
console.log(stu);
console.log(stu.sid);

//Constructor Function

function emp(name,age){
    this.name=name
    this.age=age                        
}

let e1 = new emp("Suraj",23)
let e2 = new emp("Aditya",24)
console.log(e1);
console.log(e2);

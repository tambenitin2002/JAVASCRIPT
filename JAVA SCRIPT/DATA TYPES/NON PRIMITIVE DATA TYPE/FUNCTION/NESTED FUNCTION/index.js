function Parent(){
    console.log("parents");
    function Child(){
        console.log("child");
    }
}
Parent();


function Parents(){
    console.log("Parents");
    function Childs(){
        console.log("Childs");
    }
    return Childs
}
Parents()();
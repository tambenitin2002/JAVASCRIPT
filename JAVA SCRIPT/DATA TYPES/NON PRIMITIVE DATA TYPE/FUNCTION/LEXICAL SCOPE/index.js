console.log("Start");
var a=10;
function x(){
    console.log(a);
    var b=20;
    function y(){
        console.log(b);
        console.log(c);
        var c=20;
    }
    return y
}
x()()
console.log("End");
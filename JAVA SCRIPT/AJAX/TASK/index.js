function load() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if(this.status==200){
        document.getElementById('p1').innerHTML = request.responseText;
    }
    }
    request.open('GET','./index.txt')
    request.send();
    console.log(request);
}
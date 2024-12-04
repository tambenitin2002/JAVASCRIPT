
let ajaxRequest=new XMLHttpRequest();
console.log(ajaxRequest);
ajaxRequest.open("GET","https://fakestoreapi.com/products");  
                                            // fake api link
ajaxRequest.onload= ()=>{
    let data=JSON.parse(ajaxRequest.response);
                                              //ajax.parse and response is use to convert into javascript object formate
    console.log(data);

    let  output="";                          
      // to store id which we will fetct
    data.map((val)=>{                         
                             // to fetch id one by one  
           output +=`              
                               // fetch 1, 2, 3,...

      
      <div id="container"> 
      <h1> ${val.id} </h1> 
      <img src="${val.image}">
      <h4> ${val.title} </h4>

      </div>                         
      //! used interpolation to fetch id
      `
    });

    document.getElementById("root").innerHTML=output;  
    document.getElementById("root1").innerHTML=output;  
    document.getElementById("root2").innerHTML=output;  

     //! api id is store in output variable then it will transfer to innerHTML                         
     //! and then we are storing in root id in html we created              
     //! document .getid is use because our html is type of docemnt  
 

}
ajaxRequest.send()


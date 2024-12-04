let fetchdata = async ()=>{
    let data=await fetch("https://dummyjson.com/recipes");
    let res=await data.json();

    
    console.log(res);
    let output="";
    res.recipes.map((val)=>{
        output+=`

        <div id="container">
        <img src="${val.image}"/>
        <h1>Dish Name:${val.name}</h1>
        <h4>Rating: ${val.rating}</h4>
        <h3>Ingredients:${val.ingredients}</h3>
        <h2>${val.cuisine}Dish</h2>
        </div>
        `
    });
    



document.getElementById("root").innerHTML=output
document.getElementById("box").innerHTML=output
document.getElementById("rat").innerHTML=output
document.getElementById("ingredients").innerHTML=output
document.getElementById("cuisine").innerHTML=output

}
fetchdata()
// fetch ("")


//! to add more product manually from are side

// fetch("https://dummyjson.com/recipes"{
//     method:"POST",
//     headers:{
//         "content-type":"application/json"
//     },
//     body:JSON.stringify({
//         price:120,
//         category:"electric qsp"
//     })

// }).then((res)=>{
//     return res.json()
// }).then((val)=>{
//     console.log(val);
// })

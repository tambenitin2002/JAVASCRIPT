fetch("https://dummyjson.com/recipes").then((val)=>{
    return val.json()
}).then((res)=>{
    
    // let {recipes}=res;
    console.log(res);
    let output="";
    res.map((val)=>{
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
})


// fetch("url").then((val)=>{
//     return val.json()
// }).then((res)=>{
//     console.log(res);

//     let output="";
//     res.map((data)=>{
//         output +=`
//         <img  src="${data.image}"/>
//         `
//     })
//     document.getElementById("root").innerHTML=output
// })



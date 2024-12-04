let a=async()=>{

    let data=await fetch(" https://dummyjson.com/recipes");
    let res=await data.json();
console.log(res);

let output="";

res.recipes.map((val)=>{
    output +=`
   <section>

   <div> <img src="${val.image}"/> </div>
   <h1> ${val.id} </h1>
   <h3>${val.name} </h3>
   <h4>${val.ingredients}</h4>

</section>
    `

})

document.getElementById("all_images").innerHTML=output;
document.getElementById("all_id").innerHTML=output;
document.getElementById("all_name").innerHTML=output;
document.getElementById("all_ingredients").innerHTML=output;




}
a();



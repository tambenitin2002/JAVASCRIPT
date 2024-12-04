async function x(){
    let data=await fetch ('https://fakestoreapi.com/products')
    // let data=await fetch ('https://dummyjson.com/recipes')
    console.log(data);
    let finalData=await data.json()
    console.log(finalData);
    finalData.map((item)=>{
            let body = document.body;
            let section=document.createElement('section');
            section.innerHTML+=`<div>
            <img src=${item.image} height="200px" width=200px">
           
            <p>${item.title}</p>
             <div>
            <p>${item.price}</p>
            <button>Add Cart</button>
             </div>
            </div>`
            body.appendChild(section)
    })
}
x()
let products = [];


let fetchdata = async()=>{
    let data = await fetch('https://dummyjson.com/products');
    let res = await data.json();
    let finaldata = res.products
    console.log(finaldata)
    products = finaldata
    localStorage.setItem("products", JSON.stringify(products))
    fetchprod(products)
    
}
fetchdata()


function fetchprod(products){
    let product = ""
    products.map((item)=>{
        product+=`
        <div id="cart-container">
        <img src="${item.images[0]}"/>
        <p id="title">${item.title}</p>
        <div id="rating"><i class="fa-regular fa-star" style="color: #FFD43B;">${item.rating.toFixed(1)}</i> </div>
        <div id="price"><strong>Price</strong><span id="cost"> $${item.price}</span></div>
        <div><button id="view" onclick="Viewmore(${item.id})">Viewmore</button></div>
        </div>
        `
    })
    document.getElementById("root").innerHTML=product;
}



// document.getElementById("searchProd").addEventListener('input',function searchItem(event){
//     let searchTerm = event.target.value.toLowerCase();
//     let filterProd = products.filter(
//         (product)=>
//             product.title.toLowerCase().includes(searchTerm) ||
//             product.category.toLowerCase().includes(searchTerm)
//     );
//     fetchprod(filterProd);
// })

document.getElementById("searchProd").addEventListener("input",searchItem);

function searchItem(event){
    let searchTerm = event.target.value.toLowerCase();
    let filterProd = products.filter((item)=>
        item.title.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
    );
    fetchprod(filterProd);
}
function Viewmore(ProductId){
    localStorage.setItem("selectedProductId",ProductId)
    window.location.href="./view.htm";

}




let products=[]

function fetchdata() {
    fetch("https://dummyjson.com/products").then((val)=>{
        return val.json();
    }).then((res) => {

        products = res.products;
        console.log(products);
        localStorage.setItem("products", JSON.stringify(products));
        fetchprod(products);
    });
}

function fetchprod(products) {
    let product=""
    products.map((val)=>{
        product+=`
        <div id="container">
        <div id="image">
        <img src="${val.images}"/>
        </div>
        <h1>${val.title}</h1>
        <p>⭐ ${val.rating}</p>
        <div id="btn">
        <p>Price: $${val.price}</p>
        <button class="view" onclick="viewMore(${val.id})">View More</button>
        </div>
        </div>
        `
    })
    document.getElementById("root").innerHTML=product
}


function searchItem(event){
    let searchTerm = event.target.value.toLowerCase();
    let filterProd = products.filter((product)=>
        product.title.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    fetchprod(filterProd);
}
document.getElementById("searchProd").addEventListener("input",searchItem);

function viewMore(productId){

    localStorage.setItem("SelecteProductId", productId)
    window.location.href="./viewmore.html"
    
}


fetchdata();
document.addEventListener("DOMContentLoaded",()=>{
    let productDetails = document.getElementById("productDetails");
    let products = JSON.parse(localStorage.getItem("products"));
    let SelecteProductId = localStorage.getItem("SelecteProductId");

    if (products && SelecteProductId){
        let selectedProduct = products.find(
            (product) => product.id == SelecteProductId
        );

        if (selectedProduct){
            console.log(selectedProduct);
            productDetails.innerHTML = `
            <div></div>
            <div id="container">
                <img src="${selectedProduct.images[0]}" height="450px" width="450px">
                <div id="info">
                <h1 style="font-size:30px"><span>${selectedProduct.title}</span></h1>
                <h3>${selectedProduct.brand}</h3>
                <p>${selectedProduct.availabilityStatus}</p>
                <p>${selectedProduct.description}</p>
                <p>⭐ ${selectedProduct.rating}</p>
                <p id="price">Price: $${selectedProduct.price}</p>
                <div id="btn">
                <button id="addToCart">Add To Cart</button>
                <button id="btn2"><a href="./task.html">Home</a></button>
                </div>
                </div>
            </div>
            <main>
            <div id="rewiew">
            <br>
                    <h1>Customer reviews</h1>
                    <hr>
                    ${selectedProduct.reviews.map(
                        (review)=>`
                        <br>
                        <div id="ratings">${"❤️".repeat(review.rating)}${"🖤".repeat(5 - review.rating)}</div>
                        <p id="comment">${review.comment}</p>
                        <p id="nam">By <strong>${review.reviewerName}</strong> on ${new Date(review.date)}</p>
                        <br>
                        <hr>
                        `
                    )}
                </div>
            </main>
            `;
            document.getElementById("addToCart").addEventListener("click",()=>{
                addToCart(selectedProduct);
            });
        }
        else{
            productDetails.innerHTML="<p>Product Not found</p>"
        }

    }
    else{
        document.innerHTML="<p>No Product selected</p>"
    }
});

function addToCart(product){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("product added to cart")
}
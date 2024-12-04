document.addEventListener("DOMContentLoaded",()=>{
   let productDetails = document.getElementById("productDeatils");
   let product = JSON.parse(localStorage.getItem("products"));
   let selectedProductId = localStorage.getItem("selectedProductId");
   
   if(product && selectedProductId) {
    let selectedProduct = product.find(
        (product) => product.id == selectedProductId 
    );
    if(selectedProduct){
        console.log(selectedProduct);
        productDetails.innerHTML=`
       

        <main>
        <div id="tophalf">
        <div id="pimg>
        <img src="${selectedProduct.images[0]}" />
        </div>
        <div id="pdetail">
        <h2 id="title">$(selectedProduct.title)</h2>
        <p id="brand"><strong>Categogy:</strong>${selectedProduct.brand}</p>
        <p id="category"><strong>Category:</strong> ${
            selectedProduct.category
        } </p>
        <p id="descrip"><strong>Description:</strong>${
            selectedProduct.description
        }</p>
        <p id="descrip"><strong>Price:</strong>$${selectedProduct.price}</p>
        <div id="btn">
        <button id="addToCart">Add to cart</button>
        <button id="backToHome"> Back to home</button>
        
        </div>
        </div>
        </div>

        <div id="review">
        <h1>Customer reviews</h1>
        <hr>
        ${selectedProduct.review.map(
            (review)=>`
            <div id="rating">${"❤️".repeat(review.rating)}${"🖤".repeat(
            5 - review.rating
            )}
            </div>
            <p id="comment">${review.comment}</p>
            <p id="nam">By <strong>${review.reviewName}</strong>on ${new Date(
            review.date
            ).toLocaleDateString()}</p>
            <hr>
            `
        )}
        </div>
        </main>
        `;
        document.getElementById("addToCart").addEventListener("click",()=>{
            addToCart(selectedProduct)

        })
        
    }
    else{
        productDetails.innerHTML
    }
   }
})
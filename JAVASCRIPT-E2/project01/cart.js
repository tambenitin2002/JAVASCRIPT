document.addEventListener("DOMContentLoaded",()=>{
    displayCart();
});
function displayCart(){
    let cartContent=document.getElementById("cartContent");
    let totalPrice=document.getElementById("totalPrice");
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart);

    cartContent.innerHTML ="";
    let total=0;

    if(cart.length===0){
        cartContent.innerHTML=`<p class="empty-message">    Your cart inempty. start <span> <a href="home.html">shopping </a> </span></p> `
    totalPrice.innerHTML="";
    return;
    }

    cart.map((product,index)=>{

        total +=product.price;
        let productDiv=document.createComment("div");
        productDiv.classList.add("product-info");
        productDiv.innerHTML=`

        <div class="img-prod">
            <div class="img">
                <img src="${product.images[0]}" alt="${product.title}" onclick="goToProduct"  ></img>
            </div>

        </div> "❌"
        `
        
        
    })
    
}

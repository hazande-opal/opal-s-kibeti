const cart = [];
console.log(cart);

let productsHTML = '';
cart.forEach((kibeti)=>{
    productsHTML += `
    <div class="cart-product-container">
        <div class="image-product">
            <img src="images/products/Intermediate Basketball.jpeg" alt="">
        </div>
        <div class="product-details">
            <div class="product-name"><p></p></div>
            <div class="product-quantity"><p>Quantity: <span></span></p></div>
            <div class="product-price"><p>Ksh 2000</p></div>
            <div class="product-author"><p>Hazande Opal</p></div>
            <div class="button-container">
                <button class="buy-button">Buy Now</button>
                <button class="delete-product-on-cart">Delete Item</button>
            </div>
        </div>
    </div>
    `; 
    
});
console.log(productsHTML);

//document.querySelector('.js-cart-container').innerHTML = productsHTML;
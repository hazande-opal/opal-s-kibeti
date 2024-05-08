const products = [
    {
        id: "43k5e-hv7gf-htre4-klla5",
        name:  "Intermediate Basketball",
        price: 1900,
        image: "images/products/Intermediate Basketball.jpeg",
        rating: {
            star: "ratings/rating-50.png",
            count: 105
        },
        author: "Hazande Opal"
    },
    {
        id: "23q5p-av4gk-fewr4-yula2",
        name:  "Bathroom Rug",
        price: 2000,
        image: "images/products/bathroom-rug.jpg",
        rating: {
            star: "ratings/rating-50.png",
            count:63
        },
        author: "Hazande Opal"
    },
    {
        id: "41k5v-wv7ef-htre4-kcpa9",
        name:  "Cofee Maker with glass",
        price: 8900,
        image: "images/products/coffeemaker-with-glass-carafe-black.jpg",
        rating: {
            star: "ratings/rating-50.png",
            count: 35
        },
        author: "Hazande Opal"
    },
    {
        id: "43l0e-hv8gf-ktre4-vlxa1",
        name:  "Black-2-Slot-Toaster",
        price: 4900,
        image: "images/products/black-2-slot-toaster.jpg",
        rating: {
            star: "ratings/rating-50.png",
            count: 88
        },
        author: "Hazande Opal"
    },
    {
        id: "4wd5e-hv7gf-hgrl4-klla5",
        name:  "Athletic Cotton Socks",
        price: 1200,
        image: "images/products/athletic-cotton-socks-6-pairs.jpg",
        rating: {
            star: "ratings/rating-50.png",
            count: 210
        },
        author: "Hazande Opal"
    }
    
    
 ];
let myHTML = '';
products.forEach((product) =>{
myHTML +=`
<div class="card-details js-card-details">
    <div class="image-container">
    <img src="${product.image}" alt="">
    </div>
    <div class="goods-price-description-details">
        <div class="item-details"><p>${product.name}</p></div>
        <div class="price-details js-price-details"><p>Ksh ${product.price}</p></div>
        <div class="item-rating">
            <div class="star-rating"><img src="${product.rating.star}" alt=""></div>
            <div class="number-rating">${product.rating.count}</div>
        </div>
        <div class="author-details"><p>${product.author}</p></div>
    </div>
    <div class="button-details">
        <button onclick="" class="js-add-to-cart css-add-to-cart" data-product-id = "${product.id}" data-product-name="${product.name}">Add to Cart</button>
    </div>
</div>
    `
});

document.querySelector('.js-shop-container').innerHTML = myHTML;


document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
    button.addEventListener('click', ()=>{
       
       const productId = button.dataset.productId;
       const productName = button.dataset.productName;

       let matchingItem;
       cart.forEach((item)=>{
        if(productId === item.productId){
            matchingItem = item;
        }
       });

       if(matchingItem){
        matchingItem.quantity += 1;
       }
       else{
        cart.push({
            productId: productId,
            productName: productName,
            quantity: 1
           });
       }

       console.log(cart);
    })
})


let userName = document.querySelector("#userName")
let userData = document.querySelector("#user")
let links = document.querySelector("#links")

let logOutBtn = document.querySelector("#logout")

if (localStorage.getItem("username")) {
    links.remove()
    userName.style.display = "block"
    userData.innerHTML = localStorage.getItem("username")
}


logOutBtn.addEventListener("click",function(){
    localStorage.clear()
    setTimeout(()=>{
        window.location = "login.html"
    },500)
})

let allProducts = document.querySelector(".products")
let productsInCart = localStorage.getItem("productsInCart")
if (productsInCart) {
    let item = JSON.parse(productsInCart)
    drawCartProducts(item)
}

function drawCartProducts(products) {
    let z = products.map((item) => {
        return `<div class="col-6 d-flex justify-content-center">
                    <div class="productItem">
                        <img class="productImg" src="${item.imageUrl}" alt="perfume">
                        <div class="description">
                            <h2>${item.title}</h2>
                            <p>The Perfect Odour</p>
                            <span>Price : ${item.price}</span>
                        </div>
                        <div class="productActions">
                            <button class="addToCart my-3" style = "width : 180px" onClick = "removeFromCart(${item.id})" >Remove from cart</button>
                        </div>
                    </div>
                </div>`
    })
    allProducts.innerHTML = z.join('');
}

let myBadge = document.querySelector(".myBadge")

let cartProductsDiv = document.querySelector(".cartProducts div")

let addedItems = JSON.parse(localStorage.getItem("productsInCart")) 
myBadge.innerHTML = addedItems.length



// let shoppingCartIcon = document.querySelector(".shoppingCart i")

// let cartProducts = document.querySelector(".cartProducts")
// let viewAll = document.querySelector(".cartProducts a")
// shoppingCartIcon.addEventListener("click",opencart)
// function opencart () {
//     if (cartProductsDiv.innerHTML != "")
//     {
//         viewAll.remove()
//         if (cartProducts.style.display == "block") 
//         {
//             cartProducts.style.display="none"
//         } 
//         else 
//         {
//             cartProducts.style.display="block"
//         }   
//     }

// }



function removeFromCart(id) {
    let productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
    
    let productIndex = productsInCart.findIndex(product => product.id === id);
    
    if (productIndex !== -1) { 

        productsInCart.splice(productIndex, 1);

        localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
        

        let productToRemove = document.querySelector(`.productItem[data-product-id="${id}"]`);
        if (productToRemove) {
            productToRemove.remove();
        }
        
        myBadge.innerHTML = productsInCart.length;
    }
}




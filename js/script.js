let userName = document.querySelector("#userName")
let userData = document.querySelector("#user")
let links = document.querySelector("#links")
let logOutBtn = document.querySelector("#logout")
let shoppingCartIcon = document.querySelector(".shoppingCart i")


if (localStorage.getItem("username")) {
    links.remove()
    userName.style.display = "block"
    userData.innerHTML = localStorage.getItem("username")
}
else 
{
    logOutBtn.style.display = "none"
    shoppingCartIcon.style.display = "none"
}


logOutBtn.addEventListener("click",function(){
    localStorage.clear()
    setTimeout(()=>{
        window.location = "login.html"
    },500)
})




let allProducts = document.querySelector(".products")
let products = [
    {
        id: 1,
        title: "Deep Wood",
        price: 300,
        imageUrl: "images/red.jpg"
    },
    {
        id: 2,
        title: "Daasresal",
        price: 350,
        imageUrl: "images/green.jpg"
    },
    {
        id: 3,
        title: "Abely",
        price: 400,
        imageUrl: "images/black.jpg"
    },
    {
        id: 4,
        title: "COCO",
        price: 450,
        imageUrl: "images/yellow.jpg"
    }
]


function drawItems() {
    let z = products.map((item) => {
        return `<div class="col-6 d-flex justify-content-center">
                <div class="productItem">
                    <img class="productImg" src="${item.imageUrl}" alt="perfume">
                    <i class="far fa-heart productIcon"></i>
                    <div class="description">
                        <h2>${item.title}</h2>
                        <p>The Perfect Odour</p>
                        <span>Price : ${item.price}</span>
                    </div>
                    <div class="productActions">
                        <button class="addToCart my-3" onClick = "addToCart(${item.id})" >Add to cart</button>
                    </div>
                </div>
            </div>`
    })
    allProducts.innerHTML = z.join('');
}
drawItems()

let myBadge = document.querySelector(".myBadge")



let cartProductsDiv = document.querySelector(".cartProducts div")

let addedItems = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : []
if (addedItems) {
    addedItems.map(item => {
        cartProductsDiv.innerHTML += `<p>${item.title}</p>`
    })
    myBadge.innerHTML = addedItems.length

}


if (localStorage.getItem = ("username")) 
{
    function addToCart(id){
        let choosenItem = products.find((item) => item.id === id)
        cartProductsDiv.innerHTML += `<p>${choosenItem.title}</p>`


        addedItems = [...addedItems , choosenItem]
        localStorage.setItem("productsInCart" ,JSON.stringify(addedItems))


        let cartProductsLength = document.querySelectorAll(".cartProducts div p")
        myBadge.innerHTML = cartProductsLength.length
    }
}
else 
{
    window.location = "login.html"
}




let cartProducts = document.querySelector(".cartProducts")
shoppingCartIcon.addEventListener("click",opencart)
function opencart () {
    if (cartProductsDiv.innerHTML != "")
    {
        if (cartProducts.style.display == "block") 
        {
            cartProducts.style.display="none"
        } 
        else 
        {
            cartProducts.style.display="block"
        }   
    }

}
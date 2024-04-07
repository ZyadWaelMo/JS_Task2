let username = document.querySelector("#username")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let registerBtn = document.querySelector("#signUp")

registerBtn.addEventListener("click" , function(a){

    a.preventDefault()

    if ((( username.value === "" ) || (email.value === "" ) || (password.value === "" ))) 
    {
        alert("Please complete your info")
    } 
    else 
    {   
        localStorage.setItem("username" , username.value)
        localStorage.setItem("email" , email.value)
        localStorage.setItem("password" , password.value)

        setTimeout(() => { window.location = "login.html" } , 1000 )
    }
})
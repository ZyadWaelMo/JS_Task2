let username = document.querySelector("#username")
let password = document.querySelector("#password")
let loginBtn = document.querySelector("#signIn")

let getUsername = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")

loginBtn.addEventListener("click" , function(a){
    a.preventDefault()
    if ((username.value === "")||(password.value === "")) 
    {
        alert("Please complete your info")
    }
    else 
    {
        if ((getUsername && getUsername.trim() === username.value.trim()) && 
            (getPassword && getPassword.trim()=== password.value.trim())) 
        {
            setTimeout( () => { window.location = "index.html" } , 500)
        }
        else
        {
            alert("Invalid Email or Password")
        }
    }
})

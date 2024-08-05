window.addEventListener("load",
function () {
    /*Burger menu*/
    document.querySelector(".burger-menu").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("visibleNav")
    })
    /*Derived email input*/
    document.querySelector("#nombre").addEventListener("click", function(){
        document.querySelector("#correo").classList.add("visible")
    })
})
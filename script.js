let hamburger = document.querySelector(".hamburger")
let res_links = document.querySelector(".res_links")

hamburger.addEventListener("click",()=>{
    res_links.classList.toggle("res_active")
})
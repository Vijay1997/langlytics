const btn = document.querySelector('.menu-button');
const menu = document.querySelector(".mobile-menu");



btn.addEventListener("click",()=> {
    menu.classList.toggle("-translate-x-full");
    btn.classList.toggle("fa-x");
})

window.addEventListener ("scroll",function(){
    var header = document.querySelector(".navigation");
    
    header.classList.toggle("h-16",window.scrollY > 0 );
})




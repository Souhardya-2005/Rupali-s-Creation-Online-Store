const menuOpenButton=document.querySelector("#menu-open-button");
const menuCloseButton=document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click",()=> {
    //Toggle mobile menu
    document.body.classList.toggle("show-mobile-menu");
});

//Close menu when close button clicked
menuCloseButton.addEventListener("click",()=> menuOpenButton.click());

const header__actions = document.querySelector(".header__actions")
const toggle__menu = document.querySelector(".toggle__menu")



header__actions.addEventListener('click',()=>{
    toggle__menu.classList.toggle('!h-[35vh]');
    toggle__menu.classList.toggle('overflow-y-scroll');
})
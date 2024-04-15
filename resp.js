burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
Navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')


burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class-resp');
    Navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})
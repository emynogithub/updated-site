'strict mode'

const navBar = document.querySelector ('.nav-bars');
const closeBtn = document.querySelector('.fa-times');
const menuBars = document.querySelector('.fa-bars');
const linkAdd = document.querySelector('.link-1')



const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelector('.show-modal');

menuBars.addEventListener('click', function(){
    navBar.classList.add('active2')

    console.log('clicked')

});

closeBtn.addEventListener('click', function(){
    navBar.classList.remove('active2')

})
























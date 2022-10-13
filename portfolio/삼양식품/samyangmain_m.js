const menubutton = document.querySelector('.material-symbols-outlined');
const gnb = document.querySelector('.gnb')
menubutton.addEventListener('click', ()=> {
    gnb.classList.toggle('active')
});


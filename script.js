// Menu mobile 'toggle' classe -> 'ativo', função de menu mobilie

let navMenu = document.getElementById('menu-nav');

function menuClick(){
    navMenu.classList.toggle('ativo');
}

window.addEventListener('scroll', ()=>{
    navMenu.classList.remove('ativo');
});


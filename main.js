let year = document.getElementById('year').innerHTML = new Date().getFullYear();

let menu = document.querySelector('.toggle-bar');
let ul = document.querySelector('ul');
let items = document.querySelectorAll('#item');

let showMenu = false;

menu.addEventListener('click', openMenu);

function openMenu (e){
   if(!showMenu) {
    ul.classList.add('show')
    items.forEach(item => item.classList.add('show'));

    showMenu = true

   } else if(showMenu) {
    ul.classList.remove('show')
    items.forEach(item => item.classList.remove('show'));
    
    showMenu = false;
   }
}


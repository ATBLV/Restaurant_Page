import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min';
import './css/style.css';
import home from './js/home.js';
import menu from './js/menu.js';
import contact from './js/contact.js';

 const navbar =
   `<nav>
 <div class="nav-wrapper">
 <div>
 <a class="brand-logo right" href="https://github.com/ATBLV/Restaurant_Page" target=”_blank”>
             <img style="background-color: white; padding-right: 11.5rem; padding-top: 1rem;    
            filter: invert(100%) sepia(0%) saturate(7484%) hue-rotate(177deg) brightness(120%) contrast(100%);" 
            class="" src="../src/img/GitHub-Mark/PNG/GitHub-Mark-32px.png" alt="Github">
         </a>
     <a href="#" class="brand-logo right">restaurant page. </a>
     <div class="brand-logo right" style="font-size: 0.7rem; margin-top: 1.4rem; padding-right: 0.2rem;">Created for The Odin Project 
 </div>
         <ul id="nav-mobile" class="left hide-on-med-and-down">
             <li id='home'><a id='home' href="#">Home</a></li>
             <li id='menu'><a href="#">Menu</a></li>
             <li id='contact'><a href="#">Contact</a></li>
         </ul>
        
     </div>
 </nav>`;

const content = document.getElementById('content');
content.classList.add('body');
content.innerHTML = navbar;

const container = document.createElement('div');
container.setAttribute('id', 'container');
content.append(container);

home();

document.addEventListener('keydown', (event) => {
    selection(event.key);
});

document.addEventListener('click', (event) => {
    selection(event.target.parentNode.id);
});


function selection(key) {
    switch (key) {
        case 'home':
        case 'h':
            home();
            break;
        case 'menu':
        case 'm':
            menu();
            break;
        case 'contact':
        case 'c':
            contact();
            break;
    }
}

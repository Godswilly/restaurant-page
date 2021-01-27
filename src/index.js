
import Navbar from './modules/navbar';
import contact from './modules/contact';
import menu from './modules/menu';
import home from './modules/home';


const content = document.getElementById('content');
content.innerHTML = '';
const navbar = Navbar();
content.appendChild(navbar);
const links = document.querySelectorAll('.link');

const show = document.createElement('div');
show.className = 'show';
show.id = 'show';
show.appendChild(home());
content.appendChild(show);
/* eslint consistent-return: 0 */
const every = (link) => {
  if (link === 'home') {
    show.className = 'show';
    return home();
  }
  if (link === 'menu') {
    show.className = 'showmenu';
    return menu();
  }
  if (link === 'contact') {
    show.className = 'show';
    return contact();
  }
};
links.forEach((li) => {
  li.addEventListener('click', (e, id = li.id) => {
    const element = every(id);
    show.innerHTML = '';
    show.appendChild(element);
  });
});

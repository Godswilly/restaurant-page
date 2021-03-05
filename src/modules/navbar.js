import '../style.css';

const Navbar = () => {
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';
  navbar.id = 'navbar';

  const links = document.createElement('ul');
  links.className = 'nav_link';
  navbar.appendChild(links);

  const home = document.createElement('li');
  home.className = 'link';
  home.innerHTML = 'Home';
  home.id = 'home';
  links.appendChild(home);

  const menu = document.createElement('li');
  menu.className = 'link';
  menu.innerHTML = 'Menu';
  menu.id = 'menu';
  links.appendChild(menu);

  const contact = document.createElement('li');
  contact.className = 'link';
  contact.innerHTML = 'Contact';
  contact.id = 'contact';
  links.appendChild(contact);

  return navbar;
};
export default Navbar;

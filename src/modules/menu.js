import '../style.css';
import Chicken from '../images/chicken.jpg';
import Plantain from '../images/plantain.jpeg';
import Catfish from '../images/catfish.jpg';

const content = document.getElementById('content');
content.innerHTML = '';
const menu = () => {
  const menulist = document.createElement('div');
  menulist.classList.add('top');
  content.appendChild(menulist);

  const title = document.createElement('div');
  title.classList = 'center';
  title.innerText = 'Menu List';
  menulist.appendChild(title);

  const menuImages = document.createElement('div');

  const menuImg1 = new Image();
  const menuImg2 = new Image();
  const menuImg3 = new Image();

  menuImg1.src = Chicken;
  menuImg1.classList.add('container');

  menuImg2.src = Plantain;
  menuImg2.classList.add('container');

  menuImg3.src = Catfish;
  menuImg3.classList.add('container');

  menuImages.appendChild(menuImg1);
  menuImages.appendChild(menuImg2);
  menuImages.appendChild(menuImg3);
  menulist.appendChild(menuImages);
  return menulist;
};

export default menu;
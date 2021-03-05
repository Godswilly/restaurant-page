import '../style.css';

const home = () => {
  const title = document.createElement('h1');
  title.className = 'title';
  title.innerHTML = 'Welcome to our restaurant';
  title.id = 'title';
  return title;
};
export default home;

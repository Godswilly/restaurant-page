import '../style.css';

const contact = () => {
  const info = document.createElement('div');
  info.className = 'info';
  info.id = 'info';

  const email = document.createElement('h2');
  email.className = 'email';
  email.innerHTML = 'email : example@gmail.com';
  info.appendChild(email);

  const phoneNumber = document.createElement('h2');
  phoneNumber.className = 'phonenumber';
  phoneNumber.innerHTML = 'Phone Number : +2348066557870';
  info.appendChild(phoneNumber);

  const location = document.createElement('h2');
  location.className = 'location';
  location.innerHTML = 'Location : Lagos Nigeria';
  info.appendChild(location);
  return info;
};
export default contact;

import Navbar from"./modules/navbar";import contact from"./modules/contact";import menu from"./modules/menu";import home from"./modules/home";const root=document.getElementById("content"),navbar=Navbar();root.appendChild(navbar);const links=document.querySelectorAll(".link"),page=document.createElement("div");page.className="page",page.id="page",page.appendChild(home()),root.appendChild(page);const roting=e=>"contact"===e?(page.className="page",contact()):"home"===e?(page.className="page",home()):"menu"===e?(page.className="menupage",menu()):void 0;links.forEach((e=>{e.addEventListener("click",((a,o=e.id)=>{const n="contact"===(m=o)?(page.className="page",contact()):"home"===m?(page.className="page",home()):"menu"===m?(page.className="menupage",menu()):void 0;var m;page.innerHTML="",page.appendChild(n)}))}));
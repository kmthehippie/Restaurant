import './style.css';
import { contactContainer } from "./contact.js";
import { homeContainer } from "./home.js";
import { menuContainer } from "./menu.js";

const navBar = document.querySelectorAll(".nav");
const content = document.querySelector(".content");
content.appendChild( homeContainer );

navBar.forEach(nav =>{
    nav.addEventListener("click", (i)=>{
        let currentNav = document.querySelector(".active");
        content.removeChild(content.children[0]);
        currentNav.classList.remove("active");
        nav.classList.add("active")   
        if (nav.classList[0] === "menu"){
            content.appendChild(menuContainer);
        } else if (nav.classList[0] === "home"){
            content.appendChild(homeContainer);
        } else if (nav.classList[0] === "contact"){
            content.appendChild(contactContainer);
        }     
    })
})




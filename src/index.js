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



const imgW = document.querySelectorAll(".image")
const btns2 = document.querySelectorAll(".carousel-button")
let currentIndex = 0; 

btns2.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        imgW[currentIndex].classList.remove("show");
        if(btn.classList[1] === "next") {
            if (currentIndex >= imgW.length -1){
                currentIndex = 0;
            } else {
                currentIndex ++
            }            
        } else if(btn.classList[1] === "prev") {
            if (currentIndex <= 0){
                currentIndex = imgW.length - 1;
            } else {
                currentIndex --
            }  
        }
        imgW[currentIndex].classList.add("show");
    })
})
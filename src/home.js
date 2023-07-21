import { createE, createI, createLi } from "./app.js"
import image1 from "./images/applepie.jpg"
import image2 from "./images/blueberry-pie.jpg"
import image3 from "./images/orange-marmalade.jpg"

const homeContainer = createE("body-container", "div");

//carousel div
const carousel = createE("carousel", "div");
const btns = createE("buttons", "div");
const prev = createE("carousel-button", "button", "prev", "<");
const next = createE("carousel-button", "button", "next", ">");
btns.appendChild(prev)
btns.appendChild(next)


const imgWrapper = createE("img-wrapper", "div");
imgWrapper.appendChild(createI("image", image1, "show"));
imgWrapper.appendChild(createI("image", image2));
imgWrapper.appendChild(createI("image", image3));

//append image and buttons to carousel
carousel.appendChild(imgWrapper)
carousel.appendChild(btns)


//content text div
const contentText = createE("content-text", "div");
const textContainer = createE("text-container", "div");
const textDescription = createE("text-description", "div", undefined, "The best fruit themed dessert store in all of Wonderland. They have pies and marmalades and jams. The service is top notch. They serve fruit teas, detox drinks and all sorts of natural stuff. Love it!");
const reviewAuthor = createE(undefined, "h3", undefined, "Jennifer Popoye")
textDescription.appendChild(reviewAuthor)

const hrs = createE("hours", "div");
const hrsHeader = createE(undefined,"h3", undefined, "Hours");
const ul = createE(undefined, "ul")

ul.appendChild(createLi("Sunday 8AM to 8PM"));
ul.appendChild(createLi("Monday 6AM to 6PM"));
ul.appendChild(createLi("Tuesday 6AM to 6PM"));
ul.appendChild(createLi("Wednesday 6AM to 6PM"));
ul.appendChild(createLi("Thursday 6AM to 8PM"));
ul.appendChild(createLi("Friday 6AM to 10PM"));
ul.appendChild(createLi("Saturday 8AM to 10PM"));
//append ul and hrsHeader to hrs
hrs.appendChild(hrsHeader)
hrs.appendChild(ul)

const locationText = createE("location-text", "div");
const locTexth3 = createE(undefined, "h3", undefined, "Location")
const locTextp = createE(undefined, "p", undefined, "9, Jalan Raja Chulan, Kuala Lumpur, WPKL")

locationText.appendChild(locTexth3);
locationText.appendChild(locTextp);

//append text-description, hours, location-text to text-container and to content-text
textContainer.appendChild(textDescription);
textContainer.appendChild(hrs);
textContainer.appendChild(locationText);
contentText.appendChild(textContainer)

//append the main divs to body container

homeContainer.appendChild(carousel);
homeContainer.appendChild(contentText);

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

export { homeContainer }
import image1 from "./images/strawberry.png";
import image2 from "./images/apple.png";
import image3 from "./images/orange.png";
import image4 from "./images/pineapple (1).png"

const contactContainer = createE("contact-container", "div");

import { Card2 , createE } from "./app.js"

const card1 = new Card2("Miss Strawberry", "Our in-store manager. She is in charge of all things sweet and sour.", "+6012-3456789", image1);
const card2 = new Card2("Sir Apple", "Proudly in charge of all the apples in our store.", "+6012-3456780", image2);
const card3 = new Card2("Madam Orange", "Zesty lady in charge of all the oranges in our store", "+6012-3456781", image3 );
const card4 = new Card2("Mr Pineapple","The man in charge of our finances and all things accounts related.", "+6012-3456782", image4)

contactContainer.appendChild(card1)
contactContainer.appendChild(card2)
contactContainer.appendChild(card3)
contactContainer.appendChild(card4)


export { contactContainer }
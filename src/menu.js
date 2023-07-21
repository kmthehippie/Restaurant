import { createE, Card, Category } from "./app.js"
import image1 from "./images/waffle.jpg";
import image2 from "./images/mini-pancake.jpg";
import image3 from "./images/applepie.jpg";
import image4 from "./images/blueberry-pie.jpg";
import image5 from "./images/dragonfruit.jpg";
import image6 from "./images/smoothiefruit.jpg";
import image7 from "./images/orange-drink.jpg";
import image8 from "./images/berry-tea.jpg";
import image9 from "./images/orange-marmalade.jpg";
import image10 from "./images/popsicle.jpg";

const menuContainer = createE("menu-container", "div");

//create mains and cards
const mains = new Category("MAINS");
const item1 = new Card("Fruity Waffle", "Freshly made waffles topped with the best in season fresh fruits drizzled with peanut butter sauce and chocolate sauce. Please allow for 10 minutes preparation time.", "$20", image1);
const item2 = new Card("Mini Pancake", "Freshly made mini pancakes topped with our in season berries. Drizzled on top with maple syrup and a side of our home made thick cream. Please allow for 10 minutes preparation time.", "$20", image2);
mains.appendChild(item1);
mains.appendChild(item2);

//create baked and cards
const baked = new Category("BAKED");
const item3 = new Card("Mini Apple Pie", "Freshly baked to order, using our best in season red apples from around the world, we serve the a delicious apple pie with hints of cinnamon, nutmeg and star anise.", "$16", image3);
const item4 = new Card("Blueberry Tart", "Freshly baked daily, delicious Peru Giant Blueberries top our secret recipe of custard cream filling. The perfect match of tart and light custard creaminess. This is for all the custard loving people.", "$15", image4);
baked.appendChild(item3);
baked.appendChild(item4);


//create smoothies and cards
const smoothies = new Category("SMOOTHIES");
const item5 = new Card("Dragon Fruit Smoothie Bowl", "Fresh pink dragon fruit from the farms of Malaysia are picked and frozen for this delicious dish. Absolutely dripping in sweetness and amazing goodness. Topped with bananas, coconut shaving, raisins and some ground nuts", "$13", image5);
const item6 = new Card("Fruity Smoothie Bowl", "Smoothie base is made of strawberry, blueberry, blackberry and raspberry. A tart dish that's perfectly balanced. Topped with fresh blackberry, raspberry, blueberry, coconut shaving, almonds and mango.", "$12", image6)
smoothies.appendChild(item5);
smoothies.appendChild(item6);

//create drinks and cards
const drinks = new Category("drinks");
const item7 = new Card("Orange Basil Seed Drinks", "Orange peel tea made with Basil seed to create the ultimate fresh cool drink. Syrup comes on the side for you to adjust the level of sweetness. Refreshing burst of orange aroma.", "$6", image7);
const item8 = new Card("Hot Berry Tea", "Loaded with fresh berries, this tea has been stewed and brewed for maximum effect. Fresh berries are added on top of this hot cup of tea.Would recommend for anyone who needs a hot and zesty pick me up.", "$6", image8);
drinks.appendChild(item7);
drinks.appendChild(item8);

//create add ons
const addOns = new Category("add ons");
const item9 = new Card("Orange Marmalade", "Using the ripest navel oranges and our secret recipe, the perfect orange marmalade is now available for purchase. Perfect match for toast, crackers and topper for your favorite ice-cream", "$24", image9);
const item10 = new Card("KiwiMelon Popsicle", "Made using the ripest watermelons harvested locally in Malaysia. We paired it with some zesty green kiwi. These are our famous popsicle that has been featured in The Ice Cream Mag. Comes in packs of 6.", "$24", image10);
addOns.appendChild(item9);
addOns.appendChild(item10);

menuContainer.appendChild(mains);
menuContainer.appendChild(baked);
menuContainer.appendChild(smoothies);
menuContainer.appendChild(drinks);
menuContainer.appendChild(addOns);



export{ menuContainer }
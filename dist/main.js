(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>h});var a=t(81),r=t.n(a),o=t(645),i=t.n(o),d=t(667),s=t.n(d),p=new URL(t(820),t.b),l=i()(r());l.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Liu+Jian+Mao+Cao&family=Playfair+Display:ital@0;1&family=Roboto:ital,wght@0,100;0,400;0,700;1,400&display=swap);"]);var c=s()(p);l.push([n.id,`:root{\n    --roboto: 'Roboto', sans-serif;\n    --playfair: 'Playfair Display', serif;\n    --logo: 'Liu Jian Mao Cao';\n    --sage: #CCD5AE;\n    --light-sage: #E9EDC9;\n    --beige: #FAEDCD;\n    --light-beige: #FEFAE0;\n}\n\n*,*::before, *::after{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody{\n    padding: 0;\n    margin: 0;\n    background: var(--sage);\n    background-size: auto 100vh;\n    background-position: 65% 0;\n    position: relative;\n    width: 100vw;\n    height: 100vh;\n}\n\nbody{\n    background-image: url(${c});\n}\n\nh1{\n    margin:0;\n    text-shadow: 0 0 10px var(--light-beige);\n    color: var(--light-beige);\n}\nheader{\n    background-color: rgba(0, 0, 0, 0.37);\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n}\n\n.header-container{\n    width: 1200px;\n    align-self: center;\n    display: flex;\n    justify-content: space-between;   \n}\n\n.logo {\n    font-family: var(--logo);\n    font-size: 30px;\n    padding: 10px 25px 25px 25px;\n    margin-right: 10px;\n}\n.nav-bar {\n    max-width: 400px;\n    font-family: var(--logo);\n    font-size: 25px;\n    color: var(--light-beige);\n    display: flex;\n    justify-content: space-between;\n    align-items: end;\n}\n.nav{\n    padding: 8px 20px;\n    border-radius: 0.5rem;\n    cursor: pointer;\n}\n.nav.active{\n    border: 1px solid var(--light-beige);\n    box-shadow: 4px 4px 20px rgba(254, 250, 224, 1);\n}\n\n.nav:hover{\n    background-color: var(--sage);\n    box-shadow: 4px 4px 20px rgba(254, 250, 224, 1);\n    color: black;\n    border: none;\n}\n\n\n\n\n\n\n/* HOME */\n.carousel{\n    padding-top: 5px;\n    padding-bottom: 5px;\n    background-color: var(--light-beige);\n    position: relative;\n    width: 100vw;\n}\n\n\n.carousel-button{\n    position: absolute;\n    background-color: transparent;\n    border: none;\n    font-size: 30px;\n    padding: 8px 16px;\n    border-radius: 1em;\n    cursor: pointer;\n    color: var(--light-beige);\n    z-index: 2;\n\n}\n.carousel-button:hover{\n     text-shadow: 0 0 10px var(--light-beige);    \n     background-color: rgba(0,0,0,0.5);\n     transition: 0.3s ease-in;\n}\n\n.carousel-button.prev{\n    left: 1rem;\n    top: 50%;\n    transform: translateY(-50%);\n}\n.carousel-button.next{\n    right: 1rem;\n    top: 50%;\n    transform: translateY(-50%);\n}\n\n.img-wrapper{  \n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n}\n\n.img-wrapper li{\n    list-style: none;\n}\n\n.image{\n    height: 350px;\n    width: 100%;\n    grid-column: 1/2;\n    grid-row: 1/2;\n    opacity: 0;\n    transition: 0.3s ease-in;\n}\nimg {\n    object-fit: cover;\n    object-position: center;\n}\n\n.image.show{\n    opacity: 1;\n}\n.content-text{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.text-container{    \n    max-width: 1200px;\n    margin-right: 2em;\n}\n\n.hours, .text-description, .location-text{\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.37);\n    border-radius: 1.25rem;\n    padding: 2rem;\n    margin: 1rem;\n    margin-bottom: 1.5rem;\n    text-align: center;\n    font-family: var(--roboto);\n    color: var(--light-beige);\n    box-shadow: 4px 4px 20px rgba(254, 250, 224, 1);\n\n}\n.hours h3, .text-description h3, .location-text h3{\n    width: 100%;\n    color:var(--sage);\n    font-size: 1.5rem;\n    margin-top: 0;\n    margin-bottom: 0;\n    font-family: var(--playfair);\n}\n.hours ul{\n    padding: 0;\n    margin: 0;\n}\n\n.hours li{\n    list-style: none;\n}\n\n/* .map{\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n}\n.map iframe{\n    width: 100%;\n    height: 400px;\n} */\n\n\n/* MENU */\n\n.menu-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.category{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* background-color: rgba(254, 250, 224, 0.5); */\n    width: 1000px;\n    margin-right: 1em;\n}\n\n.category h2{\n    font-family: var(--logo);\n    font-size: 2rem;\n    padding: 2rem 2rem;\n    color: var(--light-beige);\n    text-shadow: 2px 2px 5px rgba(254, 250, 224, 0.829);\n}\n\n.card{\n    min-height: 350px;\n    max-height: 350px;\n    background-color: rgba(0, 0, 0, 0.452);\n    width: 550px;\n    display: flex;\n    justify-content: center;\n    border: 1px solid var(--light-sage);\n    border-radius: 1rem;\n    padding: 1em 1em;\n    margin: 1em 1em;\n    box-shadow: 4px 4px 20px rgba(254, 250, 224, 1);\n}\n\n.card h3, .card2 h3{\n    font-family: var(--playfair);\n    color: var(--light-beige);\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n}\n\n.card p, .card2 p{\n    font-family: var(--roboto);\n    font-weight: 100;\n    color: var(--beige);\n}\n\n.card img{\n    width: 300px;\n    border-radius: 1.5rem;\n    object-fit: cover;\n    object-position: center;\n    margin-left: 1rem;\n}\n\n\n\n/* CONTACT */\n\n\n.contact-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.card2{\n    height: 200px;\n    background-color: rgba(0, 0, 0, 0.452);\n    width: 550px;\n    display: flex;\n    justify-content: center;\n    border: 1px solid var(--light-sage);\n    border-radius: 1rem;\n    padding: 1em 1em;\n    margin: 1em 1em;\n    box-shadow: 4px 4px 20px rgba(254, 250, 224, 1);\n}\n.profile-pic{\n    max-width: 180px;\n    max-height: 180px;\n    margin-right: 1rem;\n}\n\n\n\n\n\n\n\nfooter{\n    font-family: var(--roboto);\n    font-size: 10px;\n    position: fixed;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.37);\n    width: 100%;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    z-index: 2;\n}\n\nfooter ul{\n    width: 1200px;\n}\n\nfooter li{\n    list-style: none;\n    color: var(--light-beige);\n}\nfooter a{\n    text-decoration: none;\n    color: var(--sage);\n}\n`,""]);const h=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(i[s]=!0)}for(var p=0;p<n.length;p++){var l=[].concat(n[p]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},i=[],d=0;d<n.length;d++){var s=n[d],p=a.base?s[0]+a.base:s[0],l=o[p]||0,c="".concat(p," ").concat(l);o[p]=l+1;var h=t(c),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==h)e[h].references++,e[h].updater(u);else{var f=r(u,a);a.byIndex=d,e.splice(d,0,{identifier:c,updater:f,references:1})}i.push(c)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=a(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var d=t(o[i]);e[d].references--}for(var s=a(n,r),p=0;p<o.length;p++){var l=t(o[p]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},820:(n,e,t)=>{n.exports=t.p+"e15b3f13436184305fb9.jpg"}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={id:a,exports:{}};return n[a](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!n;)n=a[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),a=t(795),r=t.n(a),o=t(569),i=t.n(o),d=t(565),s=t.n(d),p=t(216),l=t.n(p),c=t(589),h=t.n(c),u=t(426),f={};f.styleTagTransform=h(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;const g=t.p+"6e2ef5ceac30d69f55e3.png",m=t.p+"9b6e6b0ad5311be7c362.png",b=t.p+"2fbc24af7b6552482f50.png",v=t.p+"7b6ff13d91a5055d9d67.png";function y(n,e,t,a){const r=document.createElement(e);return"string"==typeof n&&r.classList.add(n),"string"==typeof t&&r.classList.add(t),r.textContent=a,r}function x(n,e,t){const a=new Image;return a.src=e,a.classList.add(n),"string"==typeof t&&a.classList.add(t),a}function w(n){let e=document.createElement("li");return e.textContent=n,e}function C(n,e,t,a){let r=y("card","div"),o=y("text","div"),i=y(void 0,"h3",void 0,n),d=y(void 0,"p",void 0,e),s=y(void 0,"h3",void 0,t);o.appendChild(i),o.appendChild(d),o.appendChild(s),r.appendChild(o);let p=new Image;return p.src=a,p.alt=n,r.appendChild(p),r}function M(n,e,t,a){let r=y("card2","div"),o=new Image;o.src=a,o.alt=n,o.classList.add("profile-pic"),r.appendChild(o);let i=y("text","div"),d=y(void 0,"h3",void 0,n),s=y(void 0,"p",void 0,e),p=y(void 0,"h3",void 0,t);return i.appendChild(d),i.appendChild(s),i.appendChild(p),r.appendChild(i),r}function k(n){let e=y("category","div"),t=y(void 0,"h2",void 0,n.toUpperCase());return e.appendChild(t),e}const j=y("contact-container","div"),T=new M("Miss Strawberry","Our in-store manager. She is in charge of all things sweet and sour.","+6012-3456789",g),S=new M("Sir Apple","Proudly in charge of all the apples in our store.","+6012-3456780",m),L=new M("Madam Orange","Zesty lady in charge of all the oranges in our store","+6012-3456781",b),A=new M("Mr Pineapple","The man in charge of our finances and all things accounts related.","+6012-3456782",v);j.appendChild(T),j.appendChild(S),j.appendChild(L),j.appendChild(A);const P=t.p+"2d3245af1d62400cd81b.jpg",E=t.p+"3bf615accd1808f8a52c.jpg",z=t.p+"9b41ea82e0f1c2242231.jpg",F=y("body-container","div"),$=y("carousel","div"),I=y("buttons","div"),O=y("carousel-button","button","prev","<"),D=y("carousel-button","button","next",">");I.appendChild(O),I.appendChild(D);const B=y("img-wrapper","div");B.appendChild(x("image",P,"show")),B.appendChild(x("image",E)),B.appendChild(x("image",z)),$.appendChild(B),$.appendChild(I);const N=y("content-text","div"),R=y("text-container","div"),U=y("text-description","div",void 0,"The best fruit themed dessert store in all of Wonderland. They have pies and marmalades and jams. The service is top notch. They serve fruit teas, detox drinks and all sorts of natural stuff. Love it!"),q=y(void 0,"h3",void 0,"Jennifer Popoye");U.appendChild(q);const H=y("hours","div"),W=y(void 0,"h3",void 0,"Hours"),Z=y(void 0,"ul");Z.appendChild(w("Sunday 8AM to 8PM")),Z.appendChild(w("Monday 6AM to 6PM")),Z.appendChild(w("Tuesday 6AM to 6PM")),Z.appendChild(w("Wednesday 6AM to 6PM")),Z.appendChild(w("Thursday 6AM to 8PM")),Z.appendChild(w("Friday 6AM to 10PM")),Z.appendChild(w("Saturday 8AM to 10PM")),H.appendChild(W),H.appendChild(Z);const J=y("location-text","div"),K=y(void 0,"h3",void 0,"Location"),_=y(void 0,"p",void 0,"9, Jalan Raja Chulan, Kuala Lumpur, WPKL");J.appendChild(K),J.appendChild(_),R.appendChild(U),R.appendChild(H),R.appendChild(J),N.appendChild(R),F.appendChild($),F.appendChild(N);const Y=document.querySelectorAll(".image"),G=document.querySelectorAll(".carousel-button");let Q=0;G.forEach((n=>{n.addEventListener("click",(()=>{Y[Q].classList.remove("show"),"next"===n.classList[1]?Q>=Y.length-1?Q=0:Q++:"prev"===n.classList[1]&&(Q<=0?Q=Y.length-1:Q--),Y[Q].classList.add("show")}))}));const V=t.p+"8f17c1d2a3f190a546b3.jpg",X=t.p+"62b31f2c828f65620d15.jpg",nn=t.p+"83d039321c191ef1e627.jpg",en=t.p+"99b2800bf71faebae047.jpg",tn=t.p+"4057fdf0e03b985f2b3f.jpg",an=t.p+"073cdb592e8a8a5cf6bd.jpg",rn=t.p+"883b0e62111014b266be.jpg",on=y("menu-container","div"),dn=new k("MAINS"),sn=new C("Fruity Waffle","Freshly made waffles topped with the best in season fresh fruits drizzled with peanut butter sauce and chocolate sauce. Please allow for 10 minutes preparation time.","$20",V),pn=new C("Mini Pancake","Freshly made mini pancakes topped with our in season berries. Drizzled on top with maple syrup and a side of our home made thick cream. Please allow for 10 minutes preparation time.","$20",X);dn.appendChild(sn),dn.appendChild(pn);const ln=new k("BAKED"),cn=new C("Mini Apple Pie","Freshly baked to order, using our best in season red apples from around the world, we serve the a delicious apple pie with hints of cinnamon, nutmeg and star anise.","$16",P),hn=new C("Blueberry Tart","Freshly baked daily, delicious Peru Giant Blueberries top our secret recipe of custard cream filling. The perfect match of tart and light custard creaminess. This is for all the custard loving people.","$15",E);ln.appendChild(cn),ln.appendChild(hn);const un=new k("SMOOTHIES"),fn=new C("Dragon Fruit Smoothie Bowl","Fresh pink dragon fruit from the farms of Malaysia are picked and frozen for this delicious dish. Absolutely dripping in sweetness and amazing goodness. Topped with bananas, coconut shaving, raisins and some ground nuts","$13",nn),gn=new C("Fruity Smoothie Bowl","Smoothie base is made of strawberry, blueberry, blackberry and raspberry. A tart dish that's perfectly balanced. Topped with fresh blackberry, raspberry, blueberry, coconut shaving, almonds and mango.","$12",en);un.appendChild(fn),un.appendChild(gn);const mn=new k("drinks"),bn=new C("Orange Basil Seed Drinks","Orange peel tea made with Basil seed to create the ultimate fresh cool drink. Syrup comes on the side for you to adjust the level of sweetness. Refreshing burst of orange aroma.","$6",tn),vn=new C("Hot Berry Tea","Loaded with fresh berries, this tea has been stewed and brewed for maximum effect. Fresh berries are added on top of this hot cup of tea.Would recommend for anyone who needs a hot and zesty pick me up.","$6",an);mn.appendChild(bn),mn.appendChild(vn);const yn=new k("add ons"),xn=new C("Orange Marmalade","Using the ripest navel oranges and our secret recipe, the perfect orange marmalade is now available for purchase. Perfect match for toast, crackers and topper for your favorite ice-cream","$24",z),wn=new C("KiwiMelon Popsicle","Made using the ripest watermelons harvested locally in Malaysia. We paired it with some zesty green kiwi. These are our famous popsicle that has been featured in The Ice Cream Mag. Comes in packs of 6.","$24",rn);yn.appendChild(xn),yn.appendChild(wn),on.appendChild(dn),on.appendChild(ln),on.appendChild(un),on.appendChild(mn),on.appendChild(yn);const Cn=document.querySelectorAll(".nav"),Mn=document.querySelector(".content");Mn.appendChild(F),Cn.forEach((n=>{n.addEventListener("click",(e=>{let t=document.querySelector(".active");Mn.removeChild(Mn.children[0]),t.classList.remove("active"),n.classList.add("active"),"menu"===n.classList[0]?Mn.appendChild(on):"home"===n.classList[0]?Mn.appendChild(F):"contact"===n.classList[0]&&Mn.appendChild(j)}))}))})()})();
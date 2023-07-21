export function createE(c, type, c2, text){
    const el = document.createElement(type);
    if(typeof c === "string")el.classList.add(c);
    if(typeof c2 === "string")el.classList.add(c2);
    el.textContent = text;
    return el
}

export function createI(c, src, c2){
   const image = new Image();
   image.src = src;
   image.classList.add(c);
   if(typeof c2 === "string") image.classList.add(c2);
   return image
}


export function createLi(text){
    let el = document.createElement("li");
    el.textContent = text;
    return el
}

export function Card(title, desc, price, src){
    let card = createE("card", "div");
    let txt = createE("text", "div");
    let nameh3 = createE(undefined, "h3", undefined, title);
    let p = createE(undefined, "p", undefined, desc);
    let priceh3 = createE(undefined, "h3", undefined, price);
    txt.appendChild(nameh3);
    txt.appendChild(p);
    txt.appendChild(priceh3);
    card.appendChild(txt);
    let img = new Image();
    img.src = src;
    img.alt = title;
    card.appendChild(img);
    return card;
}


export function Card2(name, desc, number, src){
    let card = createE("card2", "div");
    let img = new Image();
    img.src = src;
    img.alt = name;
    img.classList.add("profile-pic");
    card.appendChild(img);  
    let txt = createE("text", "div");
    let nameh3 = createE(undefined, "h3", undefined, name);
    let p = createE(undefined, "p", undefined, desc);
    let numberh3 = createE(undefined, "h3", undefined, number);
    txt.appendChild(nameh3);
    txt.appendChild(p);
    txt.appendChild(numberh3);
    card.appendChild(txt);    
    return card;
}

export function Category(name){
    let cat = createE("category", "div");
    let n = createE(undefined, "h2", undefined, name.toUpperCase());
    cat.appendChild(n);
    return cat;
}


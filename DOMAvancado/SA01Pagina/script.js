//adicionar elementos com DOM

//exemplo de Criação de OBJ com DOM
let header = document.createElement("header");
//estilização do elemento
header.style.backgroundColor = "black";
header.style.height = "8vh";
//adicionar elementos ao body
document.body.appendChild(header); //adicionando o header como elemento filho do body

document.body.style.margin = "0"; // retira a margem padrao do body

//adicionar elementos ao header
let divNav = document.createElement("div");
divNav.style.display = "flex";
divNav.style.justifyContent = "space-around";
divNav.style.height = "100%";
divNav.style.color = "aliceblue";
divNav.style.alignItems = "center";
divNav.style.fontSize = "5vh";
divNav.style.fontFamily = "Sans Serif";

header.appendChild(divNav) //adicionando divNav como elemento filho de header

let itensNav = ["Home", "Produtos", "Contato"];
//adicionar itens na nav
itensNav.forEach(e=>{
    let item = document.createElement("a");
    item.innerText = e;
    item.href = e.toLowerCase()+".html";
    item.style.textDecoration = "none";
    item.style.color = "aliceblue";
    divNav.appendChild(item);
})

let footer = document.createElement("footer");

footer.style.backgroundColor = "deepskyblue";
footer.style.height = "10rem";
footer.style.position = "fixed";
footer.style.width = "100%";
footer.style.bottom = "0";

document.body.appendChild(footer);

let textoFooter = document.createElement("p");
textoFooter.style.fontSize = "5rem";
textoFooter.style.display = "flex";
textoFooter.style.justifyContent = "center";
textoFooter.style.fontFamily = "Arial";
textoFooter.innerText = "Texto do footer"

footer.appendChild(textoFooter);

// Clonar Elementos com DOM

let card = document.createElement("div");
card.classList.add("card");
card.style.width = "150px";
card.style.height = "230px";
card.style.backgroundColor = "blue";
card.style.margin = "3rem";
card.style.borderRadius = "9%";

//criar um container para adicionar os cards
let container = document.createElement("div");
container.classList.add("container");
container.style.display = "flex";
container.style.justifyContent = "space-around";
container.style.margin = "0 auto";
container.style.width = "90%";
container.style.flexWrap = "wrap";

// criar um btn para clonar as div.card
let btnClonar = document.createElement("button");
btnClonar.innerText = "Clonar";
btnClonar.id = "btnClonar";
document.body.appendChild (btnClonar); //add btn ao body
document.body.appendChild(container); // add container ao baby
container.appendChild(card);//add card ao container

//criar um método para adicionar evento ao btn
btnClonar.addEventListener("click", () => {
  let clonar = card.cloneNode(true); //clonar o card
  container.appendChild(clonar);
});

let chave = document.createElement("input");
chave.type = "checkbox"
chave.id = "darkMode"
chave.style.position = "fixed";
chave.style.top = "10px"; //Chave topo a Direita


document.body.appendChild(chave); //add chave ao body

// criando evento pra chave

chave.addEventListener("change", ()=>{
    document.body.classList.toggle("darkMode");
})
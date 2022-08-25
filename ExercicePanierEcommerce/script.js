const items = [
    {
        name: "Chaussure A",
        price: 100,
        quantity: 0
    },
    {
        name: "Chaussure B",
        price: 135,
        quantity: 0
    }
]

let total = 0
let article1 = document.getElementById("article1");
let article2 = document.getElementById("article2");

let btn = document.querySelectorAll(".btn-ajouter");
let quantity = document.querySelectorAll(".quantity")
let affichageTotal = document.querySelector(".total");



article1.querySelector(".name").innerHTML = "Nom: " + items[0].name;
article1.querySelector(".prix").innerHTML = items[0].price + " €";
article1.querySelector(".quantity").innerHTML = "Quantité: " + items[0].quantity;

article2.querySelector(".name").innerHTML = "Nom: " + items[1].name;
article2.querySelector(".prix").innerHTML = items[1].price + " €";
article2.querySelector(".quantity").innerHTML = "Quantité: " + items[1].quantity;


for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", ()=> remplirPanier(btn[i].dataset.id))
}

function remplirPanier(article) {
    let prix = items[article].price;
    items[article].quantity++;
    total += prix;
    
    affichageTotal.textContent = "Total: " + total + " €";
    for(let i = 0; i < quantity.length ; i++){
        quantity[i].innerHTML = "Quantité: " + items[i].quantity;
    }


}


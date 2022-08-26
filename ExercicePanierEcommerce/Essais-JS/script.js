let urlTable = ["http://data.snx.ovh/page1.json", "http://data.snx.ovh/page2.json"]


let url = "http://data.snx.ovh/page2.json";
pageChoice(0);
function pageChoice(url) {

    fetch(urlTable[url])
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        }
        )
        .then((items) => {

            let container = document.querySelector(".container");
            let divMagasin = document.createElement("div");
            divMagasin.className= "magasin"
            container.innerHTML= " ";
            

            for (let i = 0; i < items.length; i++) {
                let divArticle = document.createElement("div");
                divArticle.className = "article"

                let h2Article = document.createElement("h2");
                h2Article.className = "name";
                h2Article.innerHTML = items[i].name;

                let pPrice = document.createElement("p");
                pPrice.className = "price";
                pPrice.innerHTML = items[i].price + " €";

                let pQuantity = document.createElement("p");
                pQuantity.className = "quantity";
                pQuantity.innerHTML = "Quantité: " + items[i].quantity;

                let btnAjout = document.createElement("button");
                btnAjout.className = "btn-ajout";
                btnAjout.innerHTML = "Ajouter au panier";
                btnAjout.dataset.id = i;

                container.appendChild(divMagasin)
                divMagasin.appendChild(divArticle);
                divArticle.appendChild(h2Article);
                divArticle.appendChild(pPrice);
                divArticle.appendChild(pQuantity);
                divArticle.appendChild(btnAjout);

            }

            let pTotal = document.createElement("p");
            pTotal.className = "total";
            pTotal.innerHTML = "Total: ";

            let spanPrix = document.createElement("span");
            spanPrix.className = "priceNumber"
            spanPrix.innerHTML = " 0 €";
            pTotal.append(spanPrix);

            
            container.appendChild(pTotal)

            let total = 0

            let btn = document.querySelectorAll(".btn-ajout");
            let quantity = document.querySelectorAll(".quantity");
            let affichageTotal = document.querySelector(".total");

            for (let i = 0; i < btn.length; i++) {
                btn[i].addEventListener("click", () => remplirPanier(btn[i].dataset.id));
            }


            function remplirPanier(article) {
                let prix = items[article].price;
                items[article].quantity++;
                total += prix;

                affichageTotal.textContent = "Total: " + total + " €";
                for (let i = 0; i < quantity.length; i++) {
                    quantity[i].innerHTML = "Quantité: " + items[i].quantity;
                }
            }
        })
        .catch(error => console.log("Erreur: " + error));
}

let divBtnPage = document.createElement("div");
divBtnPage.className = "divBtnPage";
document.body.appendChild(divBtnPage);
for (let i = 0; i < urlTable.length; i++) {
    let buttonPage = document.createElement("button");
    buttonPage.className = "btn-page"
    buttonPage.innerHTML = i + 1;
    buttonPage.dataset.id = i;
    divBtnPage.appendChild(buttonPage);
}

let btnPage = document.querySelectorAll(".btn-page");
for (let i = 0; i < btnPage.length; i++) {
    btnPage[i].addEventListener("click", () => pageChoice(btnPage[i].dataset.id))
}

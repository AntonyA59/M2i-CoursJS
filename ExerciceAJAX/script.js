

let url = "https://api.publicapis.org/categories";

let select = document.getElementById("category");
let optionTable = []

fetch(url)
.then(function (response){
    if(response.ok){
        return console.log(response.json)
    }
})
.then((items) => {

})


// fetch(url)
//     .then(function (response) {
//         if (response.ok) {
//             return response.json();
//         }
//     })
//     .then((items) => {

//         let url2 ="https://api.publicapis.org/entries?Category=Animals";
        
//         fetch(url2)
//         .then(function (response) {
//             if (response.ok) {
//                 return response.json();
//             }
//         })
//         .then((items)=>{
//             console.log(items.entries);
//             for (let i = 0; i < items.entries.length; i++) {
    
//                 let container = document.querySelector(".container");
    
//                 let divCard = document.createElement("div");
//                 divCard.className = "card";
    
//                 let h2Card = document.createElement("h2");
//                 h2Card.innerHTML = items.entries[i].API;
    
//                 let pDescriptionCard = document.createElement("p");
//                 pDescriptionCard.innerHTML = "Descriptions : " + items.entries[i].Description
    
    
//                 let pAuthCard = document.createElement("p");
//                 pAuthCard.innerHTML = "Auth : " + items.entries[i].Auth
    
//                 let pHTTPSCard = document.createElement("p");
//                 if (items.entries[i].HTTPS === true) {
//                     pHTTPSCard.innerHTML = "HTTPS : " + `<i class="fa-solid fa-circle-check green"></i>`
//                 } else {
//                     pHTTPSCard.innerHTML = "HTTPS : " + `<i class="fa-solid fa-circle-xmark red"></i>`
//                 }
    
//                 let pCorsCard = document.createElement("p");
//                 if (items.entries[i].Cors === "yes") {
//                     pCorsCard.innerHTML = "Cors : " + ` <i class="fa-solid fa-circle-check green"></i>`
//                 } else if (items.entries[i].Cors === "no") {
//                     pCorsCard.innerHTML = "Cors : " + ` <i class="fa-solid fa-circle-xmark red"></i>`
//                 } else if (items.entries[i].Cors === "unknown") {
//                     pCorsCard.innerHTML = "Cors : " + ` <i class="fa-solid fa-circle-question"></i>`
//                 }
    
    
    
//                 let aLinkCard = document.createElement("a");
//                 aLinkCard.target = "_blank"
//                 aLinkCard.className = "btn-link"
//                 aLinkCard.href = items.entries[i].Link
//                 aLinkCard.innerHTML = "Visitez le site"
    
    
    
//                 container.appendChild(divCard);
//                 divCard.appendChild(h2Card);
//                 divCard.appendChild(pDescriptionCard);
//                 if (!items.entries[i].Auth == "") {
//                     divCard.appendChild(pAuthCard);
//                 }
//                 divCard.appendChild(pHTTPSCard);
//                 divCard.appendChild(pCorsCard);
//                 divCard.appendChild(aLinkCard);
//             }
//         })

//     })

    





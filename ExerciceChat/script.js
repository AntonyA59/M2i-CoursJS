let url = "http://data.snx.ovh/messages.php";
let messageBox = document.getElementById("MessageBox");


fetch(url)
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
    })
    .then((message) => {
        for (let i = message.length-1 ; i >= 0; i--) {
            let divContent = document.createElement("div");
            divContent.className = "content"


            let pMessage = document.createElement("p");
            pMessage.className = "d-block w-50 pMessage-2 btn bg-primary bg-gradient text-start text-light fw-bold borderRad message"
            pMessage.innerHTML = message[i].message;


            let pPseudo = document.createElement("p");
            let dates = message[i].date
            let splitDate = dates.split(" ")
            pPseudo.innerHTML = message[i].pseudo + " à " + splitDate[1];

            messageBox.appendChild(divContent);
            divContent.appendChild(pPseudo);
            divContent.appendChild(pMessage)
        }
    })
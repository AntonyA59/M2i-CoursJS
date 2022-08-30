let url = "http://data.snx.ovh/messages.php";
let messageBox = document.getElementById("MessageBox");



const myInit = {
    method: "POST",

/**
 * These headers will be added to the request and tell
 * the API that the request body is JSON and that we can
 * accept JSON responses.
 */
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
}
messageSent()
function messageSent(){
    messageBox.innerHTML= " ";
    fetch(url)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then((message) => {
            for (let i = message.length - 1; i >= 0; i--) {
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
            messageBox.scrollTop = messageBox.scrollHeight
        })
}



    let texteArea = document.querySelector("#floatingTextarea2")
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const data= {
            pseudo: "Antony",
            message: texteArea.value
        }
        fetch(url,{

            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },

            method: 'POST',
            body: JSON.stringify(data), 
        })
        .then((response) => {

            return response.json()
        })
        .then((data) => {
            if(data.response == false){
                messageSent()
            }
            texteArea.value = ""
        })
        .catch((e) => console.log(e))
    })

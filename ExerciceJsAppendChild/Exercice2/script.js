let h2 = document.createElement("h2")
let p = document.createElement("p")
let a = document.createElement("a")

h2.innerHTML = "HTML Links"
p.innerHTML = "HTML links are defined with the a tag:"
a.innerHTML = "This is a link"
a.setAttribute("href", "https://www.w3schools.com")

document.body.appendChild(h2)
document.body.appendChild(p)
document.body.appendChild(a)
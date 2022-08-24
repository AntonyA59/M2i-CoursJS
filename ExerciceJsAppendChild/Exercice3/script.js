let p1 = document.createElement("p");
let p2 = document.createElement("p");
let b = document.createElement("b");

p1.innerHTML = "This text is normal."
b.innerHTML = "This text is bold"
p2.appendChild(b);


document.body.appendChild(p1);
document.body.appendChild(p2);

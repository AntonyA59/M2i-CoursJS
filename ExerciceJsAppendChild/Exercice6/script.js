let h2 = document.createElement("h2");
let p = document.createElement("p");

let ul1 = document.createElement("ul");
let ul2 = document.createElement("ul");

let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
let li5 = document.createElement("li");

h2.innerHTML = "A Nested List";
p.innerHTML = "Lists can be nested (list inside list):"

li1.innerHTML = "Coffee";
li2.innerHTML = "Tea";
li3.innerHTML = "Black Tea";
li4.innerHTML = "Green Tea";
li5.innerHTML = "Milk";

document.body.appendChild(h2);
document.body.appendChild(p);
document.body.appendChild(ul1);
ul1.appendChild(li1);
ul1.appendChild(li2);
li2.appendChild(ul2);
ul2.appendChild(li3);
ul2.appendChild(li4);
ul1.appendChild(li5);



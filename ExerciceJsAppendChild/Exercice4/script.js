let style = document.createElement("style");
let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");
let p4 = document.createElement("p");
let p5 = document.createElement("p");

text1 = "this is a paragraph";

style.innerHTML = "p.error{color : red;}";
p1.innerHTML = text1;
p2.innerHTML = text1;
p3.innerHTML = "I am different";
p4.innerHTML = text1;
p5.innerHTML = "I am different too";

p3.setAttribute("class", "error")
p5.setAttribute("class", "error")

document.head.appendChild(style);
document.body.appendChild(p1);
document.body.appendChild(p2);
document.body.appendChild(p3);
document.body.appendChild(p4);
document.body.appendChild(p5);

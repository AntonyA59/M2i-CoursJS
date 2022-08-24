let style = document.createElement("style");
let h2 = document.createElement("h2");
let p = document.createElement("p");
let table = document.createElement("table");

let tr = document.createElement("tr");
let tr2 = document.createElement("tr");
let tr3 = document.createElement("tr");
let tr4 = document.createElement("tr");

let th = document.createElement("th");
let th2 = document.createElement("th");
let th3 = document.createElement("th");

let td1 = document.createElement("td");
let td1_2 = document.createElement("td");
let td1_3 = document.createElement("td");

let td2 = document.createElement("td");
let td2_2 = document.createElement("td");
let td2_3 = document.createElement("td");

let td3 = document.createElement("td");
let td3_2 = document.createElement("td");
let td3_3 = document.createElement("td");

style.innerHTML = "table, th, td { border: 1px solid black }";
h2.innerHTML = "Table with border";
p.innerHTML = "Use the CSS border property to add a border to the table";
table.setAttribute("style","width:100%")

th.innerHTML = "FirstName"
th2.innerHTML = "LastName"
th3.innerHTML = "Age"

td1.innerHTML = "Jill"
td1_2.innerHTML = "Smith"
td1_3.innerHTML = "50"

td2.innerHTML = "Eve"
td2_2.innerHTML = "Jackson"
td2_3.innerHTML = "93"

td3.innerHTML = "John"
td3_2.innerHTML = "Doe"
td3_3.innerHTML = "80"

document.head.appendChild(style);
document.body.appendChild(h2);
document.body.appendChild(p);
document.body.appendChild(table);
table.appendChild(tr).appendChild(th);
table.appendChild(tr).appendChild(th2);
table.appendChild(tr).appendChild(th3);

table.appendChild(tr2).appendChild(td1)
table.appendChild(tr2).appendChild(td1_2)
table.appendChild(tr2).appendChild(td1_3)

table.appendChild(tr3).appendChild(td2)
table.appendChild(tr3).appendChild(td2_2)
table.appendChild(tr3).appendChild(td2_3)

table.appendChild(tr4).appendChild(td3)
table.appendChild(tr4).appendChild(td3_2)
table.appendChild(tr4).appendChild(td3_3)

const headerContent = `<section> <span> <h1> Internal Company Directory </h1> </span> <section>`;

let body = document.querySelector("body");
document.body.innerHTML = headerContent;

let flex = document.createElement("section");
body.appendChild(flex);

for (x = 0; x < customers.results.length; x++){
console.log(customers.results[x].name.first);


  let personDiv =  `<div class = personbox><img src = ${customers.results[x].picture.large}> <h4> ${customers.results[x].name.title} ${customers.results[x].name.first} ${customers.results[x].name.last}</h4> <p class = email>${customers.results[x].email}</p> <p class = info> ${customers.results[x].location.street}</p> <p class = info> ${customers.results[x].location.city} ${customers.results[x].location.state} ${customers.results[x].location.postcode} </p> <p class = "info">${customers.results[x].cell}</p></div>`;


  flex.innerHTML += personDiv;

}




// 56.548

// 76.969

//

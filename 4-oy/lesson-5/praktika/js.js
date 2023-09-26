
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>response.json())
.then((json) => render(json));
let elul = document.querySelector("ul");

function render(arr){
    for(i of arr){
        console.log(i);
        let elli = document.createElement("li");
        
        elli.innerHTML = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${i.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${i.username}</h6>
          <p class="card-text">ID:${i.id}</p>
          <p class="card-text">company:</p>
          <p class="card-text">${i.company.name}</p>
          <p class="card-text">${i.company.catchPhrase}</p>
          <p class="card-text">${i.company.bs}</p>
          <a href="${i.email}">${i.email}</a>
          <br>
          <a href="${i.website}">${i.website}</a>
        </div>
       </div>`;
       console.log(i.company.name);

      elul.appendChild(elli);
    }
}


// console.log(elul);




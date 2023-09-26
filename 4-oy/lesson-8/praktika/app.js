let API ="107cd7ad";

let  elInput= document.querySelector("input");
let elForm=document.querySelector("form");
let div = document.querySelector(".div");
// let cardDiv = document.querySelector(".card");

elForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API}&s=${elInput.value}`)
    .then(resolve=>resolve.json())
    .then((data)=>renDer(data.Search));
    
    
})

function renDer(dataSearch) {
    for(i of dataSearch){
        console.log(i);
        let imagess = document.createElement("img");
        let elP = document.createElement("p");
        let elDiv = document.createElement("div");

        imagess.src=i.Poster
        elP.textContent =i.Title;

        elDiv.append(imagess,elP);
        div.appendChild(elDiv);
      
    }
}

{/* <div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">   Poster
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div> */}
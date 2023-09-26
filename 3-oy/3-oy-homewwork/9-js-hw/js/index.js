let moviesList=document.querySelector(".moviesList");

let res="";
for(i of movies){
    res +=`
    <div class="card bg-dark text-white" style="width: 18rem;">
    <img src="${i.bigThumbnail}" class="card-img-top" alt="...">
    <div class="card-body ">
      <h5 class="card-title">${i.summary}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="https://www.youtube.com/watch?v=${i.youtubeId}" target="_blank" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `;
}

moviesList.innerHTML=res;





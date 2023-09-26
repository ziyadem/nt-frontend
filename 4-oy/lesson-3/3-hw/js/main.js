
let ul = document.querySelector("ul");
for (i of pokemons){
	let ulList = document.createElement("li"),
	 ulh4 = document.createElement("h4"),
	 img = document.createElement("img"),
	 hgh= document.createElement("p"),
	 wgh= document.createElement("p"),
	 candy= document.createElement("p"),
	 weaknesses= document.createElement("div");
	 
	 
	 ulh4.textContent = i.name;
	 img.src = i.img;
	 hgh.textContent = `height: ${i.height}`;
	 wgh.textContent = `weight: ${i.weight}`;
	 candy.textContent = i.candy;
	 for(j of i.weaknesses){
		let wekLi = document.createElement('p');
		wekLi.textContent = `${j};`;
		weaknesses.appendChild(wekLi);
	 }
	ulList.append(img , ulh4,hgh,wgh,candy,weaknesses);	
	ul.appendChild(ulList);
}


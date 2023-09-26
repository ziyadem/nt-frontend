
let form = document.querySelector("form"),
    input = document.querySelector("input"),
	select = document.querySelector("select");
	
form.addEventListener("input", (evt) =>{
	evt.preventDefault();
	ul.innerHTML ="";
	let inputVal = input.value.toLowerCase();
	if(select.value === "all"){
		let newArr = [];
		for (elm of pokemons){
			if (elm.name.toLowerCase().includes(inputVal)) {
				newArr.push(elm);
			}
		}
		render(newArr);
	}else{
		let typeinput =[];
		let typinpren = [];
		for (z of pokemons){
			for (x of z.type){
				if(x===select.value){
				   typeinput.push(z)
				}
			}
		}
		for(r of typeinput){
			if (r.name.toLowerCase().includes(inputVal)) {
				typinpren.push(r);
			}
		}
		render(typinpren);
	}
	
});

let newType =[];

for (k of pokemons){
	for(m of k.type){
		if (!newType.includes(m)) {
			newType.push(m);
		}
	}
}
for (n of newType){
	let optionall = document.createElement("option");
	optionall.textContent = n;
	select.appendChild(optionall);
}

select.addEventListener('change', () => {
	let newsort = [];
	ul.innerHTML = '';
	let SelectVal = select.value;
	if(SelectVal === 'all'){
		render(pokemons);
	}
	for (z of pokemons){
		for (x of z.type){
			if(x===SelectVal){
               newsort.push(z)
			}
		}
	}
	render(newsort);
});


let ul = document.querySelector("ul");
function render(arr) {
	num =1;
	for (i of arr){
		let ulList = document.createElement("li"),
		 ulh4 = document.createElement("h4"),
		 img = document.createElement("img"),
		 hgh= document.createElement("p"),
		 wgh= document.createElement("p"),
		 candy= document.createElement("p"),
		 weaknesses= document.createElement("div"),
		 typeDiv= document.createElement("div");
		 
		 
		 ulh4.textContent = i.name;
		 img.src = i.img;
		 hgh.textContent = `height: ${i.height}`;
		 wgh.textContent = `weight: ${i.weight}`;
		 candy.textContent = i.candy;
		 ulList.append(img);
		 let wekh5 = document.createElement('h5');
		 wekh5.textContent = num;
		 ulList.append(wekh5);
		 num +=1;
		 for(j of i.weaknesses){
			let wekLi = document.createElement('p');
			wekLi.textContent = `${j};`;
			weaknesses.appendChild(wekLi);
		 }
		 for(q of i.type){
			let qli = document.createElement('p');
			qli.textContent = `${q};`;
			typeDiv.appendChild(qli);
		 }
		ulList.append(ulh4,hgh,wgh,candy,weaknesses,typeDiv);	
		ul.appendChild(ulList);
	}
}

render(pokemons);






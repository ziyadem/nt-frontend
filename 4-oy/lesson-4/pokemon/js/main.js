let boxes = document.querySelector('.box-dad');
let elForm = document.querySelector('form');
let elInput = document.querySelector('input');
let elSelect = document.querySelector('select');

let newArr = [];
let sortArr = [];
let pokemonsType = [];

pokemons.forEach((el) => {
	pokemonsType.push(...el.type);
	for (let i = 0; i < pokemonsType.length; i++) {
		if (!sortArr.includes(pokemonsType[i])) {
			sortArr.push(pokemonsType[i]);
		}
	}
});
sortArr.forEach((el) => {
	let elOption = document.createElement('option');
	elOption.textContent = el;
	elOption.value = el;
	elSelect.appendChild(elOption);
});

elSelect.addEventListener('change', () => {
	boxes.innerHTML = '';
	let elSelectVal = elSelect.value;
	if (elSelectVal == 'ALL') {
		return render(pokemons);
	}
	pokemons.forEach((el) => {
		if (el.type.includes(elSelectVal)) {
			newArr.push(el);
		}
	});
	render(newArr);
	newArr = [];
});

elForm.addEventListener('input', (evt) => {
	evt.preventDefault();
	boxes.innerHTML = '';
	let elInputVal = elInput.value.toLowerCase();
	if (sortArr.length > 0) {
		sortArr.forEach((el) => {
			if (el.name.toLowerCase().includes(elInputVal)) {
				newArr.push(el);
			}
		});
		render(newArr);
		newArr = [];
		return 0;
	}
	pokemons.forEach((el) => {
		if (el.name.toLowerCase().includes(elInputVal)) {
			newArr.push(el);
		}
	});
	render(newArr);
	newArr = [];
	console.log(elInputVal);
});


function render(arr) {
	arr.forEach((poc) => {
		let box = document.createElement('div');
		let div_img = document.createElement('div');
		let img = document.createElement('img');
		let id = document.createElement('p');
		let name = document.createElement('h1');
		let height = document.createElement('p');
		let weight = document.createElement('p');
		let weaknesses = document.createElement('p');

		box.classList.add('box');
		div_img.classList.add('img_manip');
		id.classList.add('number');
		weaknesses.classList.add('weak');

		img.src = poc.img;
		id.textContent = poc.id;
		name.textContent = poc.name;
		height.textContent = `height: ${poc.height}`;
		weight.textContent = `weight: ${poc.weight}`;
		weaknesses.textContent = poc.weaknesses;
		div_img.append(img);
		box.append(div_img, id, name, height, weight, weaknesses);
		boxes.appendChild(box);
	});
}
render(pokemons);

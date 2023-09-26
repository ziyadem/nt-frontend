fetch('https://jsonplaceholder.typicode.com/posts?&userId=1')
      .then(response => response.json())
      .then(json1 => render(json1))
      .then(json1 =>modall(json1))



let elul = document.querySelector("ul"),
    btn1 =document.querySelector(".btn1"),
    btn2 =document.querySelector(".btn2"),
    btn3 =document.querySelector(".btn3"),
    btn4 =document.querySelector(".btn4"),
    btn5 =document.querySelector(".btn5"),
    btn6 =document.querySelector(".btn6"),
    btn7 =document.querySelector(".btn7"),
    btn8 =document.querySelector(".btn8"),
    btn9 =document.querySelector(".btn9"),
    btn10 =document.querySelector(".btn10");
console.log(elul);
console.log(btn2);

btn1.addEventListener("click", function(){
    elul.innerHTML='';
    fetch('https://jsonplaceholder.typicode.com/posts?&userId=1')
      .then(response => response.json())
      .then(json1 => render(json1))
    fetch('https://jsonplaceholder.typicode.com/users?id=1')
      .then(response => response.json())
      .then(json1 => modall(json1))
    
})
btn2.addEventListener("click", function(){
    elul.innerHTML='';
    fetch('https://jsonplaceholder.typicode.com/posts?&userId=2')
      .then(response => response.json())
      .then(json2 => render(json2))
    fetch('https://jsonplaceholder.typicode.com/users?id=2')
      .then(response => response.json())
      .then(json2 => modall(json2))
    
})
btn3.addEventListener("click", function(){
    elul.innerHTML='';
    fetch('https://jsonplaceholder.typicode.com/posts?&userId=3')
      .then(response => response.json())
      .then(json3 => render(json3))
    fetch('https://jsonplaceholder.typicode.com/users?id=3')
      .then(response => response.json())
      .then(json3 => modall(json3))
    
})
btn4.addEventListener("click", function(){
    elul.innerHTML='';
    fetch('https://jsonplaceholder.typicode.com/posts?&userId=4')
      .then(response => response.json())
      .then(json4 => render(json4))
    fetch('https://jsonplaceholder.typicode.com/users?id=4')
      .then(response => response.json())
      .then(json5 => modall(json5))
    
})
btn5.addEventListener("click", function(){
    elul.innerHTML='';
    fetch('https://jsonplaceholder.typicode.com/posts?&userId=5')
      .then(response => response.json())
      .then(json5 => render(json5))
    fetch('https://jsonplaceholder.typicode.com/users?id=5')
      .then(response => response.json())
      .then(json5 => modall(json5))
    
})
btn6.addEventListener("click", function(){
    elul.innerHTML='';
    fetch('https://jsonplaceholder.typicode.com/posts?&userId=6')
      .then(response => response.json())
      .then(json6 => render(json6))
    fetch('https://jsonplaceholder.typicode.com/users?id=6')
      .then(response => response.json())
      .then(json6 => modall(json6))
    
})
btn7.addEventListener("click", function(){
    elul.innerHTML='';
    fetch('https://jsonplaceholder.typicode.com/posts?&userId=7')
      .then(response => response.json())
      .then(json7 => render(json7))
    fetch('https://jsonplaceholder.typicode.com/users?id=7')
      .then(response => response.json())
      .then(json7 => modall(json7))
    
})
btn8.addEventListener("click", function(){
    elul.innerHTML='';
    fetch('https://jsonplaceholder.typicode.com/posts?&userId=8')
      .then(response => response.json())
      .then(json8 => render(json8))
    fetch('https://jsonplaceholder.typicode.com/users?id=8')
      .then(response => response.json())
      .then(json8 => modall(json8))
    
})
btn9.addEventListener("click", function(){
    elul.innerHTML='';
    fetch('https://jsonplaceholder.typicode.com/posts?&userId=3')
      .then(response => response.json())
      .then(json9 => render(json9))
    fetch('https://jsonplaceholder.typicode.com/users?id=9')
      .then(response => response.json())
      .then(json9 => modall(json9))
    
})
btn10.addEventListener("click", function(){
    elul.innerHTML='';
    fetch('https://jsonplaceholder.typicode.com/posts?&userId=10')
      .then(response => response.json())
      .then(json10 => render(json10))
    fetch('https://jsonplaceholder.typicode.com/users?id=10')
      .then(response => response.json())
      .then(json10 => modall(json10))
    
})


function render(arr){
    for(i of arr){
        let elli = document.createElement("li");
        let elh2 = document.createElement("h2");
        let elpar = document.createElement("p");
        let elp = document.createElement("p");
        let elbtn = document.createElement("button");
        elbtn.classList.add("elbtn1");

        elh2.textContent = `UserID:${i.userId}`;
        elpar.textContent =`Title:${i.title}`;
        elp.textContent =`Body:${i.body}`;
        elbtn.textContent =i.id;

        elli.append(elh2,elpar,elp,elbtn);
        elul.appendChild(elli);


    }
}


function modall(arr) {
    console.log(arr[0]);
   let elbtnAdd =document.querySelectorAll(".elbtn1");
   console.log(elbtnAdd[1]);
   let divModal = document.querySelector(".divModal");
   let modalHero = document.querySelector(".hero");
   for(k of elbtnAdd){
       k.addEventListener("click", function() {
        divModal.style.display = "block";
        let modalh2=document.createElement("h2");
        let modalh3=document.createElement("h3");
        let modalp=document.createElement("p");
        let modalp1=document.createElement("p");
        let modalp2=document.createElement("p");
        let modalp3=document.createElement("p");
        let modalp4=document.createElement("p");
        let modala1=document.createElement("a");
        let modala2=document.createElement("a");
        let modalp5=document.createElement("p");
        modalh2.textContent=`Name:${arr[0].name}`;
        modalh3.textContent=`UserName:${arr[0].username}`;
        modalp.textContent=`Address:`;
        modalp1.textContent=`street:${arr[0].address.street}`;
        modalp2.textContent=`suite:${arr[0].address.suite}`;
        modalp3.textContent=`city:${arr[0].address.city}`;
        modalp4.textContent=`zipcode:${arr[0].address.zipcode}`;
        modalp5.textContent=`Company:${arr[0].company.name}`;
        modala1.textContent=arr[0].email;
        modala2.textContent=arr[0].website;
        modalHero.append(modalh2,modalh3,modalp,modalp1,modalp2,modalp3,modalp4,modalp5,modala1,modala2);
    
    })
   }
}
let img = document.querySelector(".img");
img.addEventListener("click", function (){
    let divModal = document.querySelector(".divModal");
   let modalHero = document.querySelector(".hero");
    modalHero.innerHTML='';
    divModal.style.display = "none";
})


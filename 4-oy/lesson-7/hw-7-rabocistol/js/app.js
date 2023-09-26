
let login = localStorage.getItem("token"),
    bodyHero=document.querySelector(".body-hero"),
    btn1=document.querySelector(".btn1"),
    btn2=document.querySelector(".btn2"),
    btn3=document.querySelector(".btn3"),
    btn4=document.querySelector(".btn4"),
    btn5=document.querySelector(".btn5"),
    pagination=document.querySelector(".pagination");

if(!login){
    window.location.replace("./login.html")
}


axios.defaults.baseURL="https://fakestoreapi.com/";
(async function (){
    let {data:res} = await axios.get("/products?limit=4");
    let {data:ress} = await axios.get("/products");
    search(ress);
    render(res);
    
})();

btn1.addEventListener("click", ()=>{
    btn1.style.backgroundColor="#0D6EFD";
    btn1.style.color="white";
    btn2.style.backgroundColor="white";
    btn2.style.color="#0D6EFD";
    btn3.style.backgroundColor="white";
    btn3.style.color="#0D6EFD";
    btn4.style.backgroundColor="white";
    btn4.style.color="#0D6EFD";
    btn5.style.backgroundColor="white";
    btn5.style.color="#0D6EFD";
    let arr=[];
    for (let i = 1; i < 5; i++) {
        (async function (){
            let {data:res} = await axios.get(`/products/${i}`);
            arr.push(res);
            render(arr);
        })();
        
    }
});

btn2.addEventListener("click", ()=>{
    btn1.style.backgroundColor="white";
    btn1.style.color="#0D6EFD";
    btn2.style.backgroundColor="#0D6EFD";
    btn2.style.color="white";
    btn3.style.backgroundColor="white";
    btn3.style.color="#0D6EFD";
    btn4.style.backgroundColor="white";
    btn4.style.color="#0D6EFD";
    btn5.style.backgroundColor="white";
    btn5.style.color="#0D6EFD";
    let arr=[];
    for (let i = 5; i < 9; i++) {
        (async function (){
            let {data:res} = await axios.get(`/products/${i}`);
            arr.push(res);
            render(arr);
        })();
        
    }
});
btn3.addEventListener("click", ()=>{
    btn3.style.backgroundColor="#0D6EFD";
    btn3.style.color="white";
    btn1.style.backgroundColor="white";
    btn1.style.color="#0D6EFD";
    btn2.style.backgroundColor="white";
    btn2.style.color="#0D6EFD";
    btn4.style.backgroundColor="white";
    btn4.style.color="#0D6EFD";
    btn5.style.backgroundColor="white";
    btn5.style.color="#0D6EFD";
    let arr=[];
    for (let i = 9; i < 13; i++) {
        (async function (){
            let {data:res} = await axios.get(`/products/${i}`);
            arr.push(res);
            render(arr);
        })();
        
    }
});
btn4.addEventListener("click", ()=>{
    btn4.style.backgroundColor="#0D6EFD";
    btn4.style.color="white";
    btn3.style.backgroundColor="white";
    btn3.style.color="#0D6EFD";
    btn1.style.backgroundColor="white";
    btn1.style.color="#0D6EFD";
    btn2.style.backgroundColor="white";
    btn2.style.color="#0D6EFD";
    btn5.style.backgroundColor="white";
    btn5.style.color="#0D6EFD";
    let arr=[];
    for (let i = 13; i < 17; i++) {
        (async function (){
            let {data:res} = await axios.get(`/products/${i}`);
            arr.push(res);
            render(arr);
        })();
        
    }
});
btn5.addEventListener("click", ()=>{
    btn5.style.backgroundColor="#0D6EFD";
    btn5.style.color="white";
    btn4.style.backgroundColor="white";
    btn4.style.color="#0D6EFD";
    btn3.style.backgroundColor="white";
    btn3.style.color="0D6EFD";
    btn1.style.backgroundColor="white";
    btn1.style.color="#0D6EFD";
    btn2.style.backgroundColor="white";
    btn2.style.color="#0D6EFD";
    let arr=[];
    for (let i = 17; i < 21; i++) {
        (async function (){
            let {data:res} = await axios.get(`/products/${i}`);
            arr.push(res);
            render(arr);
        })();
        
    }
});


function render(obj) {
    bodyHero.innerHTML="";
    for(i of obj){
        let elDiv=document.createElement("div");
        elDiv.classList.add("card-product");
        elDiv.innerHTML=`
        <img src= ${i.image}
        alt="">
        <h4>${i.category}</h4>
        <p>${i.title}</p>
        <div class="count-rate">
            <span>
                <img src="./img/rate.png" alt="">
                <p>${i.rating.rate}</p>
            </span>
            <span>
                <img src="./img/count.png" alt="">
                <p>${i.price}</p>
            </span>
        </div>
        <div class="card-footer">
            <button class="more" id=${i.id} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">More...</button>
            <button class="save" id=${i.id}>Save</button>
        </div>
        
        `;
        bodyHero.append(elDiv);
    }
}

function modalrender(res) {
    console.log(res);
    let modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML='';
    modalBody.innerHTML=`
    <img src=${res.image} alt="">
    <p>category:${res.category}</p>
    <p>description:${res.description}
    </p>
    <p>id:${res.id}</p>
    <p>price:${res.price}</p>
    <p>rating: rate:${res.rating.rate} count:${res.rating.count}</p>
    <p>title:${res.title}</p>
    `;
}
let ofcanvasbody=document.querySelector(".offcanvas-body");
function ofcanvasRender(tem) {
    ofcanvasbody.innerHTML='';
    for(res of tem){
        let ofdiv=document.createElement("div");
            ofdiv.innerHTML=`
            <div class="d-flex justify-content-between mb-3" >
            <img src=${res.image} alt="">   
                <button type="button" class="btn btn-primary" id="delete">Delete</button>
              </div>
      `;
      ofcanvasbody.append(ofdiv);
    }
};
let data =JSON.parse(localStorage.getItem('bookmarklist'));
let tem= data || [];
if(data){

    ofcanvasRender(data);
}
function saveTarget(evt) {
    let text = evt.target.className;
    let text2 = evt.target.id;
    if(text==='more'){
        (async function (){
            let {data:res} = await axios.get(`/products/${text2}`);
            modalrender(res);
        })();
    }
    if(text==='save'){
        (async function (){
            let {data:res} = await axios.get(`/products/${text2}`);
            if(!tem.includes(res)){tem.push(res)}
             console.log(tem);
            localStorage.setItem("bookmarklist",JSON.stringify(tem));
            ofcanvasRender(tem);
        })();
    }
    console.log(tem);
    if(text2==='delete'){
        tem.splice(evt.target.id,1); 
        localStorage.removeItem("bookmarklist");
        localStorage.setItem("bookmarklist",JSON.stringify(tem));
        // console.log(tem); 
        ofcanvasRender(tem);
    }
    
}
let elBody = document.querySelector("body");
elBody.addEventListener("click",(evt)=>{
    saveTarget(evt);
});



let input=document.querySelector("input");
let form= document.querySelector("form");
function search(product) {
    form.addEventListener("input",(e)=>{
        pagination.style.display="none";
        let newArr=[];
        e.preventDefault();
        for(i of product){
            if(i.category.toLowerCase().includes(input.value.toLowerCase())){
                if(!newArr.includes(i)){
                    newArr.push(i);
                }
            }
            if(i.title.toLowerCase().includes(input.value.toLowerCase())){
                if(!newArr.includes(i)){
                    newArr.push(i);
                }
            }
            render(newArr);
        }
    })
    
}





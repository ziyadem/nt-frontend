let kalit = document.querySelector(".kalit"),
    kalit2 = document.querySelector(".kalit2"),
    heroDiv = document.querySelector(".hero"),
    gaz =  document.querySelector(".gaz"),
    tormoz =  document.querySelector(".tormoz"),
    rul = document.querySelector("#rul"),
    two= document.querySelector("#two"),
    theree= document.querySelector(".theree"),
    elSection = document.querySelector("section"),
    btn = document.querySelector(".btn"),
    btn1 = document.querySelector(".btn1");
console.log(two);

class Car {
    constructor(name, model, company, color) {
      this.name = name;
      this.model = model;
      this.company = company;
      this.color = color;
      this.gas=30;
      this.isStarted = false;
      this.isMoving = false;
    }


    petrolPlus(){
      if(this.gas>0){
        this.gas=30;
        theree.textContent="";
        let petrolNumber=document.createElement("h3");
        petrolNumber.textContent=this.gas;
        petrolNumber.style.color="white";
        theree.append(petrolNumber);

      }
      
    }
    petrol(){
      if(this.gas >=0){
        if(!this.isMoving){
          if(this.isStarted){
            theree.textContent="";
            let petrolNumber=document.createElement("h3");
            petrolNumber.textContent=this.gas;
            petrolNumber.style.color="white";
            theree.append(petrolNumber);
            setTimeout(()=>{
              theree.textContent="";
              let petrolNumber=document.createElement("h3");
              petrolNumber.textContent=this.gas;
              petrolNumber.style.color="white";
              theree.append(petrolNumber);
              this.gas -=1;
              console.log(1);
            },5000);
          }    
        }
      }
    }
    
    petroltwo(){
      if(this.gas > 0){
         if(this.isMoving){
          setTimeout(()=>{
            theree.textContent="";
            let petrolNumber=document.createElement("h3");
            petrolNumber.textContent=this.gas;
            petrolNumber.style.color="white";
            theree.append(petrolNumber);
            this.gas -=1;
            console.log(2);
          },1000);
      }
    }
  }

  qaytoBoshlash(){
     window.location.reload();
  }

  time(){
    if(this.gas==6){
      rul.classList.remove("rul2");
      two.classList.remove("two-end");
    }
  }
  time2(){
    if(this.gas==5){
      alert("Sizda 5 l benzin qoldi. Iltimos zapravka qlib oling!!!");
      rul.classList.add("rul2");
      two.classList.add("two-end");
    }
  }
  time3(){
    if(this.gas == 0){
      two.classList.remove("two-end");
      rul.classList.remove("rul2");
      let heding6=document.createElement("h6");
      let hDiv=document.createElement("div");
      heding6.textContent="Tamom ";
      let heding5=document.createElement("h6");
      heding5.textContent="Qayta boshlash uchun ko'k tugmani bosing!!!!"
      hDiv.append(heding6,heding5);
      two.append(hDiv);
      
    }
  }
    move() { 
      
      if(this.gas >0){
      if (this.isMoving){
        
        heroDiv.innerHTML="";
        let elp = document.createElement("p");
        elp.textContent="Ozi yaxwi ketyamzu";
        heroDiv.append(elp);
        return console.log("Yaxshi ketvommizku ozi");
      } 
  
      this.isMoving = true;
      rul.classList.add("rul2");
      two.classList.add("two-end");
      heroDiv.innerHTML="";
      let elp = document.createElement("p");
      elp.textContent=`${this.name} Xarakatni boshladi`;
      heroDiv.append(elp);
    }
      if (!this.isStarted){
     
        heroDiv.innerHTML="";
        let elp = document.createElement("p");
        elp.textContent="Oldin Zavat qilish kere";
        heroDiv.append(elp);
        return console.log("Oldin Zavat qilish kere");
      } 
        
     
     
    }
  
    startEngine() {
      if (this.isStarted){
        heroDiv.innerHTML="";
        let elp = document.createElement("p");
        elp.textContent=`Ozi zavat bopib turibtiku: G'ig' g'ig' g'ig'...`;
        heroDiv.append(elp);
          return console.log("Ozi zavat bopturibtiku: G'ig' g'ig' g'ig'...");
      }
      heroDiv.innerHTML="";
      this.isStarted = true;
      let elp = document.createElement("p");
      elp.textContent=`${this.name} zavat boldi: bvim bvim ...`;
      heroDiv.style.padding="10px"
      heroDiv.append(elp);
      theree.textContent="";
      let petrolNumber=document.createElement("h3");
       petrolNumber.textContent=this.gas;
       petrolNumber.style.color="white";
      theree.append(petrolNumber);
    }
  
    stopMoving() {
      if (!this.isMoving) {
        heroDiv.innerHTML="";
        let elp = document.createElement("p");
        elp.textContent="Ozi toxtab turimizku";
        heroDiv.append(elp);
        return console.log("Ozi toxtab turimmizku");
      }
      this.isMoving = false;
        heroDiv.innerHTML="";
        rul.classList.remove("rul2");
        two.classList.remove("two-end");
        let elp = document.createElement("p");
        elp.textContent=` ${this.name} yurishdan to'xtadi`;
        heroDiv.append(elp);
        return console.log("yurishdan to'xtadi");
    }
  
    stopEngine() {

      if (!this.isStarted) {
        heroDiv.innerHTML="";
        let elp = document.createElement("p");
        elp.textContent="Ozi Zavat bolmagan";
        heroDiv.append(elp);
        return console.log("Ozi Zavat bomagan");
      }
      if(this.isMoving){
        heroDiv.innerHTML="";
        let elp = document.createElement("p");
        elp.textContent="Avval toxtatish kerak";
        heroDiv.append(elp);
        return console.log("Avval toxtatish kerak");
      }
      this.isStarted = false;
      heroDiv.innerHTML="";
      let elp = document.createElement("p");
      elp.textContent=`${this.name} zavati ochdi`;
      heroDiv.append(elp);
      return console.log(`${this.name} zavati ochdi`);
   
    }
  }
  
  let mers = new Car("Toychoq", "222", "Mercedes Benz", "Black");
  
//   let BMW = new Car("Pahlavon", "X5", "BMW", "White");`
setInterval(()=>{
  mers.petrol();
},5000);
setInterval(()=>{
  mers.petroltwo();
  mers.time();
  mers.time2();
  mers.time3();
},1000);

kalit.addEventListener("click",function(){
    mers.startEngine();     
 });
kalit2.addEventListener("click",function(){
    mers.stopEngine();
});
gaz.addEventListener("click",function(){
  mers.move();
});
tormoz.addEventListener("click",function(){
  mers.stopMoving();
});
btn.addEventListener("click",function(){
  mers.petrolPlus();
})
btn1.addEventListener("click",function(){
  mers.qaytoBoshlash();
})
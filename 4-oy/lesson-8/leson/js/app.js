console.log(123);

//constructor function => ushbu funksiyada avtomatik ozi object return qiladi


function User(name, email,age,address){
    this.name=name;
    this.email=email;
    this.age=age;
    this.address=address;
}
User.prototype.logName=function(){
    console.log(`Salom mening ismim ${this.name}`);
}
User.prototype.logAge=function(){
    console.log(`Menning yoshim ${this.age}`);
}
User.prototype.logAdress=function(){
    console.log(`Mening manzilim:${this.address.city} shaxar ${this.address.district} tumani`);
}

let userOne =new User("John","john@gmail.com",71,{
    city:"Toshkent",
    district:"Olmazor",
});
let userTwo =new User("Jane","jane@gmail.com",68,{
    city:"Toshkent",
    district:"Olmazor",
});

//Prototypal Interitence || prototypal chain
//Class => ES6 Syntactis sugar

class Car {
    constructor(name,model,company,color){
        this.name =name;
        this.model=model;
        this.company=company;
        this.color=color;
        this.gas=30;
        this.isStarted=false;
        this.isMoving=false;
    }

    refill() {};

    move(){
        if(!this.isStarted) return console.log("oldin Zavad qilish kere");
        if (this.isMoving) return console.log("yaxwi keetvomizku ozi");

        this.isMoving =true;
        console.log(`${this.name} xarakatlanvott`);
    }
}

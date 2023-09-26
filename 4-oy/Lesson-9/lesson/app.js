console.log(123);

function a(age,email){
    this.age=age;
    this.email=email;
    console.log(this);
}

let jhon={
    name:"jhon",
}
let jane={
    name:"jane",
}
let smit={
    name:"smit",
}

a.apply(jhon,[71,"jhon@gmail.com"]);
a.call(jane);
a.call(smit);
let logjhon=a.bind(jhon);
logjhon();

class User {
    constructor(name){
        this.name=name;
    }
}

let john= new User("John");
console.log(john);

//new vazifalari
// 1) let newObj = {}
// 2) User.call(newObj,...)
// 3) return newObj
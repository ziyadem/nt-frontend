// function displayLeaders() {
//   console.log(this);
// }

// let person = {
//   name: "John",
//   displayName() {
//     console.log(this);
//   },
//   teams: {
//     leaders: {
//       players: ["John", "Jane", "Smith"],
//       displayLeaders: displayLeaders.bind(person),
//     },
//     eagles: {
//       players: ["John", "Brad", "Mosh"],
//     },
//   },
// };

// person.teams.leaders.displayLeaders = displayLeaders.bind(person.teams.leaders);
// person.teams.leaders.displayLeaders();

// function a(age, email) {
//   this.age = age;
//   this.email = email;
//   console.log(this);
// }

// let john = {
//   name: "John",
// };

// let jane = {
//   name: "Jane",
// };

// let smith = {
//   name: "Smith",
// };

// let logJohn = a.bind(john);
// let logJane = a.bind(jane);

// logJohn();
// logJane();

// a.apply(john, [71, "john@gmail.com"]);
// a.call(jane);
// a.call(smith);

// person.methods.a = a.bind(person);
// person.methods.b = a.bind(person.methods);

// person.methods.a();
// person.methods.b();

// bind, call, apply

// function User(name) {
//   this.name = name;
// }

// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let john = new User("John");

// console.log(john);

// 1) let newObj = {}
// 2) User.call(newObj, ...)
// 3) return newObj

// function fac() {
//   return {};
// }

// const a = () => {
//   console.log(this);
// };

// let person = {
//   name: "john",
//   displayName: () => {
//     // let b = {};
//     console.log(this);

//     const logThis = () => {
//       console.log(this);
//     };

//     setTimeout(logThis, 1000);
//   },
// };

// person.displayName();

// a.call(person);

// class Car {
//   petrol = 30;
//   isStarted = false;
//   isMoving = false;
//   petrolIntervalId = null;

//   start() {
//     // ...
//     this.petrolIntervalId = setInterval(() => {
//       this.petrol--;
//       if (this.petrol === 5) {
//         alert("Benzin tugavotti");
//       }
//     }, 5000);
//   }

//   stopMoving() {
//     // ...

//     clearInterval(this.petrolIntervalId);
//     this.petrolIntervalId = null;
//   }
// }
let elbutton= document.querySelector("button");
console.log(elbutton);
 console.log(123);
addEventListener('mouseup', (event) => {console.log(event);
console.log(123);});
// ES6 => ECMA Script v6 => ECMA 262
// ECMA => European Computer Manufacturing Association

// 2015 => ES6 => ES2015 => ES2022

// let, const
// '', "" => single-line string, `${prompt()}` => 1) Multi-line String 2) Template Literals

// +=, -=

// Logical Assignment

// function fizz(foo, bar) {
//   // if (!bar) {
//   //   bar = 2;
//   // }

//   // bar = bar || 2; // or operator
//   // bar = bar && 2; // and operator
//   // bar = bar ?? 2; // nullish operator
//   // nullish => null, undefined

//   bar ??= 2; // nullish assignment
//   // bar ||= 2; // or assignment
//   // bar &&= 2; // and assignment

//   console.log(foo ** bar);
// }

// Default Parameters

// function fizz(foo = 2, bar = 2) {
//   console.log(foo ** bar);
// }

// Destructuring

// let {
//   fName,
//   age,
//   lName,
//   address: { city },
//   skills: [, , , d],
// } = {
//   fName: "John",
//   lName: "Doe",
//   age: 71,
//   address: {
//     city: "London",
//     street: "Baker",
//     full: "221b",
//   },
//   skills: ["HTML", "CSS", "SASS", "BS", "JS"],
// };

// console.log(fName, age, city, d);

// Optional Chaining

// let product = {
//   name: "Iphone 14 Pro Max Plus Ultra",
//   price: 2999,
//   company: {
//     name: "Apple Inc.",
//     category: "Technology",
//     location: {
//       city: {
//         state: "California",
//         town: "SILICON VALLEY",
//       },
//       coordinates: { lat: 38.9764753, lng: -23.756986 },
//     },
//   },

//   intro: function () {
//     console.log(
//       `Salom. Men Iphone 14 Pro Max Plus Ultra telefoniman va mening ismim talaffuz qilishga juda oson`
//     );
//   },
// };

// if (
//   product &&
//   product.company &&
//   product.company.location &&
//   product.company.location.city
// ) {
//   console.log(product.company.location.city.town);
// }

// console.log(product?.company?.location?.city?.town);
// console.log(product?.intro?.());
// console.log(product?.skills?.[0]);

// Ternary Operator

// let input = 12;

// let even =
//   input === 0
//     ? "Toq ham emas, Juft ham emas"
//     : input % 2 === 0
//     ? "Juft"
//     : "Toq";

// if (input === 0) {
//   even = "Toq ham emas, Juft ham emas";
// } else if (input % 2 === 0) {
//   even = "Juft";
// } else {
//   even = "Toq";
// }

// console.log(even);

// ... => Copy, Spread, Rest

// Primitive => String, Number, Boolean, null, undefined

// let a = 1;
// let b = a;

// console.log(a);
// console.log(b);

// a = 2;

// console.log(a);
// console.log(b);

// Reference => Object, Array

// Shallow Copy

// let a = ["Apple", "Samsung", "XioMi"];
// let b = [...a];

// console.log(a);
// console.log(b);

// a.push("Nothing");

// console.log(a);
// console.log(b);

// let john = {
//   name: "John",
//   address: {
//     city: {
//       state: "California",
//       town: "LA.",
//     },
//   },
// };

// // Deep Copy

// let jane = {
//   ...john,
//   address: { ...john.address, city: { ...john.address.city } },
// };

// console.log(john);
// console.log(jane);

// john.email = "john@gmail.com";
// john.address.coordinates = "12, 150";

// console.log(john);
// console.log(jane);

// let john = {
//   name: "John",
//   address: {
//     city: {
//       state: "California",
//       town: "LA.",
//     },
//   },
// };

// let jane = JSON.parse(JSON.stringify(john));

// console.log(john);
// console.log(jane);

// john.email = "john@gmail.com";
// john.address.coordinates = "12, 150";

// console.log(john);
// console.log(jane);

// Spread

// let fruits = ["Apple", "Banana", "Cherry", "Lime", "orange"];

// console.log(...fruits);

// Rest

// function fizz(...lyuboy) {
//   console.log(lyuboy);
// }

// fizz("Eshmat Bobo", 78, "Toshmatboboyev", 11, true);

// Promise
// async ... await
// class

// BigInt, Symbol
// Iterators, Generators

// function
// arrow
// cb
// HOF
// IIFE
// Pure
// async
// Factory
// Constructor

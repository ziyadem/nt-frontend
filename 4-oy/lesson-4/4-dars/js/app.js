// let {
//   name: ism,
//   address: { street },
//   skills: [, , , d],
// } = {
//   name: "John",
//   address: {
//     city: "Tashkent",
//     street: "Sebzor",
//   },
//   skills: ["HTML", "CSS", "SASS", "BS", "JS"],
// };

// console.log(ism, street, d);

// EVENT LOOP

// SINGLE-THREADED LANGUAGE

// Sync => Blocking
// Async => Non-blocking

// Web-API's
// Stack => LIFO => Last In First Out
// Queue => FIFO => First In First Out

// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log(3);
// }, 0);

// queueMicrotask(() => {
//   console.log(4);
// });

// console.log(5);

// alert("Test");
// console.log(123);

// CallBack Hell

// console.log("Qizil");
// setTimeout(() => {
//   console.log("qizil => sariq");

//   setTimeout(() => {
//     console.log("Sariq => yashil");

//     setTimeout(() => {
//       console.log("Yashil => Sariq");

//       setTimeout(() => {
//         console.log("Sariq => qizil");
//       }, 3000);
//     }, 5000);
//   }, 3000);
// }, 5000);

// Promise => Va'da

// let moshina = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let r = Math.random();

//     if (r < 0.5) {
//       resolve();
//     } else {
//       reject();
//     }
//   }, 5_000);
// });

// moshina
//   .then(() => {
//     console.log("Uraaaa moshinali boldim. 😇");
//     return new Promise(() => {});
//   })
//   .then(() => {})
//   .catch(() => {
//     console.log("Afsus, moshina yoq. 😭");
//   })
//   .finally(() => {
//     console.log("Nima bosa boldi");
//   });

// .then chain

// let wait = (delay) => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res();
//     }, delay);
//   });
// };

// console.log("qizil");

// function svetafor() {
//   wait(5000)
//     .then(() => {
//       console.log("qizil => sariq");
//       return wait(3000);
//     })
//     .then(() => {
//       console.log("sariq => yashil");
//       return wait(5000);
//     })
//     .then(() => {
//       console.log("yashil => sariq");
//       return wait(3000);
//     })
//     .then(() => {
//       console.log("sariq => qizil");
//     });
// }

// svetafor();
// setInterval(svetafor, 16_000);

// Async ... await

// async function a() {
//   // await new Promise(() => {});
//   // return 123;
//   // throw "ASHIBKAAA";
// }

// let b = a();

// b.then(() => {}).catch(() => {});

// console.log(b);

// let kutish = (delay) => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res();
//     }, delay);
//   });
// };

// async function svetafor() {
//   try {
//     console.log("Qizil");
//     await kutish(5000);
//     console.log("qizil => sariq");
//     await kutish(3000);
//     console.log("sariq => yashil");
//     await kutish(5000);
//     console.log("yashil => sariq");
//     await kutish(3000);
//     console.log("sariq => qizil");
//   } catch (error) {
//     console.log(error);
//   }
// }

// svetafor();

// SPOILER ALERT

// HTTP Request => API
// fetch, axios

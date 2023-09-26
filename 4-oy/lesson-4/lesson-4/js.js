// console.log(1);
// console.log(2);

// setTimeout(() =>{
//     console.log(3);
// }, 0);

// queueMicrotask(() =>{
//     console.log(4);
// });

// console.log(5);

// alert("test");
// console.log(123);

//promise

let moshina = new Promise((resolve,reject) =>{
    setInterval(() => {
        let r= Math.random();

        if (r<0.5) {
            resolve();
        }else{
            reject();
        }
    }, 1000);
});

moshina
  .then(() =>{
    console.log("uraa moshinali boldm. ");
    return new Promise(() => {});
  })
  .then(() =>{
    console.log("ozmni ozm tabrikliman");
  })
  .catch(() =>{
    console.log("afsus moshina yoq.");
  })
  .finally(() =>{
    console.log("nma bolsa bolsn");
  });

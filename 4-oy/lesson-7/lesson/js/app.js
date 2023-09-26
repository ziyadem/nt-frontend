console.log(123);
axios.defaults.baseURL="https://fakestoreapi.com/";

(async function (){
    let {data} = await axios.get("/users");
    let {data:res} = await axios.get("/Products");
    console.log(data);
    console.log(res);
})()
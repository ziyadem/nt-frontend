// async function getUser() {
//     let res =await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();
//     console.log(data);
// }

// getUser();

// async function getPosts() {
//     let res =await fetch("https://jsonplaceholder.typicode.com/posts?_limit=2&userId=3&_page=4");
//     let data = await res.json();
//     console.log(data);
// }

// getPosts();

// let title = "New Post";
// let body = "lorem insum dolor sit amet.";

// async function createPost(){
//     fetch("https://jsonplaceholder.typicode.com/posts"),{
//         method: "POST",
//         body : JSON.stringify(post),
//         headers: {
//             token:"Ajoyib token",
//         },
//     };
// }

// createPost({
//     title,
//     body,
// })

axios.defaults.baseURL= "https://jsonplaceholder.typicode.com";
axios.defaults.headers= {
    ["x-bla-bla"]:"ajoyib ..."
}

async function getUser(){
    let res = await axios.get("/users");
    
    console.log(res.data);
}

async function createPost(){
    let post = {
        title: "new post",
        body:"lorem...",
    };
    let res = await axios.post("/posts",post);

    console.log(res.data);
}
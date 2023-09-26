// async function a() {}

// let b = a();

// console.log(b);

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// async function getUsers() {
//   let res = await fetch("https://jsonplaceholder.typicode.com/users");

//   let data = await res.json();

//   console.log(data);
// }

// getUsers();

// async function getPosts() {
//   // Query Params
//   let res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_limit=2&userId=3&_page=3"
//   );

//   let data = await res.json();

//   console.log(data);
// }

// getPosts();

// let title = "New Post";
// let body = "Lorem ipsum dolor sit amet.";

// async function createPost(post) {
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify(post),
//     headers: {
//       token: "AJOYIB TOKEN",
//     },
//   });
// }

// createPost({
//   title,
//   body,
// });

// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
// axios.defaults.headers = {
//   ["x-auth-token"]: "AJOYIB TOKEN",
// };

// async function getUsers() {
//   let res = await axios.get("/users");

//   console.log(res.data);
// }

// async function createPost() {
//   let post = {
//     title: "New Post",
//     body: "Lorem ...",
//   };

//   let res = await axios.post("/posts", post);

//   console.log(res.data);
// }

// createPost();

// Posts
// id, title, body, userId
// id, title, body + button

// async function login() {
//   let res = await axios.post("https://reqres.in/api/login", {
//     email: "eve.holt@reqres.in",
//     password: "cityslicka",
//   });

//   localStorage.setItem("token", res.data.token);
// }

// let token = localStorage.token;

// axios.get("...", {
//   headers: {
//     token,
//   },
// });

// 2) ? Login page + Log out
// window.location.replace()
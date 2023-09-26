let form = document.querySelector("form"),
    butonLOGIN=document.querySelector(".login-button"),
    butonSIGNIN=document.querySelector(".signin-button");
    console.log(butonLOGIN,butonSIGNIN);
    butonLOGIN.addEventListener("click",()=>{
    window.location.reload();
});
let signin=localStorage.getItem("token");
// if(signin){
//     window.location.replace("./index.html");
// }
butonSIGNIN.addEventListener("click",()=>{
    if(!signin){
        alert("Oldin ro'yxatdan o'tmagansiz iltimos avval ro'yhatdan o'ting")
    }
    if(signin){ 
        let fname=document.querySelector(".fname");
        let lname=document.querySelector(".lname");
        let tel=document.querySelector(".tel");
        let email=document.querySelector("#email");
        let password=document.querySelector(".password");
        let obj=JSON.parse(signin);
        fname.value=obj.fname;
        lname.value=obj.lname;
        tel.value=obj.tel;
        email.value=obj.email;
        password.value=obj.password;  
    }
});


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let fname=document.querySelector(".fname");
    let lname=document.querySelector(".lname");
    let tel=document.querySelector(".tel");
    let email=document.querySelector("#email");
    let password=document.querySelector(".password");
    console.log(fname.value);
    if(fname.value){
        console.log(fname.value);
        if(lname.value){
            if(tel.value){
                if(password.value){
                    let obj={
                        "fname": fname.value,
                        "lname": lname.value,
                        "tel": tel.value,
                        "email": email.value,
                        "password": password.value,
                    };
                    localStorage.setItem("token",JSON.stringify(obj));
                    window.location.replace("./index.html");
                }
            }
        }
        
    }

});

let darkMode=document.querySelector(".dark-mode"),
    svgTogl = document.querySelector(".svgTogl");
    

darkMode.addEventListener("click" , function(){
    document.body.classList.toggle('dark');
})

svgTogl.addEventListener("click", function () {
    document.body.classList.toggle('yoqbol')
})
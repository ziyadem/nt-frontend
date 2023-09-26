window.addEventListener("DOMContentLoaded", () => {
    const tabParent = document.querySelector(".tabheader__items");
    const tabs = document.querySelectorAll(".tabheader_item");
    const tabContents = document.querySelectorAll(".tabContainer");
   let userName =  prompt("Ismingni kirit!")
   alert(userName + "Yaxshi bola")
    function hideTabContent() {
        tabContents.forEach((item) => {
            item.style.display = "none";
        })
        tabs.forEach((item) => {
            item.classList.remove("tabheader_item__active")
        })
    };
    function showTabContent(i = 0) {
tabContents[i].style.display = "block"; 
tabs[i].classList.add("tabheader_item__active")
    };

    hideTabContent();
    showTabContent();

    tabParent.addEventListener("click", (event) => {
        const target = event.target; 

        if(target && target.classList.contains("tabheader_item")){
            tabs.forEach((item,ind) => {
            if(target === item) {
                hideTabContent();
                showTabContent(ind);
            };
            });
        }
    })
})
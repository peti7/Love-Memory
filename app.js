'use strict';

const wrapper = document.querySelector(".wrapper");
const albumIcon = document.querySelector("header .album");
const bgImgContainer = document.querySelector(".bg-img-container");
const closeBtn = document.querySelector(".title i");
const images = document.querySelectorAll(".images img");
const days = document.querySelector('.days');
const loveIcon = document.querySelector(".icon i");
let nickname1 = document.querySelector(".nickname-1");
let nickname2 = document.querySelector(".nickname-2");
const dateContainer = document.querySelector(".date-container");
const calendarIcon = document.querySelector(".calendar-icon");
const closeDateIcon = document.querySelector(".close-date");
const anniDate = document.querySelector("input[type='date']");
const boyImage = document.querySelector(".boy-image");
const girlImage = document.querySelector(".girl-image");
const boyFile = document.querySelector(".boy-field input");
const girlFile = document.querySelector(".girl-field input");


function getLocalStorage(){
    let getName1 = localStorage.getItem("name1");
    let getName2 = localStorage.getItem("name2");
    let image1 = localStorage.getItem("image1");
    let image2 = localStorage.getItem("image2");
    let bgImage = localStorage.getItem("bgImage");
    let anniDays = localStorage.getItem("days");
    let inputValue = localStorage.getItem("inputValue");
    if(getName1 && getName2){
        nickname1.textContent = getName1;
        nickname2.textContent = getName2;
    }
    if(image1 && image2){
        boyImage.src = image1;
        girlImage.src = image2;
    }
    if(anniDays){
        days.textContent = anniDays;
    }
    if(inputValue){
        anniDate.value = inputValue; 
    }
    if(bgImage){
        wrapper.style.background = `url(${bgImage})`;
        wrapper.style.backgroundPosition = 'center';
        wrapper.style.backgroundSize = 'cover';
    }
}

getLocalStorage();


albumIcon.addEventListener("click", () => {
    bgImgContainer.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    bgImgContainer.classList.remove("show");
});

images.forEach(image => {
    image.addEventListener("click", () => {
        wrapper.style.background = `url(${image.src}) no-repeat`;
        wrapper.style.backgroundPosition = 'center';
        wrapper.style.backgroundSize = 'cover';
        bgImgContainer.classList.remove("show");
        localStorage.setItem("bgImage", image.src);
    });
});



nickname1.addEventListener("click", () => {
    nickname1.textContent = prompt("Enter name for nickname 1");
    nickname1 = nickname1.textContent;
    localStorage.setItem('name1', nickname1);
});

nickname2.addEventListener("click", () => {
    nickname2.textContent = prompt("Enter name for nickname 2");
    nickname2 = nickname2.textContent;
    localStorage.setItem('name2', nickname2);
});


calendarIcon.addEventListener("click", () => {
    dateContainer.classList.add("show");
});

closeDateIcon.addEventListener("click", () => {
    dateContainer.classList.remove("show");
    if(anniDate.value){
        setInterval(setDate, 1000);
    }
});

boyFile.addEventListener("change", function(e) {
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", (e) => {
        let result = e.target.result;
        boyImage.src = result;
        localStorage.setItem("image1", boyImage.src);
    });
    reader.readAsDataURL(file);
});


boyImage.addEventListener("click", () => {
    boyFile.click();
});


girlFile.addEventListener("change", function(e) {
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", (e) => {
        let result = e.target.result;
        girlImage.src = result;
        localStorage.setItem("image2", girlImage.src);
    });
    reader.readAsDataURL(file)
});


girlImage.addEventListener("click", () => {
    girlFile.click();
});


function setDate(){
    let inputDate = new Date(anniDate.value).getTime();
    let nowDate = new Date().getTime();
    let getDate = nowDate - inputDate;

    let sec = 1000;
    let min = sec * 60;
    let hr = min * 60;
    let day = hr * 24;

    days.textContent = Math.round(getDate / day);
    localStorage.setItem("days", days.textContent);
    localStorage.setItem("inputValue", anniDate.value);
}









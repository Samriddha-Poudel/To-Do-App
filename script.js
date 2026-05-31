const wrapper=document.querySelector('.wrapper');
const backBtn=document.querySelector(".back-btn");
const menubtn=document.querySelector('.menu-btn');


menubtn.addEventListener('click', toggleScreen);
backBtn.addEventListener('click', toggleScreen);

function toggleScreen  ()  {
wrapper.classList.toggle("show-category");
}
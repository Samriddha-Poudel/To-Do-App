const wrapper=document.querySelector('.wrapper');
const menubtn=document.querySelector('.menu-btn');


menubtn.addEventListener('click', toggleScreen);

function toggleScreen  ()  {
wrapper.classList.toggle("show-category");
}
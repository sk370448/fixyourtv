const script = document.querySelector(".script");
const toggleMain = document.querySelector("#toggle-main");
const toggle = document.querySelector("#toggle");
const overlay = document.querySelector('.overlay');

document.querySelector('.hamburger').addEventListener('click', function(){
    toggleMain.classList.add('hidden');
    toggle.classList.remove('hidden');
    overlay.classList.remove('hidden');
})

document.querySelector('.cross').addEventListener('click', function(){
    toggleMain.classList.remove('hidden');
    toggle.classList.add('hidden');
    overlay.classList.add('hidden');
})

document.querySelector('.overlay').addEventListener('click', function(){
    overlay.classList.add('hidden');
    toggleMain.classList.remove('hidden');
    toggle.classList.add('hidden');
})



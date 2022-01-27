// Change Theme

const themeIcon = document.querySelector('.change-theme');
const body = document.querySelector('body');

themeIcon.addEventListener('click', function(){
    document.body.classList.toggle('light'); 
    if(document.body.classList.contains('light')) {
        themeIcon.src = "images/icon-moon.svg";
        themeIcon.style.transition = "all 300ms";
        document.querySelector('.bgphoto').src = "images/bg-desktop-light.jpg";
        document.querySelector('.bgphoto').style.transition = "all 300ms";
    } else {
        themeIcon.src = "images/icon-sun.svg";
        themeIcon.style.transition = "all 300ms";
        document.querySelector('.bgphoto').src = "images/bg-desktop-dark.jpg";
        document.querySelector('.bgphoto').style.transition = "all 300ms";
    }
})
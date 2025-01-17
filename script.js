const menuBtn = document.querySelector('.btn');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', function()
{
    menu.classList.add('active');
});

closeBtn.addEventListener('click', function()
{
    menu.classList.remove('active'); 
})
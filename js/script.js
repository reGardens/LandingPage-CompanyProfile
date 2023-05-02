const burgerMenu = document.querySelector ('.burgerMenu');
const deleteIcon = document.querySelector ('.delete');
const header = document.querySelector ('.header');
const content1 = document.querySelector ('.content1');
const content2 = document.querySelector ('.content2');

burgerMenu.addEventListener ('click', () => {
    // console.log ('berhasil');
    header.classList.add ('active');
    header.style.transition = '0.5s ease-in-out'
    content1.style.display = 'none';
    content2.style.display = 'none';
})
deleteIcon.addEventListener ('click', () => {
    header.classList.remove ('active');
    content1.style.display = 'flex';
    content2.style.display = 'flex';
})
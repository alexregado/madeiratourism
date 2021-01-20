let container = document.querySelector(".CTA");
const randomColor = Math.floor(Math.random()*16777215).toString(16);

container.addEventListener('click', () => {
    container.style.backgroundColor = randomColor;
});
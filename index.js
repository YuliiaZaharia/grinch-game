const image = document.querySelector("#myPicture"); 
const text = document.querySelector("h2"); 

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two"); 

buttonOne.addEventListener("click", holidays);
buttonTwo.addEventListener("click", alone);

function holidays() {
    image.setAttribute("src", "grinch-max.jpeg"); 
    text.textContent = "Does he happy to be alone during holidays? 🤔";
    buttonOne.textContent = "YES"; 
    buttonTwo.textContent = "NO"; 

    buttonOne.addEventListener("click", brokenChristmas);
    buttonTwo.addEventListener("click", reunion);
}

function brokenChristmas() {
    image.setAttribute("src", "broken-grinch.webp"); 
    text.textContent = "Oops! No gifts for you, Grinch 💔";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function reunion() {
    image.setAttribute("src", "grinch-love.jpeg"); 
    text.textContent = "Returned gifts and became a hero for the love of his life 💚";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function alone() {
    image.setAttribute("src", "grinch-heart.jpeg"); 
    text.textContent = "Does Grinch going to have fun alone? 🤔";
    buttonOne.textContent = "YES"; 
    buttonTwo.textContent = "NO"; 
    
    buttonOne.addEventListener("click", fun);
    buttonTwo.addEventListener("click", bored); 
}

function fun() {
    image.setAttribute("src", "fashion.gif"); 
    text.textContent = "Grinch became a fashion designer ✂️";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function bored() {
    image.setAttribute("src", "depression.avif"); 
    text.textContent = "Got depressed and visiting psychology sessions 😥";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}
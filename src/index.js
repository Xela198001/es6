import Header from './modules/header/header';
import './styles.scss';

const app = document.querySelector(".header");
const header = new Header();
const button = document.createElement("button");
button.classList.add("button");
button.innerHTML = "Нажать";
let count = 1;
button.addEventListener("click", () => { app.innerHTML == '' ? app.innerHTML = header.fib(count) : app.innerHTML = ''; count+=0.5;}, false)

app.insertAdjacentElement("beforebegin", button);

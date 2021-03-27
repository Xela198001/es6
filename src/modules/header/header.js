import './header.scss';

export default class Header {
  constructor(text) {
    this.text = text;
  };

  fib(n) {
  let a = 1;
  let b = 1;
  var k = [];
  var fib= [];
  fib = [...fib, a, b];
  // console.log(fib);
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
    fib = [...fib, b];
    k = [...k, i];
  }
    // fib.map((item, i) => { console.log(`${i} - ${item}`) });
    // const app = document.querySelector(".app");
    // const div = document.createElement("div");
    // div.classList.add("fib");
    // div.innerHTML = `<div>${fib.join(" ")}</div>`;
  // return app.appendChild(div);
  return `<div class="fib">${fib.join(" ")}</div>`
  };

};

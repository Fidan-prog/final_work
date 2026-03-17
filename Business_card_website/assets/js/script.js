const h1 = document.querySelector('.about_me h1');
const text = h1.textContent;
h1.textContent = '';

let i = 0;
const typeWriter = setInterval(() => {
  if (i < text.length) {
    h1.textContent += text.charAt(i);
    i++;
  } else {
    clearInterval(typeWriter);
  }
}, 100);
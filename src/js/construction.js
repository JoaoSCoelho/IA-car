const el = document.getElementsByClassName('paragraph')[0];
const height = getComputedStyle(el).height;
console.log(height)
el.setAttribute('class', 'paragraph-start');
setTimeout(() => {
  el.setAttribute('class', 'paragraph-show');
  el.style.height = '610px';
}, 1200);
const el = document.getElementsByClassName('paragraph')[0];
el.setAttribute('class', 'paragraph-start');
setTimeout(() => {
  el.setAttribute('id', 'paragraph-show')
}, 1000);
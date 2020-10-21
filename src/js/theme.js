const themerCircle = document.querySelector('.themer-circle');
const theme = localStorage.getItem('theme') || 'white';
themerCircle.setAttribute('id', theme);
const containerParagraph = document.querySelector('.container-paragraph-'+(theme === 'white' ? 'dark' : 'white'))
containerParagraph && containerParagraph.setAttribute('class', 'container-paragraph-'+theme);
document.querySelector('body').style.background = `url('../src/images/pattern-${theme}.svg')`;
previousBt.setAttribute('id', `prev-${theme}`);
nextBt.setAttribute('id', `next-${theme}`);

function changeTheme() {
  const theme = localStorage.getItem('theme') || 'white';
  themerCircle.setAttribute('id', theme === 'white' ? 'dark' : 'white');
  document.querySelector('.container-paragraph-'+theme).setAttribute('class', `container-paragraph-${theme === 'white' ? 'dark' : 'white'}`);
  document.querySelector('body').style.background = `url('../src/images/pattern-${theme === 'white' ? 'dark' : 'white'}.svg')`;
  previousBt.setAttribute('id', `prev-${theme === 'white' ? 'dark' : 'white'}`);
  nextBt.setAttribute('id', `next-${theme === 'white' ? 'dark' : 'white'}`);

  localStorage.setItem('theme', theme === 'white' ? 'dark' : 'white');
};
const themerCircle = document.querySelector('.themer-circle');
const theme = localStorage.getItem('theme') || 'white';
themerCircle.setAttribute('id', theme);

function changeTheme() {
  const theme = localStorage.getItem('theme') || 'dark';


};
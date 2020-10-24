const texts = [
  {
    title: "Construção",
    paragraph: "Esse carro foi construído a mão por Jhone Dourado, que ficou responsável por construir a parte física. Suas rodas são reutilizações de brinquedos, elas tem a parte do pneu em borracha, o que auxilia no grip que o IntellCar possui em contato com o chão, seja ele piso, asfalto, concreto etc. A carcaça é de MDF, um tipo de madeira bem barato e muito conhecido. Para esse protótipo não foi necessário um material mais resistente, já que as peças mais pesadas dele são os dois motores, e isso o MDF aguenta tranquilamente.<br>Falando em motores, esse carrinho tem dois motores elétricos com caixa de redução, o que já é mais do que suficiente para fazê-lo mover-se. Na verdade, apenas um desses motores já seria o suficiente, mas a real utilização de dois desses é que usando um em cada roda traseira conseguimos fazer com que o carrinho faça curvas sem necessariamente virar a roda dianteira (explicaremos isso mais a frente).<br>O cérebro do IntellCar é um Arduíno UNO, que para quem não conheçe é uma plaquinha com um chip programável e algumas conexões para entrada e saída de dados e energia, mas essa placa foi um item comprado, já que é um pouco mais complexo e exige a utilização de alguns equipamentos e ferramentas que não temos disponíveis." 
  },
  {
    title: "Programação",
    paragraph: "Como dito anteriormente, o cérebro do IntellCar é um Arduíno, mas ele não vêm configurado para colocar na carcaça e sair andando, primeiramente devemos programá-lo e fizemos isso em linguagem C++. E se você está achando que foi difícil fazer isso, temos uma ótima notícia pra lhe dar, porque isso é muito simples e vamos lhe explicar passo a passo o que cada linha de código faz."
  },
  {
    title: "Utilidade",
    paragraph: "Você pode estar aí se perguntando porque alguém perderia tempo criando um carrinho semi-autonomo que não tem utilidade alguma, vamos lhe mostrar o porque isso não é perda de tempo.<br>Uma criação dessas te coloca em situações que talvez você não saiba como resolver na hora, e a única maneira de não estagnar o projeto é ir pesquisar e estudar, e com isso você aprende como resolver aquele problema em específico e de quebra ganha conhecimento que muito provavelmente pode ser usado em outro momento da sua vida.<br>Além de aprender criando, quando você consegue resolver um problema ou quando você testa o projeto e ele está funcionando como você gostaria a sensação de vitória é indescritível.<br>Bom já em grande escala o IntellCar pode facilmente ser adaptado para transporte de ferramentas, peças, produtos dentro de uma fábrica, montadora, etc sem que precise de um ser humano a todo momento controlando, o que facilitaria bastante o serviço e aumentaria o rendimento da fábrica. Também pode ser usado para transporte de pessoas em um lugar controlado, mas que tenha um espaço grande demais para ficar andando a pé de um lado para outro."
  }
];
const initialEl = document.getElementsByClassName('paragraph')[0];
/* const height = getComputedStyle(initialEl).height; */
const previousBt = document.querySelector('.previous');
const nextBt = document.querySelector('.next');
let page = 0

function startAnimation() {
  const el = document.getElementsByClassName('paragraph')[0];
  const widhtDoBagui = innerWidth <= 680 ? innerWidth : 680;
  const fontSize = innerWidth <= 800 ? 16 : 20
  const heightDoBagui = ((texts[page].paragraph.length / (widhtDoBagui / fontSize)) * fontSize) + 25;
  console.log(heightDoBagui)
  el.style.maxWidth = '0%';
  el.style.height = '1rem';
  el.setAttribute('class', 'paragraph-start');
  setTimeout(() => {
    el.style.maxWidth = '100%';
    setTimeout(() => {
      el.setAttribute('class', 'paragraph-show');
      el.style.height = `${heightDoBagui}px`;
    }, 1300);
  }, 200);

  
};

startAnimation();

function nextPage() {
  const paragraph = document.querySelector('.paragraph-show');
  const title = document.querySelector('#header-copy');

  previousBt.style.display = 'flex';
  title.innerText = texts[page + 1].title;
  initialEl.style.maxWidth = '0%';
  initialEl.innerHTML = `<h1>${texts[page + 1].title}</h1> ${texts[page + 1].paragraph}`;
  initialEl.setAttribute('class', 'paragraph');
  page++;
  if (page + 1 >= texts.length) nextBt.style.display = 'none';
  setTimeout(() => startAnimation(), 100);
}

function previousPage() {
  const paragraph = document.querySelector('.paragraph-show');
  const title = document.querySelector('#header-copy');

  nextBt.style.display = 'flex';
  title.innerText = texts[page - 1].title;
  initialEl.style.maxWidth = '0%';
  initialEl.innerHTML = `<h1>${texts[page - 1].title}</h1> ${texts[page - 1].paragraph}`;
  initialEl.setAttribute('class', 'paragraph');
  page--;
  if (page <= 0) previousBt.style.display = 'none';
  setTimeout(() => startAnimation(), 100);
}

previousBt.style.display = 'none';
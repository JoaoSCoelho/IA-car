const texts = [
  {
    title: "Construção",
    paragraph: 'Esse carro foi construído a mão por Jhone Dourado, que ficou responsável por construir a parte física. Ele é composto por:<br>- Uma carcaça de mdf<br>- Uma protoboard (placa de testes para conectar jumpers(fios)<br>- Um arduíno uno <br>- Uma ponte H onde estão conectados os motores<br>- 2 motores com caixa de redução<br>- Um sensor de distância<br>- Uma bateria 9v<br>- 2 ldr<br>- 2 leds.<br><img class="ex-img" src="../src/images/etapa-construcao-1.jpeg" alt="Peças para construção do carrinho" /><br>O cérebro do IntellCar é um Arduíno UNO, que para quem não conheçe é uma plaquinha com um chip programável e algumas conexões para entrada e saída de dados e energia, mas essa placa foi um item comprado, já que é um pouco mais complexo e exige a utilização de alguns equipamentos e ferramentas que não temos disponíveis.<br><br>Como dito anteriormente, o cérebro do IntellCar é um Arduíno, mas ele não vêm configurado para colocar na carcaça e sair andando, primeiramente devemos programá-lo e fizemos isso em linguagem C++. E se você está achando que foi difícil fazer isso, temos uma ótima notícia pra lhe dar, porque isso é muito simples e vamos lhe explicar passo a passo o que o código faz: Ele armazena na memória funções do tipo void que guardam os movimentos de cada etapa. Por exemplo: movimentos para virar a esquerda, direita, seguir reto e analisar distâncias ao se deparar com um obstáculo. Dentro do código elas são chamadas de "avance", "vireDireita", "vireEsquerda", "pare" e "observe". Na "observe" ele calcula as distâncias dos lados do obstáculos e faz o contorno pela direção que possui mais espaço, ele tem uma condição que se a distância da direita for maior que a da esquerda: vire para a direita, se não: vire para a esquerda, esse calculo é feito de forma automática, e com isso também consegue tomar desisoes sozinho sem nenhum controle até porque ele não possui controle.<br><img class="ex-img" src="../src/images/codigo-C++.jpeg" alt="Laptop exibindo parte do código C++" />'
  },
  {
    title: "Utilidade",
    paragraph: "Você pode estar aí se perguntando porque alguém perderia tempo criando um carrinho semi-autonomo que não tem utilidade alguma, vamos lhe mostrar o porque isso não é perda de tempo.<br>Uma criação dessas te coloca em situações que talvez você não saiba como resolver na hora, e a única maneira de não estagnar o projeto é ir pesquisar e estudar, e com isso você aprende como resolver aquele problema em específico e de quebra ganha conhecimento que muito provavelmente pode ser usado em outro momento da sua vida.<br>Além de aprender criando, quando você consegue resolver um problema ou quando você testa o projeto e ele está funcionando como você gostaria a sensação de vitória é indescritível.<br>Bom já em grande escala o IntellCar pode facilmente ser adaptado para transporte de ferramentas, peças, produtos dentro de uma fábrica, montadora, etc sem que precise de um ser humano a todo momento controlando, o que facilitaria bastante o serviço e aumentaria o rendimento da fábrica. Também pode ser usado para transporte de pessoas em um lugar controlado, mas que tenha um espaço grande demais para ficar andando a pé de um lado para outro."
  },
  {
    title: "Relevância Social",
    paragraph: 'Um projeto desse tipo traz para o cotidiano escolar a I.A e para Jacobina e acaba elevando o conhecimento da cidade sobre as novas tecnologias que estão por vir, fazendo com que as pessoas se sintam mais seguras e livres, quando elas sabem como e do que elas são capazes de fazer para melhorar nossa qualidade de vida.'
  },
  {
    title: "Demonstração",
    paragraph: '<video class="video" width="315" height="560" controls="controls" ><source src="../src/images/video.mp4" type="video/mp4"/></video>'
  }
];
const initialEl = document.getElementsByClassName('paragraph')[0];
const previousBt = document.querySelector('.previous');
const nextBt = document.querySelector('.next');
let page = 0;

function startAnimation() {
  const el = document.getElementsByClassName('paragraph')[0];

  el.style.maxWidth = '0%';
  el.style.height = '1rem';
  el.setAttribute('class', 'paragraph-start');
  setTimeout(() => {
    el.style.maxWidth = '100%';
    setTimeout(() => {
      el.setAttribute('class', 'paragraph-show');
      el.style.height = `100%`;
    }, 1300);
  }, 200);

  
};

startAnimation();

function nextPage() {
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
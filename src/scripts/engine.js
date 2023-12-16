const state = {
  view:{
    squares: document.querySelectorAll(".square"),
    enemy: document.querySelector(".enemy"),
    timeLeft: document.querySelector("#time-left"),
    score: document.querySelector("#score"),
  },
  values:{
    gameVelocity:1000,
    hitPosition: 0,
    result: 0,
    curretTime: 60,
  },
  actions:{
    timerId : setInterval(randomSquare,1000),//faz com que o enemy surja em um local aleatorio
    countDownTimerId:setInterval(countDown,1000),//
  },
}

function countDown(){
  state.values.curretTime --;
  state.view.timeLeft.textContent = state.values.curretTime;
  if(state.values.curretTime <= 0){
    clearInterval(state.actions.countDownTimerId)
    clearInterval(state.actions.timerId)
    alert("Fim de jogo! O seu placar final foi: "+ state.values.result)
  }
}

function playSound(audioName){
  let audio = new Audio(`./src/audios/${audioName}.m4a`);
  audio.volume = 0.1;
  audio.play();
}

function randomSquare(){
  // Limpa a classe enemy 
  state.view.squares.forEach((square) => {
    square.classList.remove("enemy");
  });
  // sorteia um numero aleatorio e arredondado (math floor arredonda o número)
  let randomNumber = Math.floor(Math.random() * 9);
  //pega o quadrado do numero sorteado 
  let randomSquare = state.view.squares[randomNumber];
  // Adiciona a classe enemy nele 
  randomSquare.classList.add("enemy");
  state.values.hitPosition = randomSquare.id;
}
//
function addListenerHitBox(){
  //verifica se o quadrado e o mesmo do inimigo
  state.view.squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
      if (square.id === state.values.hitPosition) {
        //adiciona um ponto
        state.values.result++;
        //guarda o resultado no texto 
        state.view.score.textContent = state.values.result;
        // impede que o usuario click infinitamente 
        state.values.hitPosition = null;
        playSound("hit");
      }
    })
  })
}


function initialize() {
  addListenerHitBox();
}

initialize();
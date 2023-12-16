const state = {
  view:{
    squares:document.querySelectorAll(".square"),
    enemy:document.querySelectorAll(".enemy"),
    timeLeft:document.querySelectorAll("#time-left"),
    score:document.querySelectorAll("#score"),
  },
  value:{
    
  }
}

function randomSquare(){
  // Limpa a classe enemy 
  state.view.squares.forEach((square) =>{
    square.classList.remove("enemy");
  });
  // sorteia um numero aleatorio e arredondado (math floor arredonda o número)
  let randomNumber = Math.floor(Math.random()*9);
  //pega o quadrado do numero sorteado 
  let randomSquare = state.view.squares[randomNumber];
  // Adiciona a classe enemy nele 
  randomSquare.classList.add("enemy");
}
//
function addListenerHitBox(){
  //verifica se o quadrado e o mesmo do inimigo
  state.view.squares.forEach((square) =>{

  })
}


function initialize() {
  randomSquare();
}

initialize();
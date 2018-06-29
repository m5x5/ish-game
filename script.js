window.onload = () => {
  const canvas = document.getElementById("canvas");
  const c = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 200;
  const controller = document.getElementById("controller");
  //Device width/height specifications
  if (window.innerHeight < 900) {
    controller.style.fontSize = "5vh";
  } else {
    controller.style.fontSize = "10vh";
  }
}
let model = {
    clickCount: 0
  }
  let octopus = {
    init: () => {
      playerView.init();
      obstacleView.init();
    },
    incrementCounter: () => {
      model.clickCount++;
    },
  }
  
  onload = () => {
    octopus.init();
  }
  
  let playerView = {
    init: () => {
      this.positonY = 
      this.scoreElem = document.getElementById('score');
      //Whats the octopus object all about?
      this.playerElem.addEventListener('click', () => {
        octopus.incrementCounter();
        this.scoreElem.innerHTML = model.clickCount;
      });
    },
    move: (direction) => {
      this.playerElem.style[direction] += 10 + 'px';
    }
  }
  
  let obstacleView = {
    init: () => {
      this.upElem = document.getElementById('controller-up');
      this.upElem.addEventListener('click', () => playerView.move('top'));
      document.addEventListener('keydown', () => playerView.move('top'));
    }
  }
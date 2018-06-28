let model = {
    clickCount: 0
  }
  let octopus = {
    init: () => {
      playerView.init();
      obstracleView.init();
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
      this.playerElem = document.getElementById('player');
      this.scoreElem = document.getElementById('score');
      this.playerElem.addEventListener('click', () => {
        octopus.incrementCounter();
        this.scoreElem.innerHTML = model.clickCount;
      });
    },
    move: (direction) => {
      this.playerElem.style[direction] += 10 + 'px';
    }
  }
  
  let obstracleView = {
    init: () => {
      this.upElem = document.getElementById('controller-up');
      this.upElem.addEventListener('click', () => playerView.move('top'));
      document.addEventListener('keydown', () => playerView.move('top'));
    }
  }
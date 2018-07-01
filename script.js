let model = {
  clickCount: 0,
  level: innerHeight - (innerHeight / 5),
  playerSpeedX: 0,
  playerSpeedY: 0,
  score: 0
}

let controller = {
  init: () => {
    let canvas = document.getElementById('canvas');
    this.c = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.addEventListener('click', event => {
      this.x = event.pageX;
      this.y = event.pageY;
      if (this.x < canvas.width / 2 && this.y > canvas.height / 2.5) {} // left
      if (this.x > canvas.width / 2 && this.y > canvas.height / 2.5) {} // right
      if (this.y < canvas.height / 2.5) {} // jump
    });

    if (window.innerHeight < 900) {} else {} // Device width / height specifications
    mainView.init();
    setInterval(controller.animate, 20);
  },
  incrementCounter: () => {
    model.clickCount++;
  },
  animate: () => {
    this.c.clearRect(0, 0, canvas.width, canvas.height);
    if (mainView.keys && mainView.keys[65]) { model.playerSpeedX = -2; } // left
    if (mainView.keys && mainView.keys[68]) { model.playerSpeedX = 2; } // right
    if (mainView.keys && mainView.keys[87]) { model.playerSpeedY = -2; }  // up
    if (mainView.keys && mainView.keys[83]) { model.playerSpeedY = 2; } // down
    mainView.render();
  }
}

const mainView = {
  init: () => {
    bugView.init();
    this.jumpCount = 0;
    this.floor = new Image();
    this.floor.src = 'floor.png';
    this.playerX = 0;
    this.playerY = model.level - 100;
    this.player = new Image();
    this.player.src = 'developer.png';
    window.addEventListener('keydown', e => {
      mainView.keys = (mainView.keys || []);
      mainView.keys[e.keyCode] = (e.type == "keydown");
    });
    window.addEventListener('keyup', e => {
      if (mainView.keys && mainView.keys[65]) { model.playerSpeedX = 0; } // left
      if (mainView.keys && mainView.keys[68]) { model.playerSpeedX = 0; } // right
      if (mainView.keys && mainView.keys[87]) { model.playerSpeedY = 0; }  // up
      if (mainView.keys && mainView.keys[83]) { model.playerSpeedY = 0; } // down
      mainView.keys[e.keyCode] = (e.type == "keydown");
    });
  },
  render: () => {
    if (this.playerX + model.playerSpeedX <= innerWidth - 100 && this.playerX + model.playerSpeedX >= 0) {
      this.playerX += model.playerSpeedX * 2;
    }
    if(this.playerY + model.playerSpeedY <= innerHeight - ((innerHeight / 5) + 100) && this.playerY + model.playerSpeedY >= 0){
      this.playerY += model.playerSpeedY;
    }
    if (this.bugY + 100 < model.level) {
      this.bugY += 2;
    }
    bugView.render();
    if ((this.playerY + 50 > bugY && this.playerY - 50 < bugY) && (this.playerX + 50 > bugX && this.playerX - 50 < bugX)) {
      this.bugX = Math.random() * innerWidth - 100;
      this.bugY = Math.random() * innerHeight - ((innerHeight / 5) + 100);
      model.score++;
    }
    c.font = 'bold 42px Arial';
    c.fillStyle = 'white';
    c.fillText('Punkte: ' + model.score, 100, 100);
    c.drawImage(this.floor, 0, model.level, innerWidth, innerHeight / 4);
    c.drawImage(this.player, this.playerX, this.playerY, 100, 100);
  }
}

const bugView = {
  init: () => {
    this.bug = new Image();
    this.bug.src = 'bug.png';
    this.bugX = innerWidth - 100;
    this.bugY = model.level - 100;
  },
  render: () => {
    c.drawImage(this.bug, this.bugX, this.bugY, 100, 100);
  }
}
onload = () => {
  controller.init();
}
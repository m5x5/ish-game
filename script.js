let model = {
  collisionTime: 0,
  clickCount: 0,
  level: innerHeight - 100,
  playerSpeedX: 0,
  playerSpeedY: 0,
  score: 0,
  sprites: {
    bug: [
      'bug0000.png',
      'bug0006.png',
      'bug0012.png',
      'bug0018.png',
      'bug0024.png',
      'bug0030.png',
      'bug0036.png',
      'bug0042.png'
    ],
    hola: {},
    run: {},
    seated: {},
    shoot: {},
    test_mec: {},
    walk: {},
    main: {},
  }
}

let controller = {
  init: () => {
    let canvas = document.getElementById('canvas');
    this.c = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
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
    if (mainView.keys && mainView.keys[87] && (model.jumpCount < 20)) { model.playerSpeedY = -6; model.jumpCount++; } else { playerSpeedY = 0; }  // up
    if (mainView.keys && mainView.keys[83]) { model.playerSpeedY = 2; } // down
    if (innerWidth < 850) {
      canvas.addEventListener('click', event => {
        this.x = event.pageX;
        this.y = event.pageY;
        switch (true) {
          case (this.x < canvas.width / 2 && this.y > canvas.height / 2.5):
            model.playerSpeedX = -2;
            break;
          case (this.x > canvas.width / 2 && this.y > canvas.height / 2.5):
            model.playerSpeedX = 2;
            break;
          case (this.y < canvas.height / 2.5):
            model.playerSpeedY = -6; model.jumpCount++;
            break;
          default:
            playerSpeedY = 2;
            break
        } 
      });
    }
    mainView.render();
  }
}
const mainView = {
  init: () => {
    playerView.init();
    bugView.init();
    this.jumpCount = 0;
    this.floor = new Image();
    this.floor.src = 'img/blocks/rocky/rocky01.png';
    window.addEventListener('keydown', e => {
      mainView.keys = (mainView.keys || []);
      mainView.keys[e.keyCode] = (e.type == "keydown");
    });
    window.addEventListener('keyup', e => {
      if (mainView.keys && mainView.keys[65]) { model.playerSpeedX = 0; } // left
      if (mainView.keys && mainView.keys[68]) { model.playerSpeedX = 0; } // right
      if (mainView.keys && mainView.keys[83]) { model.playerSpeedY = 0; } // down
      mainView.keys[e.keyCode] = (e.type == "keydown");
    });
  },
  render: () => {
    if (this.bugY + 100 < model.level) {
      this.bugY += 2;
    }
    playerView.render();
    bugView.render();
    if ((this.playerY + 50 > bugY && this.playerY - 50 < bugY) && (this.playerX + 50 > bugX && this.playerX - 50 < bugX)) {
      this.bugX = Math.random() * (innerWidth - 100);
      this.bugY = Math.random() * (innerHeight - 200);
      model.score++;
    }
    c.font = 'bold 42px Arial';
    c.fillStyle = 'white';
    c.fillText('Punkte: ' + model.score, 100, 100);
    for (let i = 0; i < 200; i++) {
      c.drawImage(this.floor, i * 100, innerHeight - 100, 100, 100);
    }
  }
}

const playerView = {
  init: () => {
    this.runCount = 0;
    this.player = new Image();
    this.player.src = 'img/player/pose_origin.png';
    this.playerX = 0;
    this.playerY = model.level - 127;
    model.playerSpeedY = 0;
  },
  render: () => {
    if (model.playerSpeedX < 0) {
      this.imgFolder = 'img/player/';
    } else {
      this.imgFolder = 'img/player-reversed/';
    }
    switch (true) {
      case (model.playerSpeedY < 0):
        this.player.src = this.imgFolder + 'jump_up.png';
        break;
      case (model.playerSpeedY > 0 && this.playerY + 127 != model.level):
        this.player.src = this.imgFolder + 'jump_down.png';
        break;
      case (model.playerSpeedX == 0 && this.playerY + 127 == model.level):
        this.player.src = this.imgFolder + 'pose_origin.png';
        break;
      case (model.playerSpeedX != 0 && this.playerY + 127 == model.level):
        this.runCount++;
        this.runCount = Math.round(this.runCount / 5) > 4 ? 0 : this.runCount;
        this.player.src = this.imgFolder + `run/run0${Math.round(this.runCount / 5)}.png`;
    }
    if (model.jumpCount == 20) {
      model.playerSpeedY = 0;
    }
    if (model.playerSpeedY <= 0) {
      model.playerSpeedY += 2;
    }
    if (this.playerY + 127 == model.level) {
      model.jumpCount = 0;
    } else {
      model.playerSpeedY - 1;
    }
    if (this.playerX + (model.playerSpeedX + 2) <= innerWidth - 100 && this.playerX + model.playerSpeedX >= 0) {
      this.playerX += model.playerSpeedX;
    }
    // 850 + 2 = 852 && 900 - 127
    if (this.playerY + model.playerSpeedY <= (innerHeight - (113 * 2)) && this.playerY + model.playerSpeedY >= 0) {
      this.playerY += model.playerSpeedY;
    }
    c.drawImage(this.player, this.playerX, this.playerY, 150, 150);
  }
}
const bugView = {
  init: () => {
    this.bug = new Image();
    this.bug.src = 'img/bug.png';
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
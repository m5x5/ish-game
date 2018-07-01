let model = {
  clickCount: 0
}

let controller = {
  init: () => {
    let canvas = document.getElementById('canvas');
    this.c = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.addEventListener('click', function (event) {
      this.x = event.pageX;
      this.y = event.pageY;
      if (this.x < canvas.width / 2 && this.y > canvas.height / 2.5) {
        // left
      }
      if (this.x > canvas.width / 2 && this.y > canvas.height / 2.5) {
        // right
      }
      if (this.y < canvas.height / 2.5) {
        // jump
      }

    });

    // Device width / height specifications
    if (window.innerHeight < 900) {

    } else {

    }
    mainView.init();
    controller.animate();
  },
  incrementCounter: () => {
    model.clickCount++;
  },
  animate: () => {
    this.c.clearRect(0, 0, canvas.width, canvas.height);
    mainView.render();
    requestAnimationFrame(controller.animate);
  }
}

const mainView = {
  init: () => {
    // 200 / 5 = 40
    // 200 - 40 = 160
    this.level = innerHeight - (innerHeight / 5);
    this.jumpCount = 0;
    this.bugX = innerWidth - 100;
    this.bugY = level - 100;
    this.playerX = 0;
    this.playerY = level - 100;
    this.floor = new Image();
    this.floor.src = 'floor.png';
    this.player = new Image();
    this.player.src = 'developer.png';
    this.bug = new Image();
    this.bug.src = 'bug.png';
    document.addEventListener('keydown', (e) => {
      switch (e.code) {
        case 'ArrowUp':
          if (this.playerY > 0 && this.jumpCount < 2) {
            this.playerY -= 100;
            this.jumpCount++;
          } else if (this.playerY == level - 100) {
            this.jumpCount = 0;
          }
          break;
        case 'ArrowDown':
          if (this.playerY + 100 < innerHeight) {
            this.playerY += 10;
          }
          break;
        case 'ArrowLeft':
          if (this.playerX > 0) {
            this.playerX -= 5;
          }
          break;
        case 'ArrowRight':
          if (this.playerX + 100 < innerWidth) {
            this.playerX += 5;
          }
          break;
        case 'KeyA': // left
          if (this.playerX > 0) {
            this.playerX -= 5;
          }
          break;
        case 'KeyD':// right
          if (this.playerX + 100 < innerWidth) {
            this.playerX += 5;
          }
          break;
        case 'Space':// jump
          if (this.playerY > 0 && this.jumpCount < 2) {
            this.playerY -= 100;
            this.jumpCount++;
          } else if (this.playerY == level - 100) {
            this.jumpCount = 0;
          }
          break;
        case 'KeyS':// down
          if (this.playerY + 100 < level) {
            this.playerY += 10;
          }
          break;
      }
    });
  },
  render: () => {
    // Make the player fall slowly
    if (this.playerY + 100 < level) {
      this.playerY += 2;
    }
    if (this.bugY + 100 < level) {
      this.bugY += 2;
    }
    if ((this.playerY + 50 > bugY && this.playerY - 50 < bugY) && (this.playerX + 50 > bugX && this.playerX - 50 < bugX)) {
      this.bug.src = '';
    }
    c.drawImage(this.floor, 0, level, innerWidth, innerHeight / 4);
    c.drawImage(this.bug, this.bugX, this.bugY, 100, 100);
    c.drawImage(this.player, this.playerX, this.playerY, 100, 100);
  }
}
onload = () => {
  controller.init();
}
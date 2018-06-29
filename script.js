let model = {
  clickCount: 0
}

let controller = {
  init: () => {
    let canvas = document.getElementById("canvas");
    this.c = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.addEventListener("click", function (event) {
      this.x = event.pageX;
      this.y = event.pageY;
      if (this.x < canvas.width / 2 && this.y > canvas.height / 2.5) {
        //move backwards(left)
      }
      if (this.x > canvas.width / 2 && this.y > canvas.height / 2.5) {
        //move foreward(right)
      }
      if (this.y < canvas.height / 2.5) {
        //jump
      }
    });

    //Device width / height specifications
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
    this.jumpCount = 0;
    this.bugX = 0;
    this.bugY = 0;
    this.playerX = 0;
    this.playerY = innerHeight - 100;
    this.player = new Image();
    this.player.addEventListener('load', () => { });
    this.player.src = "developer.png";
    this.bug = new Image();
    this.bug.addEventListener('load', () => { });
    this.bug.src = "bug.png";
    document.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowUp':
          if (this.playerY > 0 && this.jumpCount < 2) {
            this.playerY -= 100;
            this.jumpCount++;
          } else if(this.playerY == innerHeight - 100){
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
      }
    });
  },
  render: () => {
    if (this.playerY + 100 < innerHeight) {
      this.playerY += 2;
    }
    c.drawImage(this.bug, this.bugX, this.bugY, 100, 100);
    c.drawImage(this.player, this.playerX, this.playerY, 100, 100);
  }
}

onload = () => {
  controller.init();
}
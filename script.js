window.onload = function(){
  var canvas = document.getElementById("canvas");
  var c = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.addEventListener("click", function(event){
      this.x = event.pageX;
      this.y = event.pageY;
      if(this.x < canvas.width / 2 && this.y > canvas.height / 2.5){
        //move backwards(left)
      }
      if(this.x > canvas.width / 2 && this.y > canvas.height / 2.5){
        //move foreward(right)
      }
      if(this.y < canvas.height / 2.5){
        //jump
      }
  });

  //Device width / height specifications
  if (window.innerHeight < 900) {

  } else {
    
  }
  function MainView(){
    this.render = function(){
      //player1.onload = function(){} 
      //var sprite1 = new Image();
      //sprite1.src = "";
      //sprite1.onload = function(){}
      //var sprite2 = new Image();
      //sprite2.src = "";
    }
  }
  var mainview = new MainView();
  function animate(){
    mainview.render();
    requestAnimationFrame("animate");
  }
  animate();

}
/*
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

  const mainView = {
    init: () => {
      player1.onload = function(){alert(8)} 
      var sprite1 = new Image();
      sprite1.src =
        "";
      sprite1.onload = function(){}
      var sprite2 = new Image();
      sprite2.src =
        "";
    }
  }
  let playerView = {
    init: () => {
      this.scoreElem = document.getElementById('score');

    },
    move: (direction) => {
    }
  }

  let obstracleView = {
    init: () => {

    }
  }
  */
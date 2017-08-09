var startPos = {x: 500, y: 500};
var speed = 15;

window.addEventListener('load', function(){
  var canvas = document.getElementById("main-canvas");

  var context = canvas.getContext("2d");
  console.log(context);

  var background = new Image();
  background.src = "etchScreen.png";
  background.addEventListener('load', function(){
        context.drawImage(background,0,0);   
  })


  var shakeButton = document.getElementById('shake-button');
  shakeButton.addEventListener('click', function(event){
    canvas.animate([
      // keyframes
      { transform: 'translateY(0px)' }, 
      { transform: 'translateY(30px)' },
      { transform: 'translateY(0px)' }
    ], { 
      // timing options
      duration: 300,
      iterations: 3
    });

    context.clearRect(0, 0, 800, 600);

    var background = new Image();
    background.src = "etchScreen.png";
    background.addEventListener('load', function(){
          context.drawImage(background,0,0);   
    })
    // startPos = {x: 500, y: 500};
  })

  canvas.addEventListener('click', function(event){
    console.log(event.layerX, event.layerY);
  })

  window.addEventListener('keydown', function(event){
      switch(event.key){
        case 'ArrowUp':
        drawLine('up');
        break;
        case 'ArrowDown':
        drawLine('down');
        break;
        case 'ArrowLeft':
        drawLine('left');
        break;
        case 'ArrowRight':
        drawLine('right');
        break;
      }
  })

  var drawLine = function(direction){
    context.beginPath();
    context.moveTo(startPos.x, startPos.y);
    switch(direction){
      case 'up':
      startPos.y -= speed;
      if(startPos.y<110){startPos.y += speed;}
      break;
      case 'down':
      startPos.y += speed;
      if(startPos.y>500){startPos.y -= speed;}
      break;
      case 'left':
      startPos.x -= speed;
      if(startPos.x<105){startPos.x += speed;}
      break;
      case 'right':
      startPos.x += speed;
      if(startPos.x>650){startPos.x -= speed;}
      break;
    }
    context.lineWidth = 1;
    context.strokeStyle = 'rgba(0,0,0,0.7)'
    context.lineTo(startPos.x, startPos.y);
    context.stroke();
  }

})
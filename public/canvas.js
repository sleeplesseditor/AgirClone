function init() {
    draw()
}

// DRAW FUNCTIONS
player.locX = Math.floor(500*Math.random() + 100); 
player.locY = Math.floor(500*Math.random() + 100); 

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.setTransform(1,0,0,1,0,0);

    const camX = -player.locX + canvas.width / 2
    const camY = -player.locY + canvas.height / 2
    context.translate(camX, camY);

        context.beginPath()
        context.fillStyle = 'rgb(255,230,230)'
        // arg1,2 = x,y of the center of the arc
        // arg3 = radius
        // arg4 = where to start on the circle in radians, 0 = 3:00
        // arg5 = where to stop in radians
        context.arc(player.locX,player.locY,10,0,Math.PI*2)
        context.arc(200,200,10,0,Math.PI*2)
        context.fill()
        context.lineWidth = 3;
        context.strokeStyle = 'rgb(0,255,0)'
        context.stroke()  

    requestAnimationFrame(draw)
}

canvas.addEventListener('mousemove', (event) => {
    const mousePosition = {
        x: event.clientX,
        y: event.clientY
    };
    const angleDeg = Math.atan2(mousePosition.y - (canvas.height/2), mousePosition.x - (canvas.width/2)) * 180 / Math.PI;
    if(angleDeg >= 0 && angleDeg < 90){
        xVector = 1 - (angleDeg / 90);
        yVector = -(angleDeg / 90);
    } else if(angleDeg >= 90 && angleDeg <= 180){
        xVector = -(angleDeg - 90) / 90;
        yVector = -(1 - ((angleDeg - 90) / 90));
    } else if(angleDeg >= -180 && angleDeg < -90){
        xVector = (angleDeg + 90) / 90;
        yVector = (1 + ((angleDeg + 90) / 90));
    } else if(angleDeg < 0 && angleDeg >= -90){
        xVector = (angleDeg + 90) / 90;
        yVector = (1 - ((angleDeg + 90) / 90));
    }
    player.xVector = xVector;
    player.yVector = yVector;
});
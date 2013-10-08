
$(".sticker-1").click(function(){
  //alert("test");
  //add object element to canvas
  var img = new Image();
  img.onload = function(){
      ctx.drawImage(img, 0,0);
  };
  img.src = "http://images.christmastimeclipart.com/images/2/1271716593176_1788/img_1271716593176_17881.jpg";

  var canvas=document.getElementById("myCanvas");
  var ctx=canvas.getContext("2d");
  var canvasOffset=$("#myCanvas").offset();
  var offsetX=canvasOffset.left;
  var offsetY=canvasOffset.top;
  var canvasWidth=canvas.width;
  var canvasHeight=canvas.height;
  var isDragging=false;

  function handleMouseDown(e){
    canMouseX=parseInt(e.clientX-offsetX);
    canMouseY=parseInt(e.clientY-offsetY);
    // set the drag flag
    isDragging=true;
  }

  function handleMouseUp(e){
    canMouseX=parseInt(e.clientX-offsetX);
    canMouseY=parseInt(e.clientY-offsetY);
    // clear the drag flag
    isDragging=false;
  }

  function handleMouseOut(e){
    canMouseX=parseInt(e.clientX-offsetX);
    canMouseY=parseInt(e.clientY-offsetY);
    // user has left the canvas, so clear the drag flag
    isDragging=false;
  }

  function handleMouseMove(e){
    canMouseX=parseInt(e.clientX-offsetX);
    canMouseY=parseInt(e.clientY-offsetY);
    // if the drag flag is set, clear the canvas and draw the image
    if(isDragging){
        ctx.clearRect(0,0,canvasWidth,canvasHeight);
        // image, x, y, w, h
        ctx.drawImage(img,canMouseX-120/2,canMouseY-120/2,120,120);
    }
  }

  $("#myCanvas").mousedown(function(e){handleMouseDown(e);});
  $("#myCanvas").mousemove(function(e){handleMouseMove(e);});
  $("#myCanvas").mouseup(function(e){handleMouseUp(e);});
  $("#myCanvas").mouseout(function(e){handleMouseOut(e);});

});


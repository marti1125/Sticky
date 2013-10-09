// http://stackoverflow.com/questions/15036386/make-image-drawn-on-html5-canvas-draggable-with-javascript
// http://simonsarris.com/project/canvasdemo/demo2.html
// http://stackoverflow.com/questions/19100009/dragging-and-resizing-an-image-on-html5-canvas
// http://simonsarris.com/blog/225-canvas-selecting-resizing-shape

var can3 = document.getElementById('canvas3');
var ctx3 = can3.getContext('2d');

$(".sticker-1").click(function(){
    //alert("test");
    var can2 = document.getElementById('canvas2');
    var ctx2 = can2.getContext('2d');
    //add object element to canvas
    var img = new Image();
    img.onload = function(){
        ctx2.drawImage(img, 0,0, 120,120);
        ctx3.drawImage(can2, 0, 0);
    };
    img.src = "images/ex-rocket.jpg";



    //var canvas = document.getElementById("canvas2");
    //var context = canvas.getContext("2d");
    var canvasOffset = $("#canvas2").offset();
    var offsetX = canvasOffset.left;
    var offsetY = canvasOffset.top;
    var canvasWidth = can3.width;
    var canvasHeight = can3.height;

    // create a drawer which tracks touch movements
    var drawer = {
        isDragging: false,
        touchstart: function (coors) {
            ctx3.beginPath();
            ctx3.moveTo(coors.x, coors.y);
            this.isDragging = true;
        },
        touchmove: function (coors) {
            if (this.isDragging) {

                //create new multiple canvas layers on top

                //http://stackoverflow.com/questions/6787899/combining-two-or-more-canvas-elements-with-some-sort-of-blending
                //http://stackoverflow.com/questions/3008635/html5-canvas-element-multiple-layers

                // or globalCompositeOperation

                //new canvas and context, canvas2 and ctx2
                this.el.width = this.canvas.width()
                //this erases the current bg, but need to do this so there is no trail, so erase then redraw bg
                //ctx3.clearRect(0,0,canvasWidth,canvasHeight);
                //canvas.width = canvas.width;
                // Store the current transformation matrix
                //context.save();

                // Use the identity matrix while clearing the canvas
                //context.setTransform(1, 0, 0, 1, 0, 0);
                //context.clearRect(0, 0, canvas.width, canvas.height);
                //context.restore();
                // image, x, y, w, h
                //context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
                ctx3.drawImage(img,coors.x-120/2,coors.y-120/2,120,120);

            }
        },
        touchend: function (coors) {
            if (this.isDragging) {
                this.touchmove(coors);
                this.isDrawing = false;
            }
        }
    };



    // create a function to pass touch events and coordinates to drawer
    function draw(event) {
        var type = null;
        // map mouse events to touch events
        switch(event.type){
            case "mousedown":
                    event.touches = [];
                    event.touches[0] = {
                        pageX: event.pageX,
                        pageY: event.pageY
                    };
                    type = "touchstart";
            break;
            case "mousemove":
                    event.touches = [];
                    event.touches[0] = {
                        pageX: event.pageX,
                        pageY: event.pageY
                    };
                    type = "touchmove";
            break;
            case "mouseup":
                    event.touches = [];
                    event.touches[0] = {
                        pageX: event.pageX,
                        pageY: event.pageY
                    };
                    type = "touchend";
            break;
        }

        // touchend clear the touches[0], so we need to use changedTouches[0]
        var coors;
        if(event.type === "touchend") {
            coors = {
                x: event.changedTouches[0].pageX,
                y: event.changedTouches[0].pageY
            };
        }
        else {
            // get the touch coordinates
            coors = {
                x: event.touches[0].pageX,
                y: event.touches[0].pageY
            };
        }
        type = type || event.type
        // pass the coordinates to the appropriate handler
        drawer[type](coors);
    }

    // detect touch capabilities
    var touchAvailable = ('createTouch' in document) || ('ontouchstart' in window);

    // attach the touchstart, touchmove, touchend event listeners.
    if(touchAvailable){
        can3.addEventListener('touchstart', draw, false);
        can3.addEventListener('touchmove', draw, false);
        can3.addEventListener('touchend', draw, false);
    }
    // attach the mousedown, mousemove, mouseup event listeners.
    else {
        can3.addEventListener('mousedown', draw, false);
        can3.addEventListener('mousemove', draw, false);
        can3.addEventListener('mouseup', draw, false);
    }

    // prevent elastic scrolling
    document.body.addEventListener('touchmove',function(event){
      event.preventDefault();
    },false);	// end body:touchmove

});


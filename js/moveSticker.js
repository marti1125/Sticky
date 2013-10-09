// http://stackoverflow.com/questions/15036386/make-image-drawn-on-html5-canvas-draggable-with-javascript
// http://simonsarris.com/project/canvasdemo/demo2.html
// http://stackoverflow.com/questions/19100009/dragging-and-resizing-an-image-on-html5-canvas
// http://simonsarris.com/blog/225-canvas-selecting-resizing-shape
// http://creativedroplets.com/html5-and-multitouch-hammer-js/
// http://touchpunch.furf.com/
// http://jqueryui.com/download/
// http://jsfiddle.net/V92Gn/

//var can3 = document.getElementById('canvas3');
//var ctx3 = can3.getContext('2d');

$(".sticker-1").click(function(){
    alert("add sticker");
    var sticker = document.getElementById('sticker');
    $('#sticker').show();
    $('#sticker').draggable();


});


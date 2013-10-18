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

$(".btn-place").click(function(){
    $(".topbarslidedown").animate({
      opacity: 0
    }, 1000);
});

$(".btn-remove").click(function(){
    $(".topbarslidedown").animate({
      opacity: 0
    }, 1000);
});




$(".sticker-1").click(function(){
    //alert("add sticker");
    //move down the modal
    $("#stickers-screen").animate({
      top: 1000
    }, 200);

    $("#newimage").attr("src","images/stickers/fox-mask.png");

    $("#newimage").show();
    //$sticker.show();

    // show tool bar with Done/Checkmark and Undo/Delete at the top
    $(".topbarslidedown").animate({
      opacity: 1
    }, 1000);



    //$('#resizable').show();
    //$( "#sticker" ).resizable();


});

$(".sticker-2").click(function(){
    $("#stickers-screen").animate({
      top: 1000
    }, 200);
    $("#newimage").attr("src","images/stickers/sunglasses.png");
    $("#newimage").show();
    //$sticker.show();

});

$(".sticker-3").click(function(){
    $("#stickers-screen").animate({
      top: 1000
    }, 200);
    $("#newimage").attr("src","images/stickers/mustache.png");
    $("#newimage").show();
    //$sticker.show();

});

$(".sticker-4").click(function(){
    $("#stickers-screen").animate({
      top: 1000
    }, 200);
    $("#newimage").attr("src","images/stickers/hat.png");
    $("#newimage").show();
    //$sticker.show();

});

$(".sticker-5").click(function(){
    $("#stickers-screen").animate({
      top: 1000
    }, 200);
    $("#newimage").attr("src","images/stickers/nose.png");
    $("#newimage").show();
    //$sticker.show();

});

$(".sticker-6").click(function(){
    $("#stickers-screen").animate({
      top: 1000
    }, 200);
    $("#newimage").attr("src","images/stickers/tail.png");
    $("#newimage").show();
    //$sticker.show();

});




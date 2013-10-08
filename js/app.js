

//Canvas screen// // // // // // // //

// add image to canvas

//

// Clear button

// New button
$(".startover-btn").click(function(){
  $("#canvas-area").animate({
    opacity: 0
  }, 100);
  $("#canvas-area").css("z-index","0");
  $("#main").animate({
    opacity: 1
  }, 100);
  $("#main").css("z-index","3");

});

// Stickers button
$(".stickers-btn").click(function(){
  $("#stickers-screen").css("z-index","4");
  $("#stickers-screen").animate({
    top: 0
  }, 100);
});

$(".sticker-1").click(function(){
  //alert("test");
  //add object element to canvas


});

$(".close-btn").click(function(){
  $("#stickers-screen").animate({
    top: 600,
    zIndex: 0
  }, 100);
  //$("#stickers").css("z-index","0");
});

// Save/Share button

// End Canvas screen// // // // // // //
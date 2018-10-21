$(document).ready(function(){
  var bodyElement = $("body");
  $("a").eq(0).hover(function(){
    bodyElement.addClass("orange");
  }, function(){
    bodyElement.removeClass("orange");
  });
  $("a").eq(1).hover(function(){
    bodyElement.addClass("blue");
  }, function(){
    bodyElement.removeClass("blue");
  });
  $("a").eq(2).hover(function(){
    bodyElement.addClass("green");
  }, function(){
    bodyElement.removeClass("green");
  });
  $("a").eq(3).hover(function(){
    bodyElement.addClass("white");
  }, function(){
    bodyElement.removeClass("white");
  });
});
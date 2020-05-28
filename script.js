var playing = false;
var trialsleft=3;
var step;
var action;
var x;
var score1=0;
$(function(){

  $("#startreset").click(function(){
  if(playing){
    location.reload();
  }
  else{
    playing=true;
    $("#startreset").text("Reset Game");
    $("#timeremaining").show();
    $(".scorevalue").text(score1);
    addhearts();
    startaction();
  }
});
function addhearts(){
  $("#timeremaining").empty();
  for(var i=0;i<trialsleft;i++)
  {
    $("#timeremaining").append('<img src="images/Capture.png" class="heart">');
  }
}
$(".fruits").mouseover(function(){
  clearInterval(action);
  score1++;
  $(".scorevalue").text(score1);
  $("#audiosound")[0].play();
  $("#fruit"+x).hide("explode",500);
  setTimeout(startaction,800);
});
function startaction(){
  if(trialsleft!=0){
    choosefruit();
    var top=-50;
    step= 2+Math.round(Math.random()*5);
    var y= Math.round(Math.random()*550);
    $("#fruit"+x).css({"left":y,"top":top});
    action = setInterval(function(){
      top=top+step;
      $("#fruit"+x).css({"left":y,"top":top});
      step= 2+Math.round(Math.random()*5);
      if(top>400){
        clearInterval(action);
        $("#fruit"+x).hide();
        trialsleft=trialsleft-1;
        addhearts();
        startaction();

      }
    },10);
  }
  else{
    $("#gameOver").show();
    $("#timeremaining").hide();
  }
}
function choosefruit(){
  x = Math.round(Math.random()*4)+1;
  $("#fruit"+x).show();
}
});

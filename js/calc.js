document.addEventListener("DOMContentLoaded", function(){
var textBox = document.getElementById("screen");
  var buttonNum = document.getElementsByClassName("buttonNum");
  var operatorBtn = document.getElementsByClassName("operator");
  console.log(operatorBtn);
  buttonNum[8].addEventListener('click', function(event){
    event.stopPropagation();
    textBox.innerHTML = "3";

});

buttonNum[7].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "2";
});

buttonNum[6].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "1";
});

buttonNum[5].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "6";
});

buttonNum[4].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "5";
});

buttonNum[3].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "4";
});

buttonNum[2].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "9";
});

buttonNum[1].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "8";
});

operatorBtn[0].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "*";
});

 operatorBtn[1].addEventListener('click', function(event){
   event.stopPropagation();
   textBox.innerHTML = "/";
 });

 operatorBtn[2].addEventListener('click', function(event){
   event.stopPropagation();
   textBox.innerHTML = "-";
 });

 operatorBtn[3].addEventListener('click', function(event){
   event.stopPropagation();
   textBox.innerHTML = "+";
 });








})

  // var equals = document.getElementById("equals");
  //
  // theForm.addEventListener("equals", function(event){
  //   event.preventDefault();
  //
  //   console.log(event);
  // });
  //
  // var myButtons = document.getElementsByClassName("buttonNum");
  //
  // for (var i = 0; i < buttonNum.length; i++) {
  //   buttonNum[i].addEventListener("click", function(){
  //     console.log(this.value + " was clicked");
  //   })
  // }
  //
  //

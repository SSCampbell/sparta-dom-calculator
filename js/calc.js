document.addEventListener("DOMContentLoaded", function(){
var textBox = document.getElementById("screen");
var buttonNum = document.getElementsByClassName("buttonNum");
var operatorBtn = document.getElementsByClassName("operator");
var clearBtn = document.getElementsByClassName("buttonClear");
var equalsBtn = document.getElementsByClassName("equals");
var numA = 0;
var numB = 0;
var opC = "";


  clearBtn[0].addEventListener('click', function(event){
    event.stopPropagation();
    textBox.innerHTML = " ";


  });

  buttonNum[8].addEventListener('click', function(event){
    event.stopPropagation();
    textBox.innerHTML = "3";

    if (numA == " ") {
      numA = 3;
    }

    else {
      numB = 3;
    }

});

buttonNum[7].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "2";
  if (numA == " ") {
    numA = 2;
  }

  else {
    numB = 2;
  }
});

buttonNum[6].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "1";
  if (numA == " ") {
    numA = 1;
  }

  else {
    numB = 1;
  }
});

buttonNum[5].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "6";
  if (numA == " ") {
    numA = 6;
  }

  else {
    numB = 6;
  }
});

buttonNum[4].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "5";
  if (numA == " ") {
    numA = 5;
  }

  else {
    numB = 5;
  }
});

buttonNum[3].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "4";
  if (numA == " ") {
    numA = 4;
  }

  else {
    numB = 4;
  }
});

buttonNum[2].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "9";
  if (numA == " ") {
    numA = 9;
  }

  else {
    numB = 9;
  }
});

buttonNum[1].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "8";
  if (numA == " ") {
    numA = 8;
  }

  else {
    numB = 8;
  }
});

buttonNum[0].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "7";
  if (numA == " ") {
    numA = 7;
  }

  else {
    numB = 7;
  }
});

operatorBtn[0].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "*";
  if (opC == " ") {
    opC = "*";
  }
  else {

  }
});

 operatorBtn[1].addEventListener('click', function(event){
   event.stopPropagation();
   textBox.innerHTML = "/";
   if (opC == " ") {
     opC = "/";
   }
   else {

   }
 });

 operatorBtn[2].addEventListener('click', function(event){
   event.stopPropagation();
   textBox.innerHTML = "-";
   if (opC == " ") {
     opC = "-";
   }
   else {

   }
 });

 operatorBtn[3].addEventListener('click', function(event){
   event.stopPropagation();
   textBox.innerHTML = "+";
   if (opC == " ") {
     opC = "+";
   }
   else {

   }
 });

if (numA !== 0  && numB !== 0){
 equalsBtn[0].addEventListener('click', function(event){
   event.stopPropagation();
   if (opC == "+")
   {
    textBox.innerHTML = numA + numB;

   }

   else if (opC == "-")
   {
     textBox.innerHTML = numA - numB;

   }

   else if (opC == "*")
   {
     textBox.innerHTML = numA * numB;

   }

   else if (opC == "/")
   {
     textBox.innerHTML = numA / numB;

   }

 })}
 


 });

 var numA = 0;
 var numB = 0;
 var opC = "";


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

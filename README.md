document.addEventListener("DOMContentLoaded", function(){

  var myButton = document.getElementById("myButton");

  myButton.addEventListener("click", handleClick);

  function handleClick() {
    console.log(this);
  }

  var myForm = document.getElementById("myForm");

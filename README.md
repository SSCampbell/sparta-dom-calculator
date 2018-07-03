# Sparta Global Academy Homework -- DoM Calculator

## Project Review:

### In this project I had to modify a Calculator on HTML using the DoM JavaScript skills currently reviewed to find the correct elements in the html file and edit their files to direct input/outputs to the screen.

## Project Download:  
### Download from the files created and transferred to GITHUB
### The repository was created on GITHUB and cloned to access from terminal  
### Used a JS file & HTML file

## Using JavaScript tools such as:
```JavaScript
var buttonNum = document.getElementsByClassName("buttonNum");
var operatorBtn = document.getElementsByClassName("operator");

buttonNum[8].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "3";})
```

## Modifying the Calculator at the beginning stages was good. Using the right procedures to access the correct classes in the HTML was useful to update and assign each button to the Calculator. The textbox was altered to display the buttons pressed into the Calculator. The only problem I had was outputting the sum created by the user. For example "3 + 3 = 6", I need to review how the program uses the operations to sum both numbers together.

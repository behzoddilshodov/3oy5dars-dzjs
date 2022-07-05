var budget = prompt("your budget");

var name = "Alisher";
var ticket = 500;
var hotel = 250;
var museum = 120; 
var us = 9433.34;
var euro = 10354.03;

var ticket = 500 * 9433.34;
var hotel = 9433.34 * 250;
var museum = 10254.03 * 120;
var total = ticket + hotel + museum;


  if(total <= budget){
    alert("you can go to America");
    document.getElementById('demo').innerHTML = 'Amerikada mazzami brat maniyam op ketin';
    document.getElementById("gif1").style.display = "block";   
  }else if((budget >= ticket) && (budget <= total)){
    alert("you can buy only a ticket");
  }else{
    alert("you are poor");
    document.getElementById("gif2").style.display = "block";
  }
   
  








 


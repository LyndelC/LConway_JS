/*Lyndel Conway
This code enables the user to change the language of the title and introduction from English to Spanish (questionable),
draw selected images on the canvas, select their colours, then complete the registration form and submit their entry.
*/
    
//EventListeners

document.querySelector("#english").addEventListener("click", english);
document.querySelector("#spanish").addEventListener("click", spanish);  
document.querySelector("#clear").addEventListener("click", clear);
document.querySelector("#draw").addEventListener("click", draw);
document.querySelector("#cnfpwd").addEventListener('change', validatePassword);

var canvas = document.querySelector("#yourCanvas");
var ctx = canvas.getContext("2d");

function setColor() {
  document.querySelector("#hEng").style.color='blue';
  document.querySelector("#pEng").style.color='blue';


}

function english() {
    console.log("look here")
    document.querySelector("#hEng").innerHTML = "Abstract Art Competition";
    document.querySelector("#pEng").innerHTML = "Enter our Abstract Art Competition!<br> Draw your artwork in the square below.<br> When you are happy with your drawing,<br> complete your registration, attach your masterpiece by choosing your file and then submit.<br> Good luck!! ";
    setColor();
}

function spanish() {
    
    document.querySelector("#hEng").innerHTML = "Concurso de Arte Abstracto";
    document.querySelector("#pEng").innerHTML = "¡Participa en nuestro concurso de arte abstracto!<br> Dibuja tu obra de arte en el cuadro de abajo.<br> Cuando esté satisfecho con su dibujo,<br> complete su registro, adjunte su obra maestra<br> eligiendo su archivo y luego envíelo.<br>¡¡Buena suerte!! ";
    document.querySelector("#hEng").style.color='green';
    document.querySelector("#pEng").style.color='green';
  }

function draw() {

  if (document.querySelector("#shape").value == "circle") {
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(document.querySelector("#xstart").value, document.querySelector("#ystart").value, document.querySelector("#radius").value, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.fillStyle = document.querySelector("#fillPalette").value; 
    ctx.fill();
    
  }

  else if (document.querySelector("#shape").value == "quadrilateral") {
      
    ctx.beginPath();
    ctx.fillStyle = (document.querySelector("#fillPalette").value); 
    ctx.fillRect(document.querySelector("#xstart").value, document.querySelector("#ystart").value, document.querySelector("#xend").value, document.querySelector("#yend").value); 
  }

    else if (document.querySelector("#shape").value =="line") {
      
        ctx.beginPath();
        ctx.moveTo(document.querySelector("#xstart").value, document.querySelector("#ystart").value);
        ctx.lineTo(document.querySelector("#xend").value, document.querySelector("#yend").value);
        ctx.lineWidth = 5;
        ctx.strokeStyle = document.querySelector("#linePalette").value;
        ctx.stroke();
    }
}

function clear() {  
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 400, 400);   
}

function validatePassword(){
    if(document.querySelector("#pwd").value != document.querySelector("#cnfpwd").value) {
      document.querySelector("#cnfpwd").setCustomValidity("Passwords Don't Match");
      document.querySelector("#cnfpwd").reportValidity();
      document.querySelector("#pwd").value ='';
      document.querySelector("#cnfpwd").value ='';
    } 
    else {
      document.querySelector("#cnfpwd").setCustomValidity('');
      document.querySelector("#cnfpwd").reportValidity();
    } 
}
      
    

import cipher from './cipher.js';
//Variables y evento para que se escuche al dar click en theEncode y se realice la función de encode.
let theOffset= document.getElementById('offset');
let theMessage = document.getElementById('writeMessage');
let theFalse= document.getElementById('falseMessage');
let theEncode = document.getElementById('boton1');


theEncode.addEventListener ('click', function (e) {
  e.preventDefault();
  let resultado = cipher.encode(theOffset.value,theMessage.value);
  console.log(resultado)
  theFalse.innerHTML=resultado;
});
//Variables y evento para que se escuche al dar click en theDecode y se realice la función de decode.
let theOffset2= document.getElementById('offset');
let theFalse2= document.getElementById('falseMessage');
let theReal= document.getElementById('realMessage');
let theDecode2 = document.getElementById('boton2');

theDecode2.addEventListener ('click', function (e) {
  e.preventDefault();
  let result = cipher.decode(theOffset2.value,theFalse2.value);
  console.log(result)
  theReal.innerHTML= result;
})

/*const enlace = document.getElementByClassName(first);
let secret1 = document.getElementById('secret');
let welcome1 = document.getElementsById('welcome');

enlace.addEventListener ('click' , function(event){
  e.preventDefault();
secret1.style.display = 'none',
welcome1.style.display = 'block',});*/
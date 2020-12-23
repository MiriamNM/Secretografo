import cipher from './cipher.js';
/*Variables y evento para que se escuche al dar click en theEncode y se realice la función de encode.
Y que muestre y oculte pantallas.*/
let theOffset= document.getElementById('offset');
let theMessage = document.getElementById('writeMessage');
let theFalse= document.getElementById('falseMessage');
const theEncode = document.getElementById('boton1');


theEncode.addEventListener ('click', function (e) {
  e.preventDefault();
  let resultado = cipher.encode(theOffset.value,theMessage.value);
  
  theFalse.innerHTML=resultado;
  document.getElementById('secret').style.display = 'none';
  document.getElementById('welcome').style.display = 'none';
  document.getElementById('answer').style.display = 'none';
  document.getElementById('secretMessage').style.display = 'none';
  document.getElementById('farewell').style.display = 'none';
  document.getElementById('message').style.display = 'block';
});
/*Variables y evento para que se escuche al dar click en theDecode y se realice la función de decode.
y que muestre y oculte pantallas.*/
let theOffset2= document.getElementById('offset');
let theFalse2= document.getElementById('falseMessage');
let theReal= document.getElementById('realMessage');
const theDecode2 = document.getElementById('boton2');

theDecode2.addEventListener ('click', function (e) {
  e.preventDefault();
  let result = cipher.decode(theOffset2.value,theFalse2.value);
  
  theReal.innerHTML= result;
  document.getElementById('secret').style.display = 'none';
  document.getElementById('welcome').style.display = 'none';
  document.getElementById('answer').style.display = 'none';
  document.getElementById('message').style.display = 'none';
  document.getElementById('farewell').style.display = 'none';
  document.getElementById('secretMessage').style.display = 'block';
})

const enlace = document.getElementById('last');

enlace.addEventListener ('click' , function(e){
  e.preventDefault();
  document.getElementById('secret').style.display = 'block';
  document.getElementById('welcome').style.display = 'none';
  document.getElementById('answer').style.display = 'none';
  document.getElementById('message').style.display = 'none';
  document.getElementById('farewell').style.display = 'none';
  document.getElementById('secretMessage').style.display = 'none';
})

const enlace1 = document.getElementsById('first');

enlace1.addEventListener ('click' , function(e){
  e.preventDefault();
  document.getElementById('secret').style.display = 'none';
  document.getElementById('welcome').style.display = 'block';
  document.getElementById('answer').style.display = 'none';
  document.getElementById('message').style.display = 'none';
  document.getElementById('farewell').style.display = 'none';
  document.getElementById('secretMessage').style.display = 'none';
})

const enlace2 = document.getElementsById('boton3');

enlace1.addEventListener ('click' , function(e){
  e.preventDefault();
  document.getElementById('secret').style.display = 'none';
  document.getElementById('welcome').style.display = 'none';
  document.getElementById('answer').style.display = 'none';
  document.getElementById('message').style.display = 'none';
  document.getElementById('farewell').style.display = 'block';
  document.getElementById('secretMessage').style.display = 'none';
})
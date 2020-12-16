import cipher from './cipher.js';

let theOffset= document.getElementById('offset');
let theMessage = document.getElementById('writeMessage');
let theFalse= document.getElementById('falseMessage');
let theReal= document.getElementById('realMessage');
let theEncode = document.getElementById('boton1');
let theDecode2 = document.getElementById('boton2');



theEncode.addEventListener ('click', function (e) {
  e.preventDefault();
  let resultado = cipher.encode(theOffset.value,theMessage.value);
  console.log(resultado)
  theFalse.innerHTML=resultado;
});


theDecode2.addEventListener ('click', function (e) {
  e.preventDefault();
  let result = cipher.decode(theOffset.value,theFalse.value);
  console.log(result)
  theReal.innerHTML= result;
})










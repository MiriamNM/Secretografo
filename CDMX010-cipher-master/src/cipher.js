const cipher = {
     
  encode: (theOffset, theMessage) => {
    let caracters = [];
    let valor = theMessage.toUpperCase();
    let change = parseInt(theOffset);
    let total = [];
  
    for (var i = 0; i < valor.length; i++) {
      caracters.push(valor.charAt(i).charCodeAt(0));
      console.log(caracters)

      if (caracters[i] >= 65 && caracters[i] <= 90) {
        let ubication = (caracters[i] - 65 + change) % 26 + 65;
        console.log(ubication)
        total = String.fromCharCode(caracters[i]);
        console.log(total)
      }
      }
      return caracters
    },
    

  decode: (theOffset, theFalse) => {
   
    result = theFalse.toUpperCase();
    var caracters = result.join('');

      for (var i=0; i<caracters.length; i++){
        caracters[i] = String.fromCharCode(caracters[i]);
          if (caracters[i] >= 65 && caracters[i] <= 90){
            change = parseInt (-(theOffset));
            ubication= (caracters[i]-65-withOffset)%26+65;   
      }
      }
      return caracters
 },
}
  export default cipher;
 

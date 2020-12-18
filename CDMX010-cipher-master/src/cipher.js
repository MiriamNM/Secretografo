const cipher = {
     
  encode: (theOffset, theMessage) => {
    let caracters = [];
    let valor = theMessage.toUpperCase();
    let change = parseInt(theOffset);
    let total;
    let space= ' ';
  
    for (var i = 0; i < valor.length; i++) {
       if (valor.charCodeAt(i) >= 65 && valor.charCodeAt(i) <= 90) {
        total = String.fromCharCode((valor.charCodeAt(i) - 65 + change) % 26 + 65);
        caracters.push(total);
        console.log(total)
      }else{
        caracters.push(space);        
      }
      }
      return caracters.join('');
    },
    
/*la vieja
          for (var i = 0; i < valor.length; i++) {
      caracters.push(valor.charAt(i).charCodeAt(0));
      console.log(caracters)

      if (caracters[i] >= 65 && caracters[i] <= 90) {
        let ubication = (caracters[i] - 65 + change) % 26 + 65;
        console.log(ubication)
        total = String.fromCharCode(caracters[i]).join;
        console.log(total)
      }
      }
      return total
    },
    },*/



  decode: (theOffset2, theFalse2) => {
    let caracters2 = [];
    let valor2 = theFalse2;
    let change2 = parseInt(-(theOffset2));
    let total2;
    let space2= ' ';
    console.log(valor2)
    for (var i = 0; i < valor2.length; i++) {
       if (valor2.charCodeAt(i) >= 65 && valor2.charCodeAt(i) <= 90) {
        total2 = String.fromCharCode((valor2.charCodeAt(i) - 65 + change2) % 26 + 65);
        caracters2.push(total2);
        console.log(total2)
      }else{
        caracters2.push(space2);        
      }
      }
      return caracters2.join('');
    },
    
    
    
    /*let caracters2= [];
    let result2 = theFalse.toUpperCase();
    var valor2 = result2.join('');

      for (var i=0; i<valor2.length; i++){
        caracters2[i] = String.fromCharCode(valor2);
          if (valor2 >= 65 && valor2 <= 90){
            change2 = parseInt (-(theOffset));
            ubication= (caracters[i]-65+change2)%26+65;   
      }
      }
      return caracters
 },*/
}
  export default cipher;
 

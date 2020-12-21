const cipher = {
  //función para cifrar el secreto.  
  encode: (theOffset, theMessage) => {
    let caracters = [];
    let valor = theMessage.toUpperCase();
    let change = parseInt(theOffset);
    let total;
    const space= ' ';
  
    if (change == null) {
      throw new TypeError ('Not Valid');
    } else if (change == []) {
      throw new TypeError ('Not Valid');
    } else if (change == 0) {
      throw new TypeError ('Not Valid');
    } 
  

    for (var i = 0; i < valor.length; i++) {
       if (valor.charCodeAt(i) >= 65 && valor.charCodeAt(i) <= 90) {
        total = String.fromCharCode((valor.charCodeAt(i) - 65 + change) % 26 + 65);
        caracters.push(total);
        
      }else{
        caracters.push(space);        
      }
      }
      return caracters.join('');
    },
  
    

//finción para descifrar el secreto.
decode: (theOffset2, theFalse2) => {
  let caracters2 = [];
  let valor2 = theFalse2;
  let change2 = parseInt(theOffset2);
  let change3 = 26-(change2 % 26);
  let total2;
  let space2= ' ';
 

  if (change2 == null) {
    throw new TypeError ('Not Valid');
  } else if (change2 == []) {
    throw new TypeError ('Not Valid');
  } else if (change2 == 0) {
    throw new TypeError ('Not Valid');
  } else if (valor2 == 0) {
    throw new TypeError ('Not Valid');
  }

  for (var i = 0; i < valor2.length; i++) {
     if (valor2.charCodeAt(i) >= 65 && valor2.charCodeAt(i) <= 90) {
      total2 = String.fromCharCode((valor2.charCodeAt(i) - 65 + change3) % 26 + 65);
      caracters2.push(total2);
    
    }else{
      caracters2.push(space2);        
    }
    }
    return caracters2.join('');
  },
 
}
  export default cipher;
 

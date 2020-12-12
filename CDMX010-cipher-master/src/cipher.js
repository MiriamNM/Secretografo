const cipher = {
     

  encode: function (offset,secret){8
   
    let caracters = [];
    let result = secret.toUpperCase(); 
    let total=null
      for (var i = 0; i < result.length; i++){
        caracters[i]= result.charAt(i).charCodeAt(0);
        if (caracters[i] >= 65 && caracters[i] <= 90){
          let ubication= (caracters[i]-65+offset)%26+65; 
          
        }
        total= String.fromCharCode(caracters[i]);
      };
      return "hola soy miriam"
      },
    

  /*decode: function (){
    let secret = document.getElementById('writeMessage');
    let realSecret = document.getElementById('realMessage'); 

    result = secret.value.toUpperCase();
    var caracters = result.split('');

      for (var i=0; i<caracters.length; i++){
      caracters[i] = String.fromCharCode(caracters[i]);
      if (caracters[i] >= 65 && caracters[i] <= 90){
        let withOffset = parseInt (withOffset.value);
        let ubication= (caracters[i]+65-withOffset)%26-65; 
        
      };
      return caracters[i];
      }
}*/
}
  export default cipher;
 

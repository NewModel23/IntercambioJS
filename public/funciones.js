  
  function bloquearTodo(nombre){
      console.log("Bloqueando al usuario.." + nombre)
      var ele = document.getElementsByName('yesno');   
          for(i = 0; i < ele.length; i++) { 
              if (ele[i].value == nombre){
                ele[i].disabled = true;
                console.log("Bloqueado... " + ele[1].value)
                break;
              }   
          };
  }    



  function showRaulNumber(){
    document.getElementById('1').style.visibility = 'visible';
  }
 
  function showEmiNumber(){
    document.getElementById('2').style.visibility = 'visible';
  }
 

  function showElyNumber(){
    document.getElementById('3').style.visibility = 'visible';
  }
 
  function showHuesoNumber(){
    document.getElementById('4').style.visibility = 'visible';
  }
 
function showHectorNumber(){
    document.getElementById('5').style.visibility = 'visible';
  }
 
function showLeoNumber(){
    document.getElementById('6').style.visibility = 'visible';
  }
 
function showGusNumber(){
    document.getElementById('7').style.visibility = 'visible';
  }
 
function showIrmaNumber(){
    document.getElementById('8').style.visibility = 'visible';
  }
function showArmandoNumber(){
    document.getElementById('9').style.visibility = 'visible';
  }
function showPauNumber(){
    document.getElementById('10').style.visibility = 'visible';
  }
function showObdusNumber(){
    document.getElementById('11').style.visibility = 'visible';
  }
 
 
function equivalencias(usuario){
    
    console.log("Usuario:" +usuario);
    
    switch(usuario){
            
        case "Raul":
            aRegalar = "Hector y Emiliano le toca: Gus"
            break;
         case "Elizabeth":
            aRegalar = "Hueso y Emiliano le toca: Gus"
            break;
         //case "Emiliano":
        //    aRegalar = "Gus"
        //    break;
            
            
         case "Hueso":
            aRegalar = "Emiliano y a Gustavo le toca: Pau, Leo le toca: Ely"
            break;
         case "Hector":
            aRegalar = "Irma y a Gustavo le toca: Pau, Leo le toca: Ely"
            break;
            
        //case "Leo":
        //    aRegalar = "Armando"
        //    break;
        //case "Gus":
        //    aRegalar = "Irma"
        //    break;
        
        
        case "Armando":
            aRegalar = "Obdus y a Pau le toca: Leo"
            break;
        case "Irma":
            aRegalar = "Ely y a Pau le toca: Leo"
            break;
        //case "Pau":
        //    aRegalar = "Leo"
        //    break;
            
            
        case "Obdus":
            aRegalar = "Raúl"
            break;
        
        default: 
            aRegalar = "nadie... ya tienes un asignado consulta con tu Papa"
            
            
    }
    
    return aRegalar;
}
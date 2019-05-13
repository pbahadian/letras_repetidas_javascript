
//Fase 1----------------------------

/*
var letters = ['P','A','U','L','A'];

for (var i = 0; i<letters.length; i++) {

	console.log(letters[i]);
}

*/



//FASE 2 ---------------------------------------

/*
var letras = ['P','A','8','L','A'];
var nombre = "PA8LA";

console.log("Partimos del nombre :",nombre);

	for (var i = 0; i<letras.length; i++) {
    console.log(letras[i]);
	if (isNaN(letras[i])) {
	if (letras[i] == 'A'|| letras[i] == 'E' || letras[i] == 'I' || letras[i] == 'O' || letras[i] == 'U') 
			{
     console.log("He  encontrado la VOCAL: " + letras[i]);
    } else {           

     console.log("He encontrado la CONSONANTE: " + letras[i]);       
    }
  
  }else 
  {    console.log ("No es una letra, es un numero!! " + letras[i]);}}

  */


//Fase 3-----------

/*
var name = "Paula Bahadian Moreira";
nameMap = new Map();
for(var i=0; i<name.length;i++){
    
     let number=nameMap.get(name[i]);
    if (number) {
          nameMap.set(name[i],number+1)
    }
    else {
        nameMap.set(name[i],1)
    }
}
console.log(nameMap);

*/

//fase 4  ---------------------

/*
var name = "Paula Bahadian Moreira";
console.log(Array.from(name))
*/




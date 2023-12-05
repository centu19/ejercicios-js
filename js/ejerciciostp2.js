//ejercicio 1

// let edad = parseInt(prompt("Ingrese su edad por favor"));
// if (edad >= 18) {document.write ("Usted puede conducir ")}
// else {if(edad<18) {document.write("No cuenta con edad para conducir")}};

//Ejercicio 2
// let nota = parseInt(prompt("Ingresa tu nota del examen"));

// switch (nota) {
//     case 0:
//     case 1:
//     case 2:
//        document.write("Nota deficiente");
//        alert ("Estudia mas") 
//         break;

//         case 3 :
//         case 4:
//             document.write("Insuficiente")  
//             alert("No dejes de estudiar")
//             break;

//             case 5 :
//             case 6: 
//             document.write("Suficiente")
//             alert("Vas mejorando")
//             break;

//             case 7:
            
//                 document.write("Bien")   
//                 alert("A seguir asi") 
//                 break;
//                 case 8:
//                 case 9:
//                     document.write("Notable") 
//                     alert("Excelente nota")   
//                     break;
                
//                     case 10:
//                         document.write("Sobresaliente")
//                         alert("Impecable ")

//     default:
//         document.write("Numero erroneo")
//         alert("Escribi bien el numero ")
//         break;
// }

// 

// const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

// let numDNI = parseInt(prompt("Ingrese el número del DNI"));

// if (!isNaN(numDNI) && numDNI >= 0 && numDNI <= 99999999) {
//     let resultado = numDNI % 23;
//     let letraDNI = letras[resultado];
//     document.write("La letra correspondiente al DNI " + numDNI + " es: " + letraDNI); 
// }else {
//          alert("Por favor, ingrese un número válido de DNI (entre 0 y 99999999).");
//      }

//  for (let i = 1; i <= 30; i++) {
//      let linea = '';

//      for (let j = 1; j <= i; j++) {
//          linea += i;
//      }

//      console.log(linea);
//  }

let num = parseInt(prompt("Ingrese un numero"))



if(num >0 && num <50){
    for (let i = num; i >= 1; i--) {
        let linea = '';
    
        for (let j = 1; j <= i; j++) {
            linea += i;
        }
    
        console.log(linea);
    }
}else{
    console.log("Por favor, ingrese un número válido entre 1 y 50.");
}


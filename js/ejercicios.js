// // 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
// let nombreUsuario = prompt("Ingrese nombre de usuario");
// document.write("<br> Hola "+nombreUsuario);

// //5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// let numero1 = parseInt(prompt("Ingrese un número"));
// let numero2 = parseInt(prompt("Ingrese otro número"));
// document.write("<br> Suma de los números: "+(numero1+numero2))

//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// let numerocomparativo1 = parseInt (prompt("ingrese 1er numero"));
// let numerocomparativo2 = parseInt (prompt("ingrese 2do numero"));

// if (numerocomparativo1>numerocomparativo2) { document.write("Numero mayor es" + numerocomparativo1)
// console.log("numero mayor es: " + numerocomparativo1);
    
// };

//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
//  let numerocomp1 = parseInt (prompt("ingresa tu 1er num"));
//  let numerocomp2 = parseInt (prompt("ingresa tu 2do num"));
// let numerocomp3 = parseInt (prompt("ingresa tu 3er num"));

// if (numerocomp1 < numerocomp2) numerocomp1 = numerocomp2;
// if (numerocomp1 < numerocomp3) numerocomp1 = numerocomp3;
// {document.write("<br> Número mayor de tres es: " + numerocomp1)
// console.log("el numero es :" + numerocomp1);};

//8.- Escribe un programa que pida un número y diga si es divisible por 2

// let numerodivisible = parseInt(prompt("ingrese el numero para ver si es divisible en 2"));
// if (numerodivisible % 2 === 0) { document.write("<br> El " + numerodivisible + " es divisible por 2")
    
// }; 

//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// let frase = prompt("Ingrese una frase");
// let vocales = "";
// for (const letra of frase) {
//   if (
//     letra === "a" ||
//     letra === "e" ||
//     letra === "i" ||
//     letra === "o" ||
//     letra === "u"
//   ) {
//     vocales += letra;
//   }
// }
// document.write("<br> La frase "+ frase + " se simplifica a estas vocales " + vocales);

//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)


//  let numerodivisible = parseInt(prompt("ingrese el numero para ver si es divisible en 2,3,5 o 7"));

// if (numerodivisible % 2 === 0) { document.write("<br> El " + numerodivisible + " es divisible por 2");}

// else if (numerodivisible % 3 === 0) {document.write("<br> El " + numerodivisible + " es divisible por 3");}

// else if (numerodivisible % 5 === 0) {document.write("<br> El " + numerodivisible + " es divisible por 5");}
 
// else if (numerodivisible % 7 === 0) {document.write("<br> El " + numerodivisible + " es divisible por 7");}

//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)


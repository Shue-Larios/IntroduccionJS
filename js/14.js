// Arreglos o Arrays
/*
const numero = [10,20,30,40,50];
console.table(numero) //muestra los datos de la consola en una tabla

const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];
//este es con el constructor
const meses = new Array ('Enero','Febrero','Marzo','Abril','Mayo');
console.table(meses);


// Acceder a los datos de un arreglo
console.log(numero[4]); // 4 en la posicion del index en la q se encuentra el dato siempr empiezan en 0 los array


// Conocer la extension de un arreglo 
console.log(meses.length); // esto me va a decir cuatos elementos hay en un arreglo


// Para recorrer arreglos
numero.forEach(function(numero){ //forEach se va a ejecutar una ves por cada elemento
    console.log(numero);}
)*/

// Agregar elementos al arreglo
// const numero = [10,20,30,40,50];
// numero[5] = 60; // 5 es el index donde va el elemento agregar esta forma no es muy comun, si pongo un numero ya existente modifica el valor
// console.table(numero);

/*
// Agregar elemento con Push
const numero = [10,20,30,40,50];
numero.push (60,70,80); // Agrega el dato al ultimo sin importar el numero index
console.table(numero);*/

/*
// Agregar elemento con unshift
const numero = [10,20,30,40,50];
numero.unshift (-10,-20,-30); // Agrega el dato al principio del arreglo
console.table(numero);*/

/*
// Eliminar elemento del arreglo
const numero = [10,20,30,40,50];
numero.pop(); // Elimina el ultimo dato del arreglo
console.table(numero);*/

/*
// Eliminar elemento del arreglo
const numero = [10,20,30,40,50];
numero.shift(); // Elimina el primer elemento del arreglo
console.table(numero);*/ 


/*
// Eliminar elemento del arreglo
const numero = [10,20,30,40,50];
numero.splice(2, 1); // Elimina el elemento del arreglo que yo desee con dos valores
// 2 es el index del arreglo y 1 cuantos quiero borrar despues de eso
console.table(numero);*/


// Rest Operator o Spread Operator Copia un arreglo y agrega un elemento mas
const numero = [10,20,30,40,50];
const nuevoArreglo = [...numero, 80]; /// 3 puntos indica copiar ese arreglo y agregale un elemento mas
console.table(nuevoArreglo);

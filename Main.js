console.log("hello word")

//Declaracion de variables  
let nombre = "juan"
let edad = 25
let ciudad = "Medellin" 

// uso de la variable 
console.log("Hola, mi nombre es "  + nombre +   " tengo "  +  edad +  "  años y vivo en  " + ciudad + ".")
// Sobrescribir variables 
ciudad = "Bogota"

// concatenar   
console.log("Hola, mi nombre es "  + nombre +   " tengo "  +  edad +  "  años y vivo en  " + ciudad + ".")

// numeros  y concatenar +
let num1 = 10 
let num2 = 5
let suma = num1 + num2
console.log(suma)

// strigs y concatenar 
let frase1 = "hola "
let frase2 = "mundo"
let saludo = frase1 + frase2 
console.log(saludo)

// TIPOS DE DATOS 

let edad2 = 30
console.log(typeof edad2) 

let mensaje = "hola mundo"
console.log(typeof mensaje) 

mensaje = 10 
console.log(typeof mensaje)

let esEstudiante = true
console.log(typeof esEstudiante)

let sindefinir 
console.log(typeof sindefinir)

let nada = null
console.log(typeof nada)

let simbolo = Symbol("misimbolo") 
console.log(typeof simbolo)

//Tipos de variables = let , const , var 

const a = 5
console.log(a)
console.log(typeof a)

const b ="hola"
console.log(b)
console.log(b)


// hosting - scope global 

c = 19
console.log(c)

var c = 15
console.log(c)

c = "hello"
console.log(c)

//REFRENCE ERROR = NO SE DECLARO 

//d = 50
//console.log(d) 

//let d = 20
//console.log(d)

                                //operadores basicos 

let y = 2
let x = 10

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y) // Para ver el residuo de la division 
console.log(8*2+5)
console.log(5+2*8)
                               
//operadores de incremento

let num = 0 
num++ // num= num+1
console.log(num)

//operadores de decremento
num -- 
console.log(num)

//operador de asignacion 

let val = 10 
val += 5
console.log(val)
val -= 2
console.log(val)
val *=3
console.log(val)
val /= 13
console.log(val)
val %= 2
console.log(val)

// operadores de compracion iguales 

x=5
y=5
console.log(x == y)

let sonIguales = x == y
console.log(sonIguales)
// se identifica el tipo de variable con 3 ===, en este caso las dos son de tipo numerico, solo si los dos valores anteriores son un valor numerico
sonIguales = x === y 
console.log(sonIguales)

// operadores de comparacion diferente 

console.log(x !=y)
console.log(x !==y)

// STRINGS - cadena de caracteres 

let cadena1 = "hola"
let cadena2 = "mundo"

let cadenafinal = cadena1 + " " + cadena2
console.log (cadenafinal)

// longuitud de la cadena 

let miCadena = "Hola, Mundo de la programacion"
console.log(miCadena.length)

// convertir minisculas a mayusculas 
console.log(miCadena.toUpperCase())
console.log(miCadena.toLowerCase())

// Acceso a caracteres especificos de la cadena 

console.log(miCadena [6]) // se accedio a la letra M
console.log(miCadena [10])  
console.log(miCadena[miCadena.length -1])


// buscar una letra especifica 
console.log(miCadena[miCadena.indexOf("O")])


//Encontrar una cadena en especifico 

let subcadena = "carro"
if (miCadena.includes(subcadena)) {
    console.log("la cadena "  + subcadena + "se encontro en la frase ")
} else {
    console.log("la cadena  " + subcadena + " no se encontro en la frase" )

}

// remplazar subcadena 

let subcadenaRemplazar = "Mundo"
let nuevasubcadena = "universo"
let nuevaCadena = miCadena.replace(subcadenaRemplazar, nuevasubcadena)
console.log(nuevaCadena)


//dividir cadena

let texto = "java script es un lenguaje de programacion muy popular"
let palabras = texto.split(" ")
console.log(palabras)

// invertir una palabra 

let palabra = "casa" 
console.log(palabra.split("").reverse().join(""))

//strings literals

const miNombre = "juan"
let literal = `Mi nombre es ${miNombre} y tengo ${30+3} años ` 
console.log (literal)

// puedo dar saltos de linea

let poema = `en un 
lugra de la 
mancha`
console.log(poema)

// operacion compleja
let variable1 = 5 
let variable2 = 10
console.log(`el resultado de sumar ${variable1} y ${variable2} es ${variable1 + variable2}`)

// si yo quiero que el leguanje se muestre con unas comillas simples 

let cita = `ella dijo: " ella dijo y añadio "no hay problema alguno`
console.log(cita)

// condicionales 
// if y else

let Miedad = 11
if (Miedad >= 18) {
    console.log("eres mayor de edad")
} else {
    console.log (" eres menor de edad")
} // se lee si Miedad es mayor igual a 18  quiero que me imprima que si es mayor es mayor de edad pero si la primera condicion no se cumple significa que es menor de edad

// else if

let numero1 = 10
let numero2 = 20
if (numero1 > numero2 ) {
    console.log(`${numero1} es mayor que ${numero2}`)
} else if (numero1 < numero2 ) {
    console.log(`${numero1} es menor que ${numero2}`)
} else {
    console.log(`${numero1} es igual a ${numero2}`)
}


// verficar si un numero es par o impar 

let numero = 15
if ( numero % 2 === 0 ) {
    console.log("el numero es par")
} else {
    console.log("el numero es impar")
}

// conversion y conversion 

let cadena = "123"
console.log (Number(cadena))  // convertir un string a un numero
console.log (typeof NaN)  // Tipo de dato NaN (numero que no existe)= es not is a number (para asegurarme de que es un numero)

let numeroConvertir = 456 // declarar la variable 
console.log(String(numeroConvertir)) // convertir de numero a string

console.log (123 + "456") // otra forma de convertir los valores / coercion /

console.log (10 == "10")

console.log("5"+ 3) // 53 en este caso si se realiza la operacion de concatenacion y no de suma por que la suma otra funcion de concatenacion , es un valor sobrecargado 
console.log("5"- 2) // 3 en este caso si se realiza la operacion de resta por que la resta no tiene otra funcion
console.log([1,2,3] == `1,2,3`) // convierte el array en una cadena/coercion interna/

// truty y Falsy (estado de verdad o estado de falsedad)
// 0, null , inderfined, " "( caracte vacio), NaN

var num3 = 0 
if (num3) {

}  // if converte los valorea a boolean 

console.log (Boolean(0))
console.log (Boolean(null))
console.log (Boolean(undefined))
console.log (Boolean(NaN))
console.log (Boolean(''))


console.log (Boolean([ ]))
console.log (Boolean({}))

// operadores de igualdad 

// == y ===
// !== y !===

console.log(1 =="1")
console.log(1 === "1")
console.log (Number(' ') == false ) // true , por que convirtio un valor falso en falso por lo tanto es verdadero

console.log(Boolean(''))

console.log(1 !== "1") // true por que son diferentes 
console.log(1 !== 1)  // False por que son iguales 

// operadores logicos

console.log(true && true)
console.log(true && false)
console.log(true || false)
console.log(false || false)

// operador de negacion 

console.log(!true)
console.log(!false)

// procedencia de  los operadores logicos

console.log(false && false || true && true) // siempre se ejecuta el and antes que el OR por esta razon da true
console.log(false && (false || true) && true)
console.log(false || true && true || false )


//operadores logicos con valores no booleanos 

console.log ('javascript ' && 'ECMAScript')
console.log ('javascript' || 'ECMAScript')
const mensajeIngresado = ''
const mensajeFinal =mensajeIngresado || 'mensaje por defecto'
console.log(mensajeFinal)


// fuction o fuciones 

function miFuctionNombrada(_param1, _param2) {
    // codigo de la funcion
    console.log ("miFuctionNombrada", _param1, _param2) 
}

miFuctionNombrada (1,2)
 
// unamed fuctions

const miFuctionAnonima = (_param1, _param2)  => {
    // codigo de la funcion
    console.log ('miFuctionAnonima' , _param1, _param2)
}
    

console.log(typeof miFuctionAnonima)

miFuctionAnonima (3,4)

// Arrow fuction

const miFuncioArrow = (_param1, _param2) => {
    // codigo de la funcion
    console.log ('miFuncioArrow', _param1, _param2 )
}

miFuncioArrow (5,6)

// scope = Alcance de las variables
// contexto =  A que variables tengo acceso 

const miVariable ='hola' //GLOBAL
function miFuction () { // FUCTION
    const miVariable2 = "mundo"
 console.log (miVariable2)
 const miVariable = 'hola de nuevo'
 console.log( miVariable )

}

miFuction ()

// scope de bloque

if (true) {
    const miVariable3 = "test"
    const miVariable2 = "test2"
    console.log (miVariable2)
}

// Contexto

console.log (this)

const persona = {
    codigo: '111-matematicas',
    nombre: 'andres', //DUPLA : Cada una de las duplas se separan por comas , al final de la declaracion 
    apellido: 'gonzales', //DUPLA
    id: '123456',
    birthYear: '1990',
    materias: [ 

        {
            id: "111- matematicas",
        nombre:'matematicas generales ' 
        }, 
        {
            id: "111-filosofia",
            nombre: 'filosofia moderna'       
        }, 
        {
            id: "111-fisica",
            nombre:   'astro fisica'     
        }
    ],
        
    calcularEdad() {  // se puede tener metodos o funciones dentro 
        console.log(this) 
        return new Date ().getFullYear() - this.birthYear
    },
    calcularEdadArrow: ()  => {
        console.log( 'this arrow', this) 

    },
    buscarMateriaPersona (materia) {
        return this.materias.find((itemMateria) => itemMateria.id === `${this.codigo}-${materia}`)
    }
}


console.log(persona)
console.log(persona.calcularEdad())
console.log (this) // window
// console.log(persona.calcularEdadArrow())


// las funciones normales declaradas con fuction tienen su propio contexto
// las funciones arrow heredan el contexto


console.log(persona.buscarMateriaPersona("matematicas"))


function miFunction (a,b) {
    // const newArray = [] ;
    // for (let i = 0; i < a.length; i++) {
    //     if (a[i] === b) {
    //        newArray.push (a[i]);

    //     }
    // }
    // return newArray;
 return a.filter((item) => item !== b)  // remover un elemento especifico de la cadena 
}

console.log(miFunction ([1,2,3],2))

// para contar elementos de una cadena dentro del array

function miFunction2 (a) {

    return a.filter( x => x < 0).length; 
}

    //  Ordenar los valores de una cadena dentro del array - algortimo de ordenamiento burbuja


    console.log(miFunction2 ([1, -2,-3,2])  )

 
    function miFunction3 (arr) {
 for (let i = 0; i < arr.length -1 ; i++) {
    for (let j = i + 1; j  < arr.length; j++ ) {
        if (arr[i] > arr [j] ) {
            const temp = arr [i]
            arr [i] = arr [j]
            arr [j] = temp
        }
    }
    console.log (arr)
 }
 return arr 
}

console.log(miFunction3 (['b', 'c', 'd', 'a' ]))

console.log ('a' < 'b ')
console.log ('d' < 'b ')


// Array sort para ordenamiento de caracteres

// function mySortFunction(arr) {

//     return arr.sort((a, b) => b - a ) 
// }

// console.log (mySortFunction(4,2,3,1,8))

                              // Que es un objeto


let personaObj = {
    nombre: 'Juan',
    apellido: 'Mendez',
    anioNacimiento:1995, 
    estatura: 180,
    colorOjos: 'cafe',
    direccion: {
        direccion: 'calle 123 # 12 - 34',
        complementos: 'ap 2'

    }, 
    telefonos : ['123455667', ' 12345665555'],
    calcularEdad () {
        return Date.now (). getFullYear () - this.anioNacimiento
    }

}

console.log (personaObj.nombre)
console.log (personaObj['apellido'])

personaObj.calcularEdad ()

Object.keys (personaObj) //puedo obtener mas informacion relevante (nombre , apelleido, nacimiento)
Object.values (personaObj) //[juan , mendez ,1995]



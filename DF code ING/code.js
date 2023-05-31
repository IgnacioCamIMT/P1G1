///////////////////// VARIABLES GLOBALES

var A = 0
var operacion = ""

////////////////////FUNCIONES

function factorialN() {
    var N = prompt("Ingrese N", 3)
    var i = 1
    var resp = 1
    if (N >= 0) {
        if (N == 0) {
            alert("El factorial de N es " + resp)
        } else {
            while (N >= i) {
                resp = resp * i
                i = i + 1
            }
            alert("Factorial de N es: " + resp)
        }
    } else {
        alert("No factorial de un negativo")
    }
}

function calcularFactorial(N) {
    //var N = prompt("Ingrese N", 3)
    var i = 1
    var resp = 1
    if (N >= 0) {
        if (N == 0) {
            //alert("El factorial de N es " + resp)
            return resp
        } else {
            while (N >= i) {
                resp = resp * i
                i = i + 1
            }
            //alert("Factorial de N es: " + resp)
            return resp
        }
    } else {
        alert("No factorial de un negativo")
    }
}

function mayorAyB() {
    var A = parseInt(prompt("Ingrese A", 10))
    var B = parseInt(prompt("Ingrese B", 7))
    if (A == B) {
        alert("son iguales")
    } else {
        if (A > B) {
            alert("el mayor es A: " + A)
        } else {
            alert("el mayor es B: " + B)
        }
    }
}

function menorAyB() {
    var A = parseInt(prompt("Ingrese A", 10))
    var B = parseInt(prompt("Ingrese B", 7))
    if (A == B) {
        alert("son iguales")
    } else {
        if (A > B) {
            alert("el menor es B: " + B)
        } else {
            alert("el menor es A: " + A)
        }
    }
}

function obtenerDiv() {
    var A = parseInt(prompt("Ingrese A", 10))
    var B = parseInt(prompt("Ingrese B", 7))
    var resultado
    resultado = A / B
    alert(parseInt(resultado))
}

function obtenerMod() {
    var A = parseInt(prompt("Ingrese A", 10))
    var B = parseInt(prompt("Ingrese B", 7))
    var resultado
    resultado = A % B
    alert(parseInt(resultado))
}

function obtenerCantidadDigN() {
    var N = parseInt(prompt("Ingrese N", 9478324))
    var cantidad = 0
    while (N != 0) {
        N = parseInt(N / 10)
        cantidad = cantidad + 1
    }
    alert("digitos: " + cantidad)
}

function mostrarDigN() {
    var N = parseInt(prompt("Ingrese N", 9478324))
    var dig = 0
    while (N != 0) {
        dig = parseInt(N % 10)
        alert(dig)
        N = parseInt(N / 10)
    }
}

function existeDig3enN() {
    var N = parseInt(prompt("Ingrese N", 9478324))
    var dig = 0
    while (N != 0) {
        dig = parseInt(N % 10)
        if (dig == 3) {
            alert("Existe el dig 3")
        }
        N = parseInt(N / 10)
    }
}

function calcularTrapecio() {
    var h = parseInt(prompt("Ingrese h", 10))
    var b = parseInt(prompt("Ingrese b", 5))
    var B = parseInt(prompt("Ingrese B", 15))
    var a = parseInt(prompt("Ingrese a", 10))
    var c = parseInt(prompt("Ingrese c", 7))
    var area = 0
    var perimetro = 0
    area = ((b + B) / 2) * h
    perimetro = a + b + B + c
    alert("El area es: " + area)
    alert("El perimetro es: " + perimetro)
}

function determinarNesParImpar() {
    var N = parseInt(prompt("Ingrese N"))
    if ((N % 2) == 0) {
        alert(N + " es par.")
    } else {
        alert(N + " es impar.")
    }
}

function ifNormal() {
    var N = parseInt(prompt("Ingrese N"))
    if (N > 5) {
        N = 10
    } else {
        N = 1
    }
    alert(N)
}

function ifAbreviado() {
    var N = parseInt(prompt("Ingrese N"))
    N = (N > 5) ? 10 : 1
    alert(N)
}
/*
    var N = parseInt(prompt("Ingrese N", 9478324))
    var cantidad = 0
    while (N != 0) {
        N = parseInt(N / 10)
        cantidad = cantidad + 1
    }
    alert("digitos: " + cantidad)
*/
function obtenerCantidadDigN_FOR() {
    var N = parseInt(prompt("Ingrese N", 9478324))
    var cantidad
    for (cantidad = 0; N != 0; cantidad++) {
        N = parseInt(N / 10)
    }
    alert("digitos: " + cantidad)
}

//Practico Segundo Parcial
function mostrarDigitosImpares() {
    var N = parseInt(prompt("Ingrese N", 9478324))
    var dig = 0
    while (N != 0) {
        dig = N % 10
        if (dig % 2 == 1) {
            alert("digito impar: " + dig)
        }
        N = parseInt(N / 10)
    }
}

function mostrarSuma1_10() {
    sum = 0
    ini = 1
    lim = 10
    while (ini <= 10) {
        sum = sum + ini
        ini = ini + 1
    }
    alert("sumatoria de 1 a 10: " + sum)
}

function calcularAreaVolumenDeCilindro() {
    var R = parseInt(prompt("Ingrese el radio: ", 3))
    var H = parseInt(prompt("Ingrese la altura: ", 5))
    var area = 2 * Math.PI * R * (R + H)
    var volumen = Math.PI * Math.pow(R, 2) * H
    alert("area: " + area + " volumen: " + volumen)
}

function mostrarPositivoNegativoNeutro() {
    var N = parseInt(prompt("Introducir N: ", 5))
    if (N > 0) {
        alert("Positivo")
    }
    if (N < 0) {
        alert("Negativo")
    }
    if (N == 0) {
        alert("Neutro")
    }
}

// version 1.0
function mostrarMenorDosNumero() {
    var A = parseInt(prompt("Ingrese el primer número: "))
    var B = parseInt(prompt("Ingrese el segundo número: "))
    if (A > B) {
        alert("El menor es: " + B)
    }
    if (B > A) {
        alert("El menor es: " + A)
    }
}

function NmultiploDeM() {
    var N = parseInt(prompt("Ingrese N: ", 10))
    var M = parseInt(prompt("Ingrese M: ", 5))

    if ((N % M) == 0) {
        alert(N + " es múltiplo de " + M)
    } else {
        alert(N + " no es múltiplo de " + M)
    }
}

function sumaDigMultiplos3deN() {
    var N = parseInt(prompt("Ingrese N", 23462314))
    var sum = 0
    var dig = 0
    while (N != 0) {
        dig = parseInt(N % 10)
        alert(dig)//IF para sumar los multiplos de 3
        if ((dig % 3) == 0) {
            sum = sum + dig
        } else {
            //nada
        }
        N = parseInt(N / 10)
    }
    alert(sum)
}

function sumarNrosEntreAyB() {
    var A = parseInt(prompt("Ingrese A", 3))
    var B = parseInt(prompt("Ingrese B", 9))
    var suma = 0

    while (B >= A) {
        alert(A)
        suma = suma + A
        A = A + 1
    }

    alert(suma)
}


function promedioNdeNotas() {
    var N = parseInt(prompt("Ingrese N", 15))
    var sumaNota = 0
    var i = 0
    while (N > i) {
        i = i + 1
        var nota = parseInt(prompt("Ingrese Nota", 80))

        sumaNota = sumaNota + nota
    }
    alert(sumaNota / N)
}

var myVariableGlobal = "Hola Mundo"

function obtenerNombreCompleto(nombre, apellido) {
    var nombreCompleto = nombre + " " + apellido + " " + myVariableGlobal
    return nombreCompleto
}

function obtenerEdad(edad) {
    edad = edad + 10
    return edad
}

function verificarMayorEdad(edad) {
    if (edad >= 18) {
        alert("Puedes pasar " + myVariableGlobal)
    } else {
        alert("Vuelve cuando tengas 18 " + myVariableGlobal)
    }
}

function funcionConReturn() {
    var myNombreCompleto = obtenerNombreCompleto("Alex", "Ferrufino")
    var myEdad = obtenerEdad(10)
    alert("Nombre: " + myNombreCompleto)
    alert("Edad: " + myEdad)
    verificarMayorEdad(myEdad)
}

/*  SECCION DE CODIGO PARA LA CALCULADORA */

// Dar un nuevo valor al INPUT "resultado" en la pag HTML
function darValor(valor) {
    document.getElementById("resultado").value = valor
}

// Obtener el valor actual del INPUT "resultado" en la pag HTML
function obtenerValor() {
    var nro = document.getElementById("resultado").value
    return nro
    //alert(nro)
}

// Adjuntar un nuevo valor a la derecha 
// del INPUT "resultado" en la pag HTML
function adjuntarValor(numero) {
    var actualNumero = obtenerValor()
    var juntarNumeros = actualNumero + "" + numero
    darValor(juntarNumeros)
}

function factorial() {
    var N = obtenerValor()
    var resultadoFact = calcularFactorial(N)
    darValor(resultadoFact)
    //alert("Soy Factorial")
}

function potencia() {
    A = obtenerValor()
    darValor("")
    operacion = "potencia"
    //alert("Soy Potencia")
}

function borrar() {
    var vacio = ""
    darValor(vacio)
    //alert("Soy Borrar")
}

function dividir() {
    A = obtenerValor()
    darValor("")
    operacion = "dividir"
    //alert("Soy Dividir")
}

function numero(dig) {
    adjuntarValor(dig)
    //alert("Soy Numero " + dig)
}

function multiplicar() {
    A = obtenerValor()
    darValor("")
    operacion = "multiplicar"
    //alert("Soy Multiplicar")
}

function restar() {
    A = obtenerValor()
    darValor("")
    operacion = "restar"
    //alert("Soy Restar")
}

function sumar() {
    A = obtenerValor()
    darValor("")
    operacion = "sumar"
    //alert("Soy Sumar")
}

function masMenos() {
    var valorResultado = obtenerValor()
    if (valorResultado == 0) {
        //nada
    } else {
        if (valorResultado > 0) {
            //positivo
            valorResultado = valorResultado * -1
        } else {
            //negativo
            valorResultado = valorResultado * -1
        }
    }
    darValor(valorResultado)
    //alert("Soy Mas Menos: " + valorResultado)
}

function mod() {
    A = obtenerValor()
    darValor("")
    operacion = "mod"
    //alert("Soy MOD")
}

function igual() {
    var B = obtenerValor()
    if (operacion == "potencia") {
        var res = NpotenciaPconParametros(A, B)
        darValor(res)
    }
    if (operacion == "mod") {
        var res = A % B
        darValor(res)
    }
    if (operacion == "dividir") {
        var res = A / B
        darValor(res)
    }
    if (operacion == "multiplicar") {
        var res = A * B
        darValor(res)
    }
    if (operacion == "restar") {
        var res = A - B
        darValor(res)
    }
    if (operacion == "sumar") {
        var res = parseInt(A) + parseInt(B)
        darValor(res)
    }
    //alert("Soy Igual")
}

function NpotenciaP() {
    var N = parseInt(prompt("Ingrese N", 3))
    var P = parseInt(prompt("Ingrese P", 4))
    var i = 1, res = 1
    while (i <= P) {
        res = res * N
        i++
    }
    alert(res)
}


function NpotenciaPconParametros(N, P) {
    var i = 1, res = 1
    while (i <= P) {
        res = res * N
        i++
    }
    return res
    //alert(res)
}

function GetCharByPosition() {
    var cadena = prompt("Ingrese una Cadena", "Hola Mundo")
    var pos = parseInt(prompt("Ingrese Posición", 3))
    var caracter = cadena[pos]
    alert(caracter)
}

function JoinTwoString() {
    var cadenaA = prompt("Ingrese una Cadena A", "Hola")
    var cadenaB = prompt("Ingrese una Cadena B", "Mundo")
    var unir = cadenaA + cadenaB
    alert(unir)
}


function GetFrecuencyOfChar() {
    var cadena = prompt("Ingrese una Cadena", "Universidad Cumbre")
    var longitudCad = cadena.length
    var i = 0
    var contar = 0
    while (longitudCad > i) {
        var caracter = cadena[i]
        i++
        if (caracter == 'a') {
            contar = contar + 1
        }
        alert(caracter)
    }
    alert("La frecuencia de 'a' es: " + contar)
}

function MyNameInASCII() { //nombre completo
    var var_E = String.fromCharCode(69);
    var var_d = String.fromCharCode(100);
    var var_d = String.fromCharCode(100);
    var var_y = String.fromCharCode(121);
    alert(var_E + var_d + var_d + var_y)
}

function MostrarAbecedario(){
    //mostrar el abcedario
    inicio = 97
    fin = 122
    while (fin >= inicio) {
        var letra = String.fromCharCode(inicio);
        alert(letra)
        inicio++
    }
}

function ContarVocales(){
    var cadena = prompt("Ingrese una Cadena", "Universidad Cumbre")
    var longitudCad = cadena.length
    var i = 0
    var contar = 0
    while (longitudCad > i) {
        var caracter = cadena[i]
        i++
        if (caracter == 'a' 
        || caracter == 'e' 
        || caracter == 'i'  
        || caracter == 'o'  
        || caracter == 'u') {
            contar = contar + 1
        }
        //alert(caracter)
    }
    alert("La frecuencia de 'a, e, i' es: " + contar)
}

function ContarPalabras(){
    var cadena = prompt("Ingrese una Cadena", "Universidad Privada Cumbre")
    var longitudCad = cadena.length
    var i = 0
    var contar = 1
    while (longitudCad > i) {
        var caracter = cadena[i]
        i++
        if (caracter == ' ') {
            contar = contar + 1
        }
    }
    alert("La cantidad de palabras es: " + contar)
}
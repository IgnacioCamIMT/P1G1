
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
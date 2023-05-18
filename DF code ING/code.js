
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
    var resp = 0
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
        if(dig == 3){
            alert("Existe el dig 3")
        }
        N = parseInt(N / 10)
    }
}


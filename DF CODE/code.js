function factorialN() {
    var N = prompt("Ingrese un valor:", 3);
    var i = 1;
    var resp = 1;

    if (N >= 0) {
        if (N == 0) {
            alert("El factorial de " + N + " es " + resp + ".");
        } else {
            while (i <= N) {
                resp *= i;
                i += 1;
            }
            alert("El factorial de " + N + " es " + resp + ".");
        }
    } else {
        alert("No existe el factorial de un negativo.");
    }
}

function mayorAyB() {
    var A = prompt("Ingrese A", 10);
    A = parseInt(A);
    var B = prompt("Ingrese B", 7);
    B = parseInt(B);

    if (A == B) {
        alert("Los dos son iguales.");
    } else {
        if (A > B) {
            alert("El mayor es A: " + A);
        } else {
            alert("El mayor es B: " + B);
        }
    }
}

function menorAyB() {
    var A = prompt("Ingrese A", 10);
    A = parseInt(A);
    var B = prompt("Ingrese B", 7);
    B = parseInt(B);

    if (A == B) {
        alert("Los dos son iguales.");
    } else {
        if (A > B) {
            alert("El menor es B: " + B);
        } else {
            alert("El menor es A: " + A);
        }
    }
}

function obtenerDiv() {
    var A = parseInt(prompt("Ingrese A:", 10));
    var B = parseInt(prompt("Ingrese B:", 7));
    var resultado = ~~(A / B);

    alert(resultado);
}

function obtenerMod() {
    var A = parseInt(prompt("Ingrese A:", 10));
    var B = parseInt(prompt("Ingrese B:", 7));
    var resultado = A % B;

    alert(resultado);
}

function digitosN() {
    var N = parseInt(prompt("Ingresar N", 3));
    var resp = N;
    var cantidad = 1;

    if (N == 0) {
        cantidad = 1;
        alert(cantidad + " dígitos");
    } else {
        while (N != 0) {
            N = parseInt(N / 10);
            cantidad += 1;
        }
        alert(cantidad + " dígitos");
    }
}

function retornarDigitosN() {
    var N = parseInt(prompt("Ingresar N", 3));
    var dig = 0;

    if (N == 0) {
        dig = N;
        alert(dig);
    } else {
        while (N != 0) {
            dig = N % 10;
            alert(dig);
            N = parseInt(N / 10);
        }
    }
}

function mostrarTres() {
    var N = parseInt(prompt("Ingresar N", 3));
    var dig = 0;

    while (N != 0) {
        dig = N % 10;
        if (dig == 3) {
            alert("Existe el número 3");
            break
        }
        N = parseInt(N / 10);
    }
}

function areaPerimetroTrapecio() {
    var h = parseInt(prompt("Ingrese h:", 10));
    var b = parseInt(prompt("Ingrese b:", 5));
    var B = parseInt(prompt("Ingrese B:", 15));
    var a = parseInt(prompt("Ingrese a:", 10));
    var c = parseInt(prompt("Ingrese c:", 7));

    var Area = 0, Perimetro = 0;

    Area = ((b + B) / 2) * h;
    Perimetro = a + b + B + c;

    alert("El área es: " + Area);
    alert("El perímetro es: " + Perimetro);
}

function NParOImpar() {
    /* If normal

    var N = parseInt(prompt("Ingrese N:", 115));

    if ((N % 2) == 0) {
        alert(N + " es par.");
    } else {
        alert(N + " es impar.");
    }

    */
   
    // If abreviado

    var N = parseInt(prompt("Ingrese N:", 115));
    (N % 2) == 0 ? 10 : 1;
}

function ifNormal() {
    var N = parseInt(prompt("Ingrese N:", 115));

    if (N > 5) {
        N = 10;
    } else {
        N = 1;
    }
    alert(N)
}

function ifAbreviado() {
    var N = parseInt(prompt("Ingrese N:", 115));
    N = (N > 5) ? 10 : 1;
    alert(N);
}

function digitosNFOR() {
    var N = parseInt(prompt("Ingresar N", 3));

    if (N == 0) {
        alert(1 + " dígitos");
    } else {
        for (var cantidad = 0; N != 0; cantidad += 1) {
            N = parseInt(N / 10);
        }
        alert(cantidad + " dígitos");
    }
}

// Práctico Segundo Parcial



function digitosImpares() {
    var N = parseInt(prompt("Ingresar N", 3));
    var dig = 0;

    while (N != 0) {
        dig = N % 10;
        if (dig % 2 != 0) {
            alert(dig)
        }
        N = parseInt(N / 10);
    }
}

function sumatoria1a10() {
    var sumatoria = 0;
    var i = 1;

    while (i <= 10) {
        sumatoria += i;
        i++;
    }
    alert("sumatoria del 1 al 10: " + sumatoria);
}

function areaVolumenCilindro() {
    var r = parseInt(prompt("Ingrese el radio:", 10));
    var h = parseInt(prompt("Ingrese la altura:", 5));

    var Area = 0, Volumen = 0;

    Area = 2 * Math.PI * r * (r + h);
    Volumen = Math.PI * Math.pow(r, 2) * h;

    alert("El área es: " + Area);
    alert("El perímetro es: " + Volumen);
}

function mostrarNumPosNeg() {
    var N = parseInt(prompt("Ingresar N", 3));

    if (N == 0) {
        alert("Neutro");
    } else {
        if (N > 0) {
            alert("Positivo");
        } else {
            alert("Negativo");
        }
    }
}

function mostrarNumMenor() {
    var A = parseInt(prompt("Ingrese A:", 10));
    var B = parseInt(prompt("Ingrese B:", 7));

    if (A > B) {
        alert(B + " es menor");
    } else {
        alert(A + " es menor");
    }
}

function NmultiploDeM() {
    var N = parseInt(prompt("Ingrese N:", 10));
    var M = parseInt(prompt("Ingrese M:", 5));

    if ((N % M) == 0) {
        alert(N + " es múltiplo de " + M);
    } else {
        alert(N + " no es múltiplo de " + M);
    }
}

function sumatoriaMultiplosTres() {
    var N = parseInt(prompt("Ingrese N:", 10));
    var sum = 0, dig = 0;
    
    while (N != 0) {
        dig = N % 10;
        if ((dig % 3) == 0) {
            sum += dig;
        }
        N = parseInt(N / 10);
    }

    alert(sum);
}

function sumAyBInclusivo() {
    var A = parseInt(prompt("Ingrese A:", 3));
    var B = parseInt(prompt("Ingrese B:", 9));
    var suma = 0;
    
    while (A <= B) {
        suma = suma + A;
        A = A + 1;
    }
    
    alert(suma);
}

function promedioNnotas() {
    var N = parseInt(prompt("Ingrese N:", 15));
    var suma = 0;
    var i = 0;
    
    while (i < N) {
        var nota = parseInt(prompt("Ingrese la nota:", 80));
        suma = suma + nota;
        i = i + 1;
    }
    
    suma = suma / N;
    alert(suma);
}

var myVarGlobal = "Hola Mundo";

function obtenerNombreCompleto(nombre, apellido) {
    var nombreCompleto = nombre + " " + apellido + " " + myVarGlobal;
    return nombreCompleto;
}

function obtenerEdad(edad) {
    edad = edad + 10;
    return edad;
}

function verificarMayorEdad(edad) {
    if (edad >= 18) {
        alert("Puedes pasar " + myVarGlobal);
    } else {
        alert("Vuelve cuando tengas 18 " + myVarGlobal);
    }
}

function funcionConReturn() {
    var myNombreCompleto = obtenerNombreCompleto("Ignacio", "Camacho");
    var myEdad = obtenerEdad(14);
    alert("Nombre: " + myNombreCompleto);
    alert("Edad: " + myEdad);
    verificarMayorEdad(myEdad);
}

// SECCIÓN DE CÓDIGO PARA LA CALCULADORA

// Dar un nuevo valor al INPUT "resultado" en la pag HTML.
function darValor(valor) {
    document.getElementById("resultado").value = valor;
}

// Obtener el valor actual del INPUT "resultado" en la pag HTML.
function obtenerValor() {
    var numero = document.getElementById("resultado").value;
    return numero;
}

// Adjuntar un nuevo valor a la derecha
// del INPUT "resultado" en la pag HTML
function adjuntarValor(numero) {
    var actualNumero = obtenerValor();
    var juntarNumero = actualNumero + "" + numero;
    darValor(juntarNumero);
}

function calcularFactorial(N) {
    var i = 1;
    var resp = 1;

    if (N >= 0) {
        if (N == 0) {
            return resp;
        } else {
            while (i <= N) {
                resp *= i;
                i += 1;
            }
            return resp;
        }
    } else {
        alert("No existe el factorial de un negativo.");
        return(N);
    }
}

function factorial() {
    var actualValor = obtenerValor();
    darValor(calcularFactorial(actualValor));
}

function potencia() {
    alert("Soy Potencia");
}

function borrar() {
    darValor("");
}

function dividir() {
    alert("Soy Dividir");
}

function multiplicar() {
    alert("Soy Multiplicar");
}

function restar() {
    alert("Soy Restar");
}

function sumar() {
    alert("Soy Sumar");
}

function igual() {
    alert("Soy Igual");
}

function MOD() {
    alert("Soy MOD");
}

function inverso() {
    var actualValor = obtenerValor();
    darValor(actualValor*(-1));
}

function numero(dig) {
    adjuntarValor(dig);
}
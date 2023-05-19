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
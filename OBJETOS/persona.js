// 1.- Nombre de la clase
class Persona{
    carnet = 0;
    nombre = "";
    edad = 0;

    constructor() {
        this.carnet = 1234567;
        this.nombre = "MyNombre";
        this.edad = 100;
    }

    //4 Setters and Getters - dar y obtener valores
    getCarnet() {
        return this.carnet;
    }
    
    getNombre() {
        return this.nombre;
    }
    
    getEdad() {
        return this.edad;
    }
    
    setCarnet(carnetNuevo) {
        this.carnet = carnetNuevo;
    }
    
    setNombre(nombreNuevo) {
        this.nombre = nombreNuevo;
    }
    
    setEdad(edadNueva) {
        this.edad = edadNueva;
    }
    
    // 5.- Métodos
    
    toString() {
        return this.getCarnet() + " "
        + this.getNombre() + " "
        + this.getEdad();
    }

    esVocal(caracter) {
        return caracter == 'a' || caracter == 'e' || caracter == 'i' || caracter == 'o' || caracter == 'u' ||
            caracter == 'A' || caracter == 'E' || caracter == 'I' || caracter == 'O' || caracter == 'U';
    }

    contarVocales() {
        var cadena = this.getNombre();
        var longCad = cadena.length;
        var i = 0;
        var frecuencia = 0;

        while (i < longCad) {
            var caracter = cadena[i];
            if (esVocal(caracter)){
                frecuencia++;
            }
            i++;
        }
        alert("La cantidad de vocales es: " + frecuencia)
    }
}
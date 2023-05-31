class Estudiante {
    carnet = 0;
    nombre = "";
    apellido = "";

    constructor() {
        this.carnet = 1234567;
        this.nombre = "Ignacio";
        this.apellido = "Camacho";
    }

    GetCarnet() { return this.carnet; }
    GetNombre() { return this.nombre; }
    GetApellido() { return this.apellido; }

    SetCarnet(valor) { this.carnet = valor; }
    SetNombre(valor) { this.nombre = valor; }
    SetApellido(valor) { this.apellido = valor; }

    toString(){
        return "Carnet: " + this.GetCarnet() 
        + ", Nombre: " 
        + this.GetNombre() 
        + ", Apellido: " 
        + this.GetApellido() 
    }
}
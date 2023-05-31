class Asistencia{
    fecha = "01/01/1999"
    asistencia = ""
    estudiante = new Persona()
    materia = new Materia()

    constructor(){
        this.fecha = "30/05/2023"
        this.asistencia = "si"
        this.estudiante.SetNombre("AAA")
        this.materia.SetNombre("MMMMMMMM")
    }

    GetFecha() { return this.fecha }
    GetAsistencia() { return this.asistencia }
    GetEstudiante() { return this.estudiante }
    GetMateria() { return this.materia }

    
    SetFecha(valor) { this.fecha = valor}
    SetAsistencia(valor) { this.aula = valor}
    SetEstudiante(valor) { this.estudiante = valor}
    SetMateria(valor) { this.materia = valor}

    toString(){
        return "Asistencia: " + this.GetFecha() 
        + " " 
        + this.GetAsistencia() 
        + " " 
        + this.GetEstudiante().toString() 
        + " " 
        + this.GetMateria().toString() 
        + " " 
    }

}
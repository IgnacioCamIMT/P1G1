function VerPersonas() {
    var persona1 = new Persona()
    persona1.SetNombre("Escalante")
    persona1.SetEdad(15)
    persona1.SetCarnet(1000)

    var materia1 = new Materia()
    materia1.SetCapacidad(21)
    materia1.SetAula("B206")
    materia1.SetNombre("Programacion 2")

    var asistencia1 = new Asistencia()
    asistencia1.SetEstudiante(persona1)
    asistencia1.SetMateria(materia1)
    asistencia1.SetFecha(materia1)

alert(asistencia1.toString())
    //alert(persona1.toString())
    //alert(materia1.toString())


    
}











/*

Realizar la creacion de la clase "Estudiante" con las siguientes propiedades: 
    - carnet
    - nombre
    - apellido

*/
function VerPersonas() {
    var persona1 = new Persona();
    persona1.SetNombre("Ignacio");
    persona1.SetEdad(24);
    persona1.SetCarnet(1000);

    var materia1 = new Materia();
    materia1.SetCapacidad(21);
    materia1.SetAula("B206");
    materia1.SetNombre("Programación II");

    var asistencia1 = new Asistencia();
    asistencia1.SetEstudiante(persona1);
    asistencia1.SetMateria(materia1);

    var estudiante1 = new Estudiante();
    estudiante1.SetCarnet(1000);
    estudiante1.SetNombre("Eustaquio");
    estudiante1.SetApellido("Marquez");

    alert(estudiante1.toString());

    // alert(asistencia1.toString());

    // alert(persona1.toString());
    // alert(materia1.toString());
}



/*  Realizar la creación de la clase "Estudiante"
    con las siguientes propiedades:
    - Carnet
    - Nombre
    - Apellido
*/
function verPersonas() {
    var persona = new Persona(); // Se crea una instancia de la clase
    persona.setNombre("Ignacio");
    persona.setCarnet(15);
    var name = persona.getNombre();

    alert(persona.toString());

}
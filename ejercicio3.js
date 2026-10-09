function Estudiante(nombre, curso, nota) {
  this.nombre = nombre;
  this.curso = curso;
  this.nota = nota;
  
  this.aprobado = this.nota >= 3.0;

  this.mostrarResultado = function() {
    const estado = this.aprobado ? "APROBÓ" : "REPROBÓ";
    console.log(`El estudiante ${this.nombre} del curso '${this.curso}' obtuvo nota de ${this.nota}: ${estado}.`);
  };
}

const est1 = new Estudiante("Laura Gómez", "JavaScript POO", 4.5);
const est2 = new Estudiante("Carlos Pérez", "JavaScript POO", 2.8);
const est3 = new Estudiante("Ana Rodríguez", "Node.js", 3.0);
const est4 = new Estudiante("David Silva", "Node.js", 1.9);

console.log("NOTAS");
est1.mostrarResultado();
est2.mostrarResultado();
est3.mostrarResultado();
est4.mostrarResultado();
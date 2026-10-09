function Mascota(nombre, especie, edad, peso) {
  this.nombre = nombre;
  this.especie = especie;
  this.edad = edad; 
  this.peso = peso; 

  this.presentarse = function() {
    return `Hola, mi nombre es ${this.nombre}, soy un ${this.especie}, tengo ${this.edad} años y peso ${this.peso} kg.`;
  };
}

const mascota1 = new Mascota("Lucas", "Perro", 4, 15.5);
const mascota2 = new Mascota("Mishuca", "Gato", 2, 4.2);
const mascota3 = new Mascota("Roco", "Loro", 6, 0.8);

console.log("REGISTRO");
console.log(mascota1.presentarse());
console.log(mascota2.presentarse());
console.log(mascota3.presentarse());
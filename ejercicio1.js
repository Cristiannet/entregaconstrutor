function Computador(marca, procesador, ram, precio) {
  this.marca = marca;
  this.procesador = procesador;
  this.ram = ram;
  this.precio = precio;
}

// Instanciación de 3 objetos únicos
const pc1 = new Computador("ASUS", "Intel Core i7", 16, 1200);
const pc2 = new Computador("Apple", "M5", 32, 2400);
const pc3 = new Computador("Lenovo", "AMD Ryzen 5", 8, 650);

console.log("COMPUTADORES");
console.log(pc1);
console.log(pc2);
console.log(pc3);
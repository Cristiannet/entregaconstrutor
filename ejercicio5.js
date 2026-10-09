const prompt = require("prompt-sync")();

function Vehiculo(marca, modelo, anio, kilometraje, encendido = false) {
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
  this.kilometraje = Number(kilometraje);
  this.encendido = encendido;

  this.encender = function() {
    this.encendido = true;
    console.log(`El ${this.marca} ${this.modelo} está encendido.`);
  };

  this.apagar = function() {
    this.encendido = false;
    console.log(`El ${this.marca} ${this.modelo} está apagado.`);
  };

  this.conducir = function(km) {
    if (this.encendido) {
      this.kilometraje += km;
      console.log(`Se condujeron ${km} km. Nuevo kilometraje: ${this.kilometraje}`);
    } else {
      console.log("No puedes conducir si el vehículo está apagado.");
    }
  };
}

const vehiculos = [];

for (let i = 1; i <= 3; i++) {
  console.log(`--- Ingrese datos del vehículo ${i} ---`);
  const marca = prompt("Marca: ");
  const modelo = prompt("Modelo: ");
  const anio = prompt("Año: ");
  const km = prompt("Kilometraje actual: ");

  const auto = new Vehiculo(marca, modelo, anio, km);
  vehiculos.push(auto);
}

vehiculos[0].encender();
vehiculos[0].conducir(50);
vehiculos[0].apagar();

console.log(vehiculos);
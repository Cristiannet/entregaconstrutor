function Libro(titulo, autor, paginas, genero) {
  this.titulo = titulo;
  this.autor = autor;
  this.paginas = paginas;
  this.genero = genero;
  this.prestado = false;

  this.prestar = function() {
    if (!this.prestado) {
      this.prestado = true;
      console.log(`Éxito: El libro '${this.titulo}' ha sido prestado correctamente.`);
    } else {
      console.log(`ALERTA: El libro '${this.titulo}' ya se encuentra prestado actualmente.`);
    }
  };

  this.devolver = function() {
    if (this.prestado) {
      this.prestado = false;
      console.log(
    )}}}
/* function sumar(a, b) {
  return a + b;
} */

let sumar = (a, b) => a + b;

console.log(sumar(10, 20));

/* function saludar(){
    return 'hola mundo';
} */
let saludar = () => 'hola mundo';

console.log(saludar());

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}

console.log(deadpool.getNombre());
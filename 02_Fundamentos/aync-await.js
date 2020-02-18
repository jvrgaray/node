/* let getNombre = async () => {
  throw new Error("No existe un nombre para ese usuario");
  return "Javier";
}; */

let getNombre = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Javier");
    }, 3000);
  });
};

let saludo = async () => {
    let nombre = await getNombre();
    return `hola ${nombre}`;
}

/* getNombre()
  .then(nombre => {
    console.log(nombre);
  })
  .catch(e => {
    console.log("Error de Async ", e);
  }); */


  saludo()
  .then(mensaje => {
    console.log(mensaje);
  })
  .catch(e => {
    console.log("Error de Async ", e);
  });
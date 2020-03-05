const fs = require("fs");

let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if(!Number(base)){
        reject(`el valor introducido "${base}" no es un numero`);
        return;
    }
    let data1 = "";

    for (let i = 1; i <= limite; i++) {
      data1 += `${base} x ${i} = ${base * i} \n`;
    }

    const data = new Uint8Array(Buffer.from(data1));
    fs.writeFile(`tablas/tabla-${base}_limite-${limite}.txt`, data, err => {
      if (err) reject(err);
      else resolve(`tabla-${base}_limite-${limite}.txt`);
    });
  });
};

let listarTabla = (base, limite) => {
  return new Promise((resolve, reject) => {
    let tabla = "";
    for (let i = 1; i <= limite; i++){
      tabla += `\n${base} x ${i} = ${base * i}`;
    }
    resolve(tabla);
  });
}

module.exports = {
  crearArchivo, listarTabla
};

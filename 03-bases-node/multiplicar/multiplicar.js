const fs = require("fs");

let crearArchivo = base => {
  return new Promise((resolve, reject) => {
    if(!Number(base)){
        reject(`el valor introducido "${base}" no es un numero`);
        return;
    }
    let data1 = "";

    for (let i = 1; i < 11; i++) {
      data1 += `${base} x ${i} = ${base * i} \n`;
    }

    const data = new Uint8Array(Buffer.from(data1));
    fs.writeFile(`tablas/tabla-${base}.txt`, data, err => {
      if (err) reject(err);
      else resolve(`tabla-${base}.txt`);
    });
  });
};

module.exports = {
  crearArchivo
};
